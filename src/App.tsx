/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Tool, Category, TargetUser, PricingType } from './types';
import { CATEGORIES } from './data/categories';
import { SEED_TOOLS } from './data/seedTools';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { FilterBar } from './components/FilterBar';
import { ToolCard } from './components/ToolCard';
import { ToolDetailView } from './components/ToolDetailView';
import { RecommendationQuiz } from './components/RecommendationQuiz';
import { ToolComparisonModal } from './components/ToolComparisonModal';
import { SearchModal } from './components/SearchModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { Scale, Sparkles, AlertCircle, ArrowUp, RefreshCw } from 'lucide-react';

export default function App() {
  // State: Tools & Categories
  const [tools, setTools] = useState<Tool[]>(SEED_TOOLS);
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);
  const [loading, setLoading] = useState(false);

  // Routing State
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'admin'>('home');
  const [selectedToolSlug, setSelectedToolSlug] = useState<string | null>(null);

  // Filter & Search State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [selectedTargetUser, setSelectedTargetUser] = useState<string>('all');
  const [freePlanOnly, setFreePlanOnly] = useState<boolean>(false);
  const [affiliateOnly, setAffiliateOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Comparison List
  const [comparedTools, setComparedTools] = useState<Tool[]>([]);

  // Scroll to top visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Fetch from backend API
  const fetchTools = async () => {
    try {
      const res = await fetch('/api/tools?limit=100');
      if (res.ok) {
        const data = await res.json();
        if (data.tools && data.tools.length > 0) {
          setTools(data.tools);
        }
      }
    } catch (err) {
      console.warn('Backend tools API not reachable, using local seed dataset:', err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      if (res.ok) {
        const data = await res.json();
        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }
      }
    } catch (err) {
      console.warn('Backend categories API not reachable, using local seed categories:', err);
    }
  };

  useEffect(() => {
    fetchTools();
    fetchCategories();

    // Check URL path on mount for direct routing (e.g., #admin, /tools/slug)
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path.startsWith('/tools/')) {
        const slug = path.replace('/tools/', '');
        setSelectedToolSlug(slug);
        setCurrentView('detail');
      } else if (path === '/admin' || hash === '#admin') {
        setCurrentView('admin');
      } else {
        setCurrentView('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);

    // Keyboard shortcut for Cmd+K / Ctrl+K search
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Scroll listener
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update Category Counts dynamically
  const categoriesWithCounts = useMemo(() => {
    return categories.map((cat) => {
      const count = tools.filter((t) =>
        t.status === 'active' &&
        (cat.slug === 'office' ? t.category_slugs.includes('office') || t.target_users.includes('office') :
         cat.slug === 'designer' ? t.category_slugs.includes('designer') || t.target_users.includes('designer') :
         cat.slug === 'creator' ? t.category_slugs.includes('creator') || t.target_users.includes('creator') :
         cat.slug === 'voice-ai' ? t.category_slugs.includes('voice-ai') || t.target_users.includes('voice') :
         cat.slug === 'developer' ? t.category_slugs.includes('developer') || t.target_users.includes('developer') :
         t.category_slugs.includes(cat.slug))
      ).length;
      return { ...cat, count };
    });
  }, [categories, tools]);

  // Filter and Sort Tools
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // 1. Status
      if (tool.status !== 'active') return false;

      // 2. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = tool.name.toLowerCase().includes(q);
        const matchTagline = tool.tagline.toLowerCase().includes(q);
        const matchShortDesc = tool.short_description.toLowerCase().includes(q);
        const matchFeatures = tool.features.some((f) => f.toLowerCase().includes(q));
        const matchCategories = tool.category_slugs.some((c) => c.toLowerCase().includes(q));
        if (!matchName && !matchTagline && !matchShortDesc && !matchFeatures && !matchCategories) {
          return false;
        }
      }

      // 3. Category Filter
      if (selectedCategory !== 'all') {
        const isMatched =
          tool.category_slugs.includes(selectedCategory) ||
          (selectedCategory === 'voice-ai' && tool.target_users.includes('voice')) ||
          (selectedCategory === 'office' && tool.target_users.includes('office')) ||
          (selectedCategory === 'designer' && tool.target_users.includes('designer')) ||
          (selectedCategory === 'creator' && tool.target_users.includes('creator')) ||
          (selectedCategory === 'developer' && tool.target_users.includes('developer'));
        if (!isMatched) return false;
      }

      // 4. Target User Filter
      if (selectedTargetUser !== 'all') {
        if (!tool.target_users.includes(selectedTargetUser as TargetUser)) return false;
      }

      // 5. Pricing Filter
      if (selectedPricing !== 'all') {
        if (selectedPricing === 'free' && tool.pricing_type !== 'Free') return false;
        if (selectedPricing === 'freemium' && tool.pricing_type !== 'Freemium') return false;
        if (selectedPricing === 'paid' && tool.pricing_type !== 'Paid') return false;
      }

      // 6. Free plan toggle
      if (freePlanOnly && !tool.free_plan) return false;

      // 7. Affiliate Only toggle
      if (affiliateOnly && !tool.affiliate_enabled) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'clicks') return (b.clicks_count || 0) - (a.clicks_count || 0);
      if (sortBy === 'newest') return new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime();
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // default 'popular': recommended first, then featured, then rating
      if (a.recommended && !b.recommended) return -1;
      if (!a.recommended && b.recommended) return 1;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.rating - a.rating;
    });
  }, [tools, searchQuery, selectedCategory, selectedTargetUser, selectedPricing, freePlanOnly, affiliateOnly, sortBy]);

  // Actions
  const handleViewDetail = (slug: string) => {
    setSelectedToolSlug(slug);
    setCurrentView('detail');
    window.history.pushState(null, '', `/tools/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedToolSlug(null);
    window.history.pushState(null, '', '/');
  };

  const handleOpenAdmin = () => {
    setCurrentView('admin');
    window.history.pushState(null, '', '/admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTryTool = (tool: Tool) => {
    // Open through the affiliate redirect route
    const redirectUrl = `/go/${tool.slug}?utm_source=aitoolshub_ui&utm_medium=button_try&utm_campaign=featured`;
    window.open(redirectUrl, '_blank');
  };

  const handleToggleCompare = (tool: Tool) => {
    setComparedTools((prev) => {
      const exists = prev.find((t) => t.id === tool.id);
      if (exists) {
        return prev.filter((t) => t.id !== tool.id);
      } else {
        if (prev.length >= 4) {
          alert('Bạn chỉ có thể so sánh tối đa 4 công cụ cùng một lúc.');
          return prev;
        }
        return [...prev, tool];
      }
    });
  };

  const handleRemoveComparedTool = (id: string) => {
    setComparedTools((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClearCompareAll = () => {
    setComparedTools([]);
  };

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    if (currentView !== 'home') {
      setCurrentView('home');
      window.history.pushState(null, '', '/');
    }
    const toolsSection = document.getElementById('tools-grid-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchTrigger = (query: string) => {
    setSearchQuery(query);
    if (currentView !== 'home') {
      setCurrentView('home');
      window.history.pushState(null, '', '/');
    }
    const toolsSection = document.getElementById('tools-grid-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentDetailTool = useMemo(() => {
    if (!selectedToolSlug) return null;
    return tools.find((t) => t.slug === selectedToolSlug) || null;
  }, [tools, selectedToolSlug]);

  const similarTools = useMemo(() => {
    if (!currentDetailTool) return [];
    return tools
      .filter((t) =>
        t.id !== currentDetailTool.id &&
        t.status === 'active' &&
        t.category_slugs.some((c) => currentDetailTool.category_slugs.includes(c))
      )
      .slice(0, 4);
  }, [tools, currentDetailTool]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenAdmin={handleOpenAdmin}
        onGoHome={handleBackToHome}
        comparedCount={comparedTools.length}
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {currentView === 'admin' ? (
          <AdminDashboard onBack={handleBackToHome} />
        ) : currentView === 'detail' && currentDetailTool ? (
          <ToolDetailView
            tool={currentDetailTool}
            similarTools={similarTools}
            onBack={handleBackToHome}
            onViewDetail={handleViewDetail}
            onTryTool={handleTryTool}
            onToggleCompare={handleToggleCompare}
            isCompared={comparedTools.some((t) => t.id === currentDetailTool.id)}
          />
        ) : (
          /* HOMEPAGE VIEW */
          <div>
            {/* Hero Section */}
            <Hero
              onSearch={handleSearchTrigger}
              onOpenQuiz={() => setIsQuizOpen(true)}
              onExploreClick={() => {
                const el = document.getElementById('tools-grid-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              totalToolsCount={tools.length}
            />

            {/* 5 Big Category Cards */}
            <CategoryCards
              categories={categoriesWithCounts}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            {/* Filter Bar */}
            <div id="tools-grid-section">
              <FilterBar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedPricing={selectedPricing}
                onSelectPricing={setSelectedPricing}
                selectedTargetUser={selectedTargetUser}
                onSelectTargetUser={setSelectedTargetUser}
                freePlanOnly={freePlanOnly}
                onToggleFreePlan={() => setFreePlanOnly((prev) => !prev)}
                affiliateOnly={affiliateOnly}
                onToggleAffiliateOnly={() => setAffiliateOnly((prev) => !prev)}
                sortBy={sortBy}
                onSelectSort={setSortBy}
                searchQuery={searchQuery}
                onClearSearch={() => setSearchQuery('')}
                totalFiltered={filteredTools.length}
              />
            </div>

            {/* Tools Grid Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              {filteredTools.length === 0 ? (
                <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center my-8">
                  <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">Không tìm thấy công cụ phù hợp</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
                    Không có công cụ AI nào khớp với tiêu chí tìm kiếm hoặc bộ lọc hiện tại của bạn.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedPricing('all');
                      setSelectedTargetUser('all');
                      setFreePlanOnly(false);
                      setAffiliateOnly(false);
                      setSearchQuery('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md"
                  >
                    Xóa toàn bộ bộ lọc
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      onViewDetail={handleViewDetail}
                      onTryTool={handleTryTool}
                      onToggleCompare={handleToggleCompare}
                      isCompared={comparedTools.some((t) => t.id === tool.id)}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Floating Comparison Drawer / Button */}
      {comparedTools.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40 animate-bounce">
          <button
            onClick={() => setIsCompareOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-2xl shadow-purple-900/50 border border-purple-400/30 transition-transform active:scale-95"
          >
            <Scale className="w-4 h-4" />
            <span>So sánh ({comparedTools.length}) công cụ</span>
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-30 p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 shadow-xl backdrop-blur-md transition-all"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer */}
      <Footer
        onSelectCategory={handleCategorySelect}
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allTools={tools}
        onViewDetail={handleViewDetail}
        onTryTool={handleTryTool}
      />

      <RecommendationQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        allTools={tools}
        onViewDetail={handleViewDetail}
        onTryTool={handleTryTool}
      />

      <ToolComparisonModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        comparedTools={comparedTools}
        onRemoveTool={handleRemoveComparedTool}
        onClearAll={handleClearCompareAll}
        onViewDetail={handleViewDetail}
        onTryTool={handleTryTool}
      />
    </div>
  );
}
