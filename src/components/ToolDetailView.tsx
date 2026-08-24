import React, { useState } from 'react';
import { Tool } from '../types';
import {
  ArrowLeft,
  Star,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Award,
  Sparkles,
  ShieldCheck,
  Share2,
  Scale,
  DollarSign,
  Users,
  Layers,
  Check,
  Copy,
  CheckCheck
} from 'lucide-react';

interface ToolDetailViewProps {
  tool: Tool;
  similarTools: Tool[];
  onBack: () => void;
  onViewDetail: (slug: string) => void;
  onTryTool: (tool: Tool) => void;
  onToggleCompare: (tool: Tool) => void;
  isCompared: boolean;
}

export const ToolDetailView: React.FC<ToolDetailViewProps> = ({
  tool,
  similarTools,
  onBack,
  onViewDetail,
  onTryTool,
  onToggleCompare,
  isCompared
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTargetUserTitle = (role: string) => {
    switch (role) {
      case 'office':
        return 'Nhân viên Văn phòng, Quản lý & HR';
      case 'designer':
        return 'Designer, Nghệ sĩ số & 3D Creator';
      case 'creator':
        return 'Content Creator, YouTuber & TikToker';
      case 'voice':
        return 'Voice Artist, Podcaster & Lồng tiếng';
      case 'developer':
        return 'Lập trình viên, Kỹ sư phần mềm & Indie Hacker';
      default:
        return role;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-20">
      {/* Top Breadcrumb Nav */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs text-slate-400">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép link' : 'Chia sẻ'}</span>
            </button>
            <button
              onClick={() => onToggleCompare(tool)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border transition-all ${
                isCompared
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{isCompared ? 'Đã thêm so sánh' : 'So sánh'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* HERO SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/40 mb-10 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            {/* Logo & Title info */}
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-950 border-2 border-slate-700 p-2 shrink-0 shadow-lg">
                <img
                  src={tool.logo_url}
                  alt={tool.name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {tool.name}
                  </h1>

                  {tool.recommended && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Khuyên dùng 2026
                    </span>
                  )}
                  {tool.featured && !tool.recommended && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      Nổi bật
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-slate-300 font-medium mb-3">
                  {tool.tagline}
                </p>

                {/* Rating & Pricing Pills */}
                <div className="flex items-center gap-3 flex-wrap text-xs">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{tool.rating.toFixed(1)} / 5.0</span>
                    <span className="text-slate-400 font-normal">({tool.review_count.toLocaleString()} đánh giá)</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                    {tool.pricing_type}
                  </span>

                  {tool.free_plan && (
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                      ✓ Có Free Plan
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons Box */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-64 shrink-0">
              <button
                onClick={() => onTryTool(tool)}
                className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Dùng thử {tool.name}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={tool.official_url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs text-center border border-slate-700 transition-colors"
              >
                Trang web chính thức
              </a>
            </div>
          </div>
        </div>

        {/* 2-COLUMN MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left / Main Column (2 spans) */}
          <div className="lg:col-span-2 space-y-10">
            {/* SECTION 1: Tool này dùng để làm gì? */}
            <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span>{tool.name} dùng để làm gì?</span>
              </h2>
              <div className="text-sm text-slate-300 leading-relaxed space-y-4">
                <p>{tool.full_description}</p>
                <p>{tool.short_description}</p>
              </div>
            </section>

            {/* SECTION 2: Tính năng chính */}
            <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Tính năng nổi bật</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {tool.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 3: Phù hợp với ai? */}
            <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                <span>Phù hợp với ai?</span>
              </h2>
              <div className="space-y-3">
                {tool.target_users.map((role) => (
                  <div
                    key={role}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{getTargetUserTitle(role)}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Tối ưu hóa quy trình làm việc, loại bỏ các tác vụ thủ công lặp lại và đẩy nhanh tiến độ sản phẩm.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: Ưu điểm & Nhược điểm (Pros & Cons) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Ưu điểm */}
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6">
                <h3 className="text-base font-bold text-emerald-300 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Ưu điểm (Pros)</span>
                </h3>
                <ul className="space-y-2.5">
                  {tool.pros.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-200/90">
                      <span className="text-emerald-400 font-bold mt-0.5">+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nhược điểm */}
              <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6">
                <h3 className="text-base font-bold text-rose-300 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <span>Nhược điểm (Cons)</span>
                </h3>
                <ul className="space-y-2.5">
                  {tool.cons.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-rose-200/90">
                      <span className="text-rose-400 font-bold mt-0.5">-</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* SECTION 5: Bảng giá chi tiết */}
            <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-indigo-400" />
                    <span>Bảng giá & Các gói dịch vụ</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Giá tham khảo từ trang chủ chính thức (có thể thay đổi theo chính sách hãng)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tool.pricing_plans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl p-5 border flex flex-col justify-between ${
                      plan.isPopular
                        ? 'bg-slate-800 border-indigo-500 ring-2 ring-indigo-500/30'
                        : 'bg-slate-950/60 border-slate-800'
                    }`}
                  >
                    <div>
                      {plan.isPopular && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500 text-white rounded mb-2 inline-block">
                          Phổ biến nhất
                        </span>
                      )}
                      <h4 className="text-base font-bold text-white">{plan.name}</h4>
                      <div className="my-3">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">{plan.price}</span>
                        <span className="text-xs text-slate-400 ml-1">/ {plan.period}</span>
                      </div>
                      {plan.description && (
                        <p className="text-xs text-slate-400 mb-4">{plan.description}</p>
                      )}

                      <ul className="space-y-2 mb-6 pt-3 border-t border-slate-800">
                        {plan.features.map((pf, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{pf}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onTryTool(tool)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                        plan.isPopular
                          ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                      }`}
                    >
                      Chọn gói {plan.name}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 6: Affiliate Disclosure */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 text-xs text-slate-400 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block mb-1">Minh bạch liên kết đối tác (Affiliate Disclosure)</strong>
                <p className="leading-relaxed">
                  Một số liên kết trên website là liên kết affiliate. Chúng tôi có thể nhận hoa hồng nếu bạn đăng ký thông qua liên kết này mà không làm tăng bất kỳ chi phí nào của bạn. Các đánh giá và xếp hạng được tổng hợp độc lập dựa trên giá trị sử dụng thực tế.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column / Sidebar */}
          <div className="space-y-6">
            {/* Quick Summary Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-400">
                Thông tin tổng quan
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Khởi điểm:</span>
                  <span className="font-bold text-white">{tool.starting_price}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Gói dùng thử Free:</span>
                  <span className="font-semibold text-emerald-400">
                    {tool.free_plan ? 'Có sẵn' : 'Không có (Dùng thử ngắn hạn)'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Đánh giá chung:</span>
                  <span className="font-bold text-amber-400">{tool.rating.toFixed(1)} / 5.0 ⭐</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Lượt quan tâm:</span>
                  <span className="font-bold text-slate-200">{(tool.clicks_count || 1000).toLocaleString()}+</span>
                </div>
              </div>

              <button
                onClick={() => onTryTool(tool)}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Nhận ưu đãi & Dùng thử</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* SIMILAR TOOLS (3 to 4 related tools) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white mb-4">
                Công cụ tương tự cùng danh mục
              </h3>

              <div className="space-y-3">
                {similarTools.map((sim) => (
                  <div
                    key={sim.id}
                    onClick={() => onViewDetail(sim.slug)}
                    className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 p-0.5 flex items-center justify-center shrink-0">
                        <img src={sim.logo_url} alt={sim.name} className="w-full h-full object-cover rounded" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate hover:text-indigo-300">
                          {sim.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 truncate block">{sim.starting_price}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 text-[11px] font-bold shrink-0">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{sim.rating.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
