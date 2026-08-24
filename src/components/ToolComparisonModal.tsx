import React from 'react';
import { Tool } from '../types';
import {
  X,
  Scale,
  Star,
  Check,
  ExternalLink,
  Plus,
  ShieldCheck,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface ToolComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedTools: Tool[];
  onRemoveTool: (id: string) => void;
  onClearAll: () => void;
  onViewDetail: (slug: string) => void;
  onTryTool: (tool: Tool) => void;
}

export const ToolComparisonModal: React.FC<ToolComparisonModalProps> = ({
  isOpen,
  onClose,
  comparedTools,
  onRemoveTool,
  onClearAll,
  onViewDetail,
  onTryTool
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6 my-6 text-slate-200 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Bảng so sánh công cụ AI ({comparedTools.length}/4)
              </h2>
              <p className="text-xs text-slate-400">
                So sánh tính năng, bảng giá, ưu nhược điểm để đưa ra lựa chọn đầu tư tối ưu
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {comparedTools.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-rose-400 px-3 py-1.5 rounded-lg hover:bg-rose-500/10 transition-colors"
              >
                Xóa tất cả
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {comparedTools.length === 0 ? (
          <div className="py-16 text-center text-slate-400">
            <Scale className="w-12 h-12 mx-auto text-slate-600 mb-3" />
            <h3 className="text-base font-semibold text-white mb-1">Chưa có công cụ nào được chọn</h3>
            <p className="text-xs max-w-sm mx-auto mb-5">
              Hãy nhấp vào biểu tượng cán cân (So sánh) ở góc mỗi card công cụ để thêm vào bảng so sánh này.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
            >
              Khám phá danh sách công cụ
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto overflow-y-auto py-4 flex-1">
            <table className="w-full border-collapse text-left text-xs min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="p-3 w-40 text-slate-400 font-semibold align-top bg-slate-900/90 sticky left-0 z-10">
                    Thuộc tính
                  </th>
                  {comparedTools.map((t) => (
                    <th key={t.id} className="p-3 w-64 align-top">
                      <div className="relative bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                        <button
                          onClick={() => onRemoveTool(t.id)}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-700 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center shadow-md transition-colors"
                          title="Bỏ công cụ này"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 p-1 flex items-center justify-center mb-3">
                          <img src={t.logo_url} alt={t.name} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <h4 className="font-bold text-white text-sm hover:text-indigo-300 cursor-pointer" onClick={() => { onClose(); onViewDetail(t.slug); }}>
                          {t.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{t.tagline}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {/* Rating */}
                <tr>
                  <td className="p-3 font-semibold text-slate-300 bg-slate-900/90 sticky left-0 z-10">Đánh giá</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span>{t.rating.toFixed(1)} / 5.0</span>
                        <span className="text-slate-500 text-[11px] font-normal">({t.review_count} reviews)</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Pricing Type */}
                <tr>
                  <td className="p-3 font-semibold text-slate-300 bg-slate-900/90 sticky left-0 z-10">Mô hình giá</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                        {t.pricing_type}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Starting Price */}
                <tr>
                  <td className="p-3 font-semibold text-slate-300 bg-slate-900/90 sticky left-0 z-10">Giá khởi điểm</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3 font-bold text-white">
                      {t.starting_price}
                    </td>
                  ))}
                </tr>

                {/* Free Plan */}
                <tr>
                  <td className="p-3 font-semibold text-slate-300 bg-slate-900/90 sticky left-0 z-10">Bản Free</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3">
                      {t.free_plan ? (
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Có sẵn
                        </span>
                      ) : (
                        <span className="text-slate-500 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Trả phí / Trial
                        </span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Target Audience */}
                <tr>
                  <td className="p-3 font-semibold text-slate-300 bg-slate-900/90 sticky left-0 z-10">Phù hợp với</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {t.target_users.map((u) => (
                          <span key={u} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">
                            {u}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Key Features */}
                <tr>
                  <td className="p-3 font-semibold text-slate-300 bg-slate-900/90 sticky left-0 z-10">Tính năng chính</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3 align-top">
                      <ul className="space-y-1.5">
                        {t.features.slice(0, 4).map((f, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-1.5 text-[11px]">
                            <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Pros */}
                <tr>
                  <td className="p-3 font-semibold text-emerald-400 bg-slate-900/90 sticky left-0 z-10">Ưu điểm</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3 align-top bg-emerald-950/10">
                      <ul className="space-y-1">
                        {t.pros.slice(0, 3).map((p, i) => (
                          <li key={i} className="text-emerald-300/90 flex items-start gap-1.5 text-[11px]">
                            <span className="text-emerald-400 font-bold">+</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Cons */}
                <tr>
                  <td className="p-3 font-semibold text-rose-400 bg-slate-900/90 sticky left-0 z-10">Nhược điểm</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3 align-top bg-rose-950/10">
                      <ul className="space-y-1">
                        {t.cons.slice(0, 2).map((c, i) => (
                          <li key={i} className="text-rose-300/90 flex items-start gap-1.5 text-[11px]">
                            <span className="text-rose-400 font-bold">-</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Action CTAs */}
                <tr>
                  <td className="p-3 font-semibold text-slate-300 bg-slate-900/90 sticky left-0 z-10">Hành động</td>
                  {comparedTools.map((t) => (
                    <td key={t.id} className="p-3">
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            onClose();
                            onTryTool(t);
                          }}
                          className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                        >
                          <span>Dùng thử</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onViewDetail(t.slug);
                          }}
                          className="w-full py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
                        >
                          Chi tiết
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
