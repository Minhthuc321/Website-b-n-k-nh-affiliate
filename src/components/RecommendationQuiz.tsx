import React, { useState } from 'react';
import { TargetUser, Tool, RecommendationResult } from '../types';
import {
  Zap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Briefcase,
  Palette,
  Video,
  Mic,
  Code,
  Check,
  ExternalLink,
  Loader2,
  X
} from 'lucide-react';

interface RecommendationQuizProps {
  isOpen: boolean;
  onClose: () => void;
  allTools: Tool[];
  onViewDetail: (slug: string) => void;
  onTryTool: (tool: Tool) => void;
}

export const RecommendationQuiz: React.FC<RecommendationQuizProps> = ({
  isOpen,
  onClose,
  allTools,
  onViewDetail,
  onTryTool
}) => {
  const [step, setStep] = useState(1);
  const [profession, setProfession] = useState<TargetUser | null>(null);
  const [goal, setGoal] = useState<string>('');
  const [pricingPreference, setPricingPreference] = useState<'free' | 'freemium' | 'paid_ok'>('freemium');
  const [priority, setPriority] = useState<'easy' | 'features' | 'budget' | 'pro'>('easy');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<RecommendationResult[]>([]);
  const [aiSummary, setAiSummary] = useState<string>('');

  if (!isOpen) return null;

  const professionOptions = [
    {
      key: 'office' as TargetUser,
      title: 'Văn phòng & Năng suất',
      icon: Briefcase,
      desc: 'Hành chính, Marketing, Quản lý, Kế toán, HR'
    },
    {
      key: 'designer' as TargetUser,
      title: 'Designer & Hình ảnh',
      icon: Palette,
      desc: 'Thiết kế 2D/3D, UI/UX, Banner, Xóa phông'
    },
    {
      key: 'creator' as TargetUser,
      title: 'Creator & Video AI',
      icon: Video,
      desc: 'YouTuber, TikToker, Biên tập video, Avatar AI'
    },
    {
      key: 'voice' as TargetUser,
      title: 'Voice AI & Giọng nói',
      icon: Mic,
      desc: 'Lồng tiếng, Podcast, Sách nói, Nhân bản giọng'
    },
    {
      key: 'developer' as TargetUser,
      title: 'Developer & Lập trình',
      icon: Code,
      desc: 'Frontend, Backend, AI Agent, Xây dựng ứng dụng'
    }
  ];

  const getTaskGoalsForProfession = (prof: TargetUser | null) => {
    switch (prof) {
      case 'office':
        return [
          'Viết email, báo cáo và biên tập văn bản tự động',
          'Tạo slide thuyết trình PowerPoint trong 30 giây',
          'Tóm tắt tài liệu PDF dày và phân tích bảng biểu',
          'Quản lý dữ liệu CRM và nuôi dưỡng khách hàng'
        ];
      case 'designer':
        return [
          'Tạo hình ảnh nghệ thuật AI sắc nét từ mô tả chữ',
          'Thiết kế banner mạng xã hội và poster quảng cáo',
          'Xóa phông, chỉnh sửa và upscale ảnh lên 4K/8K',
          'Mở rộng khung hình và thay đổi chi tiết vật thể'
        ];
      case 'creator':
        return [
          'Tạo video ngắn TikTok/Shorts tự động từ câu lệnh',
          'Sử dụng Avatar AI thuyết trình và dịch video đa ngôn ngữ',
          'Biên tập video bằng văn bản và lọc âm Studio chuyên nghiệp',
          'Tạo video Text-to-Video chất lượng cao chuẩn điện ảnh'
        ];
      case 'voice':
        return [
          'Chuyển văn bản thành giọng đọc truyền cảm xúc tự nhiên',
          'Nhân bản giọng nói của chính tôi (Voice Cloning)',
          'Tự động lồng tiếng video đa ngôn ngữ khớp khẩu hình',
          'Tạo Voice Agent trò chuyện thời gian thực qua API'
        ];
      case 'developer':
        return [
          'Trợ lý hoàn thành code thông minh và sửa lỗi trong IDE',
          'Xây dựng toàn bộ ứng dụng Fullstack từ mô tả văn bản',
          'Sinh giao diện React & Tailwind chuẩn phong cách hiện đại',
          'Tự động review code, chạy test và quản lý Git commit'
        ];
      default:
        return [
          'Tự động hóa công việc hàng ngày',
          'Tạo nội dung và hình ảnh chất lượng cao',
          'Hỗ trợ học tập và nghiên cứu chuyên sâu'
        ];
    }
  };

  const handleCalculateRecommendations = async () => {
    setLoading(true);

    try {
      // Call backend AI Match endpoint
      const res = await fetch('/api/ai-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profession,
          goal,
          budget: pricingPreference,
          priority
        })
      });

      if (res.ok) {
        const data = await res.json();
        setAiSummary(data.summary);
        setResults(data.results);
        setStep(5);
        setLoading(false);
        return;
      }
    } catch (err) {
      console.error('Quiz recommendation error:', err);
    }

    // Fallback algorithmic scoring
    setTimeout(() => {
      const filtered = allTools
        .filter((t) => t.status === 'active')
        .map((t) => {
          let score = 75;
          const reasons: string[] = [];

          if (profession && t.target_users.includes(profession)) {
            score += 15;
            reasons.push(`Giải pháp hàng đầu chuyên biệt cho ${profession}`);
          }
          if (pricingPreference === 'free' && t.free_plan) {
            score += 10;
            reasons.push('Có gói Free trải nghiệm không tốn chi phí');
          }
          if (priority === 'easy' && t.rating >= 4.8) {
            score += 5;
            reasons.push('Giao diện trực quan, người mới bắt đầu dùng được ngay');
          }
          if (priority === 'pro' && t.featured) {
            score += 5;
            reasons.push('Chuẩn doanh nghiệp với các tính năng nâng cao nhất');
          }

          return {
            tool: t,
            matchScore: Math.min(score, 99),
            reasons
          };
        })
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 3);

      setAiSummary('Dựa trên câu trả lời của bạn, đây là 3 công cụ AI được đánh giá phù hợp nhất để đạt hiệu suất cao nhất:');
      setResults(filtered);
      setStep(5);
      setLoading(false);
    }, 900);
  };

  const handleReset = () => {
    setStep(1);
    setProfession(null);
    setGoal('');
    setPricingPreference('freemium');
    setPriority('easy');
    setResults([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar (Steps 1 to 4) */}
        {step < 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span className="flex items-center gap-1 text-amber-400">
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                Tìm AI phù hợp với bạn
              </span>
              <span>Bước {step} / 4</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Profession */}
        {step === 1 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              1. Bạn làm công việc gì?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Chọn nhóm chuyên môn của bạn để hệ thống định vị nhóm công cụ AI chuyên dụng
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {professionOptions.map((item) => {
                const IconComponent = item.icon;
                const isSelected = profession === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setProfession(item.key);
                      setGoal(getTaskGoalsForProfession(item.key)[0]);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 ring-2 ring-indigo-500/30 text-white'
                        : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-snug">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button
                disabled={!profession}
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Tiếp tục</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Goal / Task */}
        {step === 2 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              2. Bạn muốn AI hỗ trợ việc gì nhất?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Chọn mục tiêu ưu tiên chính của bạn trong dự án hiện tại
            </p>

            <div className="space-y-3 mb-8">
              {getTaskGoalsForProfession(profession).map((task) => {
                const isSelected = goal === task;
                return (
                  <button
                    key={task}
                    onClick={() => setGoal(task)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="text-sm font-medium">{task}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-slate-600'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </button>
              <button
                disabled={!goal}
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Tiếp tục</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Pricing preference */}
        {step === 3 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              3. Ngân sách mong muốn của bạn?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Chúng tôi sẽ ưu tiên các giải pháp phù hợp với túi tiền của bạn
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  val: 'free' as const,
                  title: 'Miễn phí hoàn toàn (100% Free)',
                  desc: 'Chỉ gợi ý các công cụ có phiên bản miễn phí vĩnh viễn hoặc credit dồi dào'
                },
                {
                  val: 'freemium' as const,
                  title: 'Freemium (Có bản Free, có gói Pro nâng cấp)',
                  desc: 'Phổ biến nhất: Dùng thử miễn phí, khi nào cần mới nâng cấp'
                },
                {
                  val: 'paid_ok' as const,
                  title: 'Có thể trả phí (Ưu tiên chất lượng cao nhất)',
                  desc: 'Sẵn sàng đầu tư từ $10 - $50/tháng để có công cụ xịn nhất'
                }
              ].map((opt) => {
                const isSelected = pricingPreference === opt.val;
                return (
                  <button
                    key={opt.val}
                    onClick={() => setPricingPreference(opt.val)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">{opt.title}</h4>
                      <p className="text-xs text-slate-400">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                        isSelected ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-slate-600'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Tiếp tục</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Priority */}
        {step === 4 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              4. Ưu tiên hàng đầu của bạn là gì?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Tiêu chí quan trọng nhất để bạn quyết định gắn bó với một công cụ
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  val: 'easy' as const,
                  title: 'Dễ sử dụng',
                  desc: 'Giao diện trực quan, không cần học phức tạp'
                },
                {
                  val: 'features' as const,
                  title: 'Nhiều tính năng mạnh mẽ',
                  desc: 'Đa nhiệm, tích hợp sâu, tùy biến cao'
                },
                {
                  val: 'budget' as const,
                  title: 'Tiết kiệm chi phí',
                  desc: 'Tối ưu ngân sách, miễn phí hoặc giá rẻ'
                },
                {
                  val: 'pro' as const,
                  title: 'Chuyên nghiệp & Chuẩn đầu ra',
                  desc: 'Chất lượng cao cấp chuẩn studio / doanh nghiệp'
                }
              ].map((item) => {
                const isSelected = priority === item.val;
                return (
                  <button
                    key={item.val}
                    onClick={() => setPriority(item.val)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </button>
              <button
                onClick={handleCalculateRecommendations}
                disabled={loading}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>AI đang phân tích...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Xem 3 công cụ phù hợp nhất</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: RESULTS DISPLAY */}
        {step === 5 && (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Đã phân tích xong hồ sơ của bạn
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Top 3 công cụ AI phù hợp nhất
              </h2>
              {aiSummary && (
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                  {aiSummary}
                </p>
              )}
            </div>

            {/* 3 Result Cards */}
            <div className="space-y-4 mb-8">
              {results.map((res, index) => {
                const tool = res.tool;
                return (
                  <div
                    key={tool.id}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="relative shrink-0">
                        <div className="w-13 h-13 rounded-xl bg-slate-900 border border-slate-700 overflow-hidden p-1 flex items-center justify-center">
                          <img
                            src={tool.logo_url}
                            alt={tool.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                          #{index + 1}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-white text-base hover:text-indigo-300 cursor-pointer" onClick={() => { onClose(); onViewDetail(tool.slug); }}>
                            {tool.name}
                          </h3>
                          <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-md">
                            {res.matchScore}% Phù hợp
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 line-clamp-1">{tool.short_description}</p>
                        {res.reasons && res.reasons.length > 0 && (
                          <p className="text-[11px] text-amber-300/90 mt-1 flex items-center gap-1 font-medium">
                            <Sparkles className="w-3 h-3 shrink-0" />
                            <span>{res.reasons[0]}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-700/60">
                      <button
                        onClick={() => {
                          onClose();
                          onViewDetail(tool.slug);
                        }}
                        className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                      >
                        Chi tiết
                      </button>
                      <button
                        onClick={() => {
                          onTryTool(tool);
                        }}
                        className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Dùng thử</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm lại bài Quiz</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Đóng & Xem tất cả công cụ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
