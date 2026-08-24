import React from 'react';
import {
  Sparkles,
  Search,
  Scale,
  SlidersHorizontal,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Compass
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenSearch: () => void;
  onOpenQuiz: () => void;
  onOpenCompare: () => void;
  onOpenDisclosure: () => void;
  compareCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenQuiz,
  onOpenCompare,
  onOpenDisclosure,
  compareCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-bold text-white tracking-tight">AI Tools Hub</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">2026</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">Discovery & Affiliate Platform</p>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentView === 'home'
                  ? 'text-white bg-slate-800/80 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-indigo-400" />
                Khám phá
              </span>
            </button>

            <button
              onClick={onOpenQuiz}
              className="px-3 py-2 text-sm font-medium rounded-lg text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 transition-colors flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              Tìm AI phù hợp (Quiz)
            </button>

            <button
              onClick={onOpenCompare}
              className="relative px-3 py-2 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center gap-1.5"
            >
              <Scale className="w-4 h-4 text-purple-400" />
              So sánh công cụ
              {compareCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold bg-purple-600 text-white rounded-full">
                  {compareCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate('admin')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentView === 'admin'
                  ? 'text-white bg-slate-800/80'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                Admin
              </span>
            </button>
          </nav>

          {/* Search Trigger & Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-3 px-3.5 py-2 text-xs text-slate-400 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 hover:text-slate-200 transition-all shadow-inner w-56"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="flex-1 text-left">Tìm ChatGPT, Voice, Code...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700 rounded">⌘K</kbd>
            </button>

            <button
              onClick={onOpenDisclosure}
              title="Chính sách Affiliate minh bạch"
              className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-900 rounded-lg border border-transparent hover:border-slate-800 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 rounded-lg flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-indigo-400" />
            Khám phá công cụ
          </button>
          <button
            onClick={() => {
              onOpenQuiz();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-amber-300 bg-amber-500/10 rounded-lg flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            Tìm AI phù hợp với tôi (Quiz 4 bước)
          </button>
          <button
            onClick={() => {
              onOpenCompare();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 rounded-lg flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-purple-400" />
              So sánh công cụ AI
            </span>
            {compareCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold bg-purple-600 text-white rounded-full">
                {compareCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              onNavigate('admin');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            Admin Dashboard & Clicks Analytics
          </button>
          <button
            onClick={() => {
              onOpenDisclosure();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 text-xs text-slate-400 hover:bg-slate-900 rounded-lg flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-slate-500" />
            Chính sách minh bạch Affiliate
          </button>
        </div>
      )}
    </header>
  );
};
