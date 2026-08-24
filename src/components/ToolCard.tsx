import React from 'react';
import { Tool } from '../types';
import {
  Star,
  ExternalLink,
  Check,
  Zap,
  Sparkles,
  Award,
  CheckCircle2,
  Plus,
  Scale
} from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  onViewDetail: (slug: string) => void;
  onTryTool: (tool: Tool) => void;
  onToggleCompare: (tool: Tool) => void;
  isCompared: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  onViewDetail,
  onTryTool,
  onToggleCompare,
  isCompared
}) => {
  const getTargetUserLabel = (key: string) => {
    switch (key) {
      case 'office':
        return 'Văn phòng';
      case 'designer':
        return 'Designer';
      case 'creator':
        return 'Creator';
      case 'voice':
        return 'Voice AI';
      case 'developer':
        return 'Developer';
      default:
        return key;
    }
  };

  return (
    <div className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-indigo-950/20">
      {/* Top Section: Logo, Title, Badges */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-xl bg-slate-800 border border-slate-700/80 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-sm group-hover:border-indigo-500/50 transition-colors">
              <img
                src={tool.logo_url}
                alt={tool.name}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3
                  onClick={() => onViewDetail(tool.slug)}
                  className="font-bold text-white text-base sm:text-lg hover:text-indigo-300 cursor-pointer transition-colors"
                >
                  {tool.name}
                </h3>

                {tool.recommended && (
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    <Award className="w-3 h-3 text-amber-400" />
                    Khuyên dùng
                  </span>
                )}
                {tool.featured && !tool.recommended && (
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    Nổi bật
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{tool.rating.toFixed(1)}</span>
                </div>
                <span className="text-slate-600 text-xs">•</span>
                <span className="text-xs text-slate-400">
                  {tool.review_count.toLocaleString()} đánh giá
                </span>
              </div>
            </div>
          </div>

          {/* Compare Button */}
          <button
            onClick={() => onToggleCompare(tool)}
            title={isCompared ? 'Bỏ khỏi so sánh' : 'Thêm vào so sánh'}
            className={`p-1.5 rounded-lg text-xs font-medium border transition-all ${
              isCompared
                ? 'bg-purple-600/20 text-purple-300 border-purple-500/40'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-700'
            }`}
          >
            <Scale className="w-4 h-4" />
          </button>
        </div>

        {/* Tagline / Short Description */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-3.5">
          {tool.short_description}
        </p>

        {/* Target Users Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {tool.target_users.map((role) => (
            <span
              key={role}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
            >
              {getTargetUserLabel(role)}
            </span>
          ))}

          {tool.free_plan ? (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Có Free Plan
            </span>
          ) : (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
              Trả phí / Trial
            </span>
          )}

          {tool.affiliate_enabled && (
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Ưu đãi đối tác
            </span>
          )}
        </div>

        {/* Highlight Features (top 2 bullets) */}
        <div className="space-y-1.5 mb-5 bg-slate-950/40 rounded-xl p-3 border border-slate-800/60">
          {tool.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pricing & CTAs */}
      <div>
        {/* Pricing Info */}
        <div className="flex items-center justify-between mb-4 pt-3 border-t border-slate-800 text-xs">
          <div>
            <span className="text-slate-400">Giá khởi điểm:</span>
            <p className="font-semibold text-white mt-0.5">{tool.starting_price}</p>
          </div>
          <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800 text-slate-300 border border-slate-700">
            {tool.pricing_type}
          </span>
        </div>

        {/* 2 Main Action CTAs: Xem chi tiết & Dùng thử */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetail(tool.slug)}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
          >
            Xem chi tiết
          </button>

          <button
            onClick={() => onTryTool(tool)}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-1.5 text-center group/btn"
          >
            <span>Dùng thử</span>
            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
