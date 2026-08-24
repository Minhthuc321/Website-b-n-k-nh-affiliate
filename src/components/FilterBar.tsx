import React from 'react';
import {
  Filter,
  SlidersHorizontal,
  ArrowUpDown,
  Sparkles,
  Check,
  Tag,
  DollarSign,
  Briefcase,
  X
} from 'lucide-react';
import { TargetUser } from '../types';

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedPricing: string;
  onSelectPricing: (pricing: string) => void;
  selectedTargetUser: string;
  onSelectTargetUser: (user: string) => void;
  freePlanOnly: boolean;
  onToggleFreePlan: () => void;
  affiliateOnly: boolean;
  onToggleAffiliateOnly: () => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
  searchQuery: string;
  onClearSearch: () => void;
  totalFiltered: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedPricing,
  onSelectPricing,
  selectedTargetUser,
  onSelectTargetUser,
  freePlanOnly,
  onToggleFreePlan,
  affiliateOnly,
  onToggleAffiliateOnly,
  sortBy,
  onSelectSort,
  searchQuery,
  onClearSearch,
  totalFiltered
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);

  const categories = [
    { slug: 'all', name: 'Tất cả' },
    { slug: 'office', name: 'Văn phòng' },
    { slug: 'designer', name: 'Designer' },
    { slug: 'creator', name: 'Creator Video' },
    { slug: 'voice-ai', name: 'Voice AI' },
    { slug: 'developer', name: 'Developer' }
  ];

  const pricingOptions = [
    { value: 'all', label: 'Mọi mức giá' },
    { value: 'free', label: 'Miễn phí 100%' },
    { value: 'freemium', label: 'Freemium' },
    { value: 'paid', label: 'Có phí (Paid)' }
  ];

  const targetUsers: { value: string; label: string }[] = [
    { value: 'all', label: 'Mọi đối tượng' },
    { value: 'office', label: 'Văn phòng' },
    { value: 'designer', label: 'Designer' },
    { value: 'creator', label: 'Content Creator' },
    { value: 'voice', label: 'Voice Artist / Podcast' },
    { value: 'developer', label: 'Lập trình viên' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Được quan tâm nhất' },
    { value: 'rating', label: 'Đánh giá cao nhất' },
    { value: 'clicks', label: 'Lượt dùng thử nhiều nhất' },
    { value: 'newest', label: 'Mới cập nhật' },
    { value: 'name', label: 'Tên A - Z' }
  ];

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPricing !== 'all' ? 1 : 0) +
    (selectedTargetUser !== 'all' ? 1 : 0) +
    (freePlanOnly ? 1 : 0) +
    (affiliateOnly ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const handleResetFilters = () => {
    onSelectCategory('all');
    onSelectPricing('all');
    onSelectTargetUser('all');
    if (freePlanOnly) onToggleFreePlan();
    if (affiliateOnly) onToggleAffiliateOnly();
    if (searchQuery) onClearSearch();
  };

  return (
    <div className="bg-slate-900/90 border-y border-slate-800 py-4 sticky top-16 z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => onSelectCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Pricing, Free Toggle, Sort */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Target User select */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 rounded-xl px-2.5 py-1.5 text-xs text-slate-300">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedTargetUser}
                onChange={(e) => onSelectTargetUser(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                {targetUsers.map((u) => (
                  <option key={u.value} value={u.value} className="bg-slate-900 text-white">
                    {u.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing Select */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 rounded-xl px-2.5 py-1.5 text-xs text-slate-300">
              <DollarSign className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedPricing}
                onChange={(e) => onSelectPricing(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                {pricingOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Free Plan Toggle */}
            <button
              onClick={onToggleFreePlan}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                freePlanOnly
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700/60 hover:text-slate-200'
              }`}
            >
              <Check className={`w-3 h-3 ${freePlanOnly ? 'opacity-100' : 'opacity-40'}`} />
              <span>Có Free Plan</span>
            </button>

            {/* Affiliate Toggle */}
            <button
              onClick={onToggleAffiliateOnly}
              className={`hidden md:flex px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all items-center gap-1.5 ${
                affiliateOnly
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700/60 hover:text-slate-200'
              }`}
            >
              <Sparkles className={`w-3 h-3 ${affiliateOnly ? 'opacity-100' : 'opacity-40'}`} />
              <span>Ưu đãi Affiliate</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 rounded-xl px-2.5 py-1.5 text-xs text-slate-300">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => onSelectSort(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-rose-400 hover:text-rose-300 font-medium px-2 py-1.5 rounded-lg hover:bg-rose-500/10 transition-colors flex items-center gap-1"
                title="Xóa toàn bộ bộ lọc"
              >
                <X className="w-3.5 h-3.5" />
                <span>Đặt lại ({activeFiltersCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Search & Result Count Bar */}
        {(searchQuery || selectedCategory !== 'all' || activeFiltersCount > 0) && (
          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div>
              Đang hiển thị <strong className="text-white font-bold">{totalFiltered}</strong> công cụ AI phù hợp
              {searchQuery && (
                <span className="ml-1 text-slate-300">
                  cho từ khóa &ldquo;<strong className="text-indigo-400">{searchQuery}</strong>&rdquo;
                </span>
              )}
            </div>

            {searchQuery && (
              <button
                onClick={onClearSearch}
                className="text-slate-400 hover:text-white flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Xóa tìm kiếm
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
