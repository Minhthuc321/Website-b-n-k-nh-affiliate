import React from 'react';
import { Search, Sparkles, Zap, ShieldCheck, ArrowRight, TrendingUp } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  onOpenQuiz: () => void;
  onExploreClick: () => void;
  totalToolsCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onOpenQuiz,
  onExploreClick,
  totalToolsCount
}) => {
  const [inputVal, setInputVal] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onSearch(inputVal.trim());
    }
  };

  const quickTags = [
    { label: 'ChatGPT', query: 'ChatGPT' },
    { label: 'Cursor', query: 'Cursor' },
    { label: 'Voice AI', query: 'Voice' },
    { label: 'Video AI', query: 'Video' },
    { label: 'Free Plan', query: 'Free' },
    { label: 'Canva', query: 'Canva' },
    { label: 'Claude', query: 'Claude' }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-blue-600/15 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Nền tảng Khám phá & So sánh {totalToolsCount}+ Công cụ AI Hàng Đầu 2026</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Tìm đúng công cụ AI <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            cho công việc của bạn
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Khám phá những công cụ AI tốt nhất cho <strong className="text-white font-semibold">Văn phòng</strong>,{' '}
          <strong className="text-white font-semibold">Designer</strong>,{' '}
          <strong className="text-white font-semibold">Creator</strong>,{' '}
          <strong className="text-white font-semibold">Voice AI</strong> và{' '}
          <strong className="text-white font-semibold">Developer</strong>.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2 shadow-2xl shadow-indigo-950/40 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Nhập tên tool, nhu cầu (vd: viết slide, clone giọng, sinh code...)"
              className="w-full bg-transparent text-white px-3 py-2 text-sm sm:text-base placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md hover:shadow-indigo-600/30 flex items-center gap-1.5"
            >
              <span>Tìm kiếm</span>
            </button>
          </div>
        </form>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs text-slate-400">
          <span className="flex items-center gap-1 text-slate-500 font-medium mr-1">
            <TrendingUp className="w-3.5 h-3.5" /> Xu hướng:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => onSearch(tag.query)}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors"
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* 2 Main Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2 group"
          >
            <span>Khám phá công cụ</span>
            <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenQuiz}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
          >
            <Zap className="w-4 h-4 text-white fill-white" />
            <span>Tìm AI phù hợp với tôi (Quiz 4 bước)</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="px-2">
            <p className="text-2xl font-bold text-white tracking-tight">{totalToolsCount}+</p>
            <p className="text-xs text-slate-400 mt-0.5">Công cụ AI tuyển chọn</p>
          </div>
          <div className="px-2">
            <p className="text-2xl font-bold text-white tracking-tight">5</p>
            <p className="text-xs text-slate-400 mt-0.5">Nhóm ngành chuyên biệt</p>
          </div>
          <div className="px-2">
            <p className="text-2xl font-bold text-white tracking-tight">100%</p>
            <p className="text-xs text-slate-400 mt-0.5">Link chính thức & Verified</p>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <p className="text-2xl font-bold text-white tracking-tight">Miễn phí</p>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Minh bạch hoa hồng</p>
          </div>
        </div>
      </div>
    </section>
  );
};
