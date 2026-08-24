import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Mail, ArrowRight, CheckCircle2, Heart } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenAdmin }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/60">
        <div className="bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900 border border-indigo-500/20 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Bản tin AI Weekly</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Nhận danh sách công cụ AI mới & Deals giảm giá hàng tuần
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Cập nhật sớm nhất các công cụ AI đột phá, mã giảm giá độc quyền và hướng dẫn ứng dụng thực tế.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-300 font-semibold text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cảm ơn bạn! Đã đăng ký nhận bản tin thành công.</span>
              </div>
            ) : (
              <div className="flex items-center bg-slate-900 border border-slate-700 rounded-2xl p-1.5 focus-within:border-indigo-500 transition-all">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="w-full bg-transparent text-white px-3 py-2 text-xs sm:text-sm placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1"
                >
                  <span>Đăng ký</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
            <p className="text-[11px] text-slate-500 mt-2 text-center md:text-left">
              🔒 Không spam. Hủy đăng ký bất cứ lúc nào với 1 cú nhấp chuột.
            </p>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-white">AI Tools Hub</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nền tảng tìm kiếm, đánh giá và so sánh các giải pháp Trí Tuệ Nhân Tạo hàng đầu dành cho thị trường Việt Nam & Quốc tế.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenAdmin}
              className="text-[11px] text-slate-400 hover:text-indigo-400 transition-colors underline"
            >
              Trang Quản trị (Admin Panel)
            </button>
          </div>
        </div>

        {/* Col 2: Categories */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3">Danh mục nghề nghiệp</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onSelectCategory('office')} className="hover:text-indigo-400 transition-colors">
                AI Văn phòng & Báo cáo
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('designer')} className="hover:text-indigo-400 transition-colors">
                AI Designer & Tạo ảnh
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('creator')} className="hover:text-indigo-400 transition-colors">
                AI Creator & Làm Video
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('voice-ai')} className="hover:text-indigo-400 transition-colors">
                Voice AI & Lồng tiếng
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('developer')} className="hover:text-indigo-400 transition-colors">
                AI Developer & Coding
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Popular Tools */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3">Công cụ nổi bật</h4>
          <ul className="space-y-2">
            <li><span className="text-slate-300">ElevenLabs</span> - Giọng nói AI chân thực</li>
            <li><span className="text-slate-300">Cursor</span> - Trình biên mã AI thông minh</li>
            <li><span className="text-slate-300">Midjourney</span> - Tạo ảnh nghệ thuật đỉnh cao</li>
            <li><span className="text-slate-300">Gamma App</span> - Tạo slide thuyết trình AI</li>
            <li><span className="text-slate-300">HeyGen</span> - Avatar AI phát biểu video</li>
          </ul>
        </div>

        {/* Col 4: Transparency & Disclaimer */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Affiliate Disclosure</span>
          </h4>
          <p className="text-[11px] leading-relaxed text-slate-400">
            Trang web chứa các liên kết affiliate. Chúng tôi có thể nhận hoa hồng giới thiệu khi bạn đăng ký sử dụng dịch vụ thông qua liên kết này mà không phát sinh thêm chi phí cho bạn.
          </p>
          <p className="text-[11px] text-slate-500">
            Tất cả đánh giá và xếp hạng được tổng hợp khách quan nhằm hỗ trợ cộng đồng tìm kiếm giải pháp AI phù hợp nhất.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/80 py-6 text-center text-[11px] text-slate-400">
        <p>© 2026 AI Tools Hub. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};
