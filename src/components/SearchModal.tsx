import React, { useState, useEffect, useRef } from 'react';
import { Tool } from '../types';
import { Search, X, Star, ArrowRight, Sparkles, Tag, ExternalLink } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allTools: Tool[];
  onViewDetail: (slug: string) => void;
  onTryTool: (tool: Tool) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  allTools,
  onViewDetail,
  onTryTool
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  const results = q
    ? allTools.filter((t) => {
        const matchName = t.name.toLowerCase().includes(q);
        const matchTagline = t.tagline.toLowerCase().includes(q);
        const matchShortDesc = t.short_description.toLowerCase().includes(q);
        const matchFeatures = t.features.some((f) => f.toLowerCase().includes(q));
        const matchCategories = t.category_slugs.some((c) => c.toLowerCase().includes(q));
        const matchUsers = t.target_users.some((u) => u.toLowerCase().includes(q));
        return matchName || matchTagline || matchShortDesc || matchFeatures || matchCategories || matchUsers;
      })
    : allTools.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm công cụ AI (ví dụ: ChatGPT, Voice AI, Coding, Slide...)"
            className="w-full bg-transparent text-white text-base placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-800 hover:text-white rounded border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-2 flex-1">
          <div className="text-[11px] font-semibold uppercase text-slate-400 px-3 py-1 flex items-center justify-between">
            <span>{query ? `Kết quả tìm kiếm (${results.length})` : 'Công cụ đề xuất phổ biến'}</span>
            <span className="text-slate-500">Ấn để xem chi tiết</span>
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">Không tìm thấy công cụ AI nào khớp với &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">Thử tìm theo từ khóa: text to video, clone voice, presentation, python...</p>
            </div>
          ) : (
            results.map((tool) => (
              <div
                key={tool.id}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all cursor-pointer"
                onClick={() => {
                  onClose();
                  onViewDetail(tool.slug);
                }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 p-1 flex items-center justify-center shrink-0">
                    <img src={tool.logo_url} alt={tool.name} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-white group-hover:text-indigo-300 transition-colors truncate">
                        {tool.name}
                      </h4>
                      <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">
                        {tool.pricing_type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate max-w-md">{tool.tagline || tool.short_description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <div className="hidden sm:flex items-center gap-1 text-amber-400 text-xs font-semibold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{tool.rating.toFixed(1)}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between shrink-0">
          <span>Mẹo: Nhập vai trò như &ldquo;designer&rdquo; hoặc &ldquo;developer&rdquo; để lọc danh sách</span>
          <span>AI Tools Hub 2026</span>
        </div>
      </div>
    </div>
  );
};
