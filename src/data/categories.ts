import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat_office',
    name: 'Văn phòng & Năng suất',
    slug: 'office',
    iconName: 'Briefcase',
    description: 'Viết email, soạn báo cáo, tóm tắt tài liệu, làm slide thuyết trình và tự động hóa tác vụ văn phòng.',
    colorGradient: 'from-blue-600 to-indigo-600',
    accentColor: 'blue',
    targetUserKey: 'office',
    popularTasks: ['Viết email', 'Tóm tắt tài liệu', 'Làm slide PowerPoint', 'Phân tích bảng biểu', 'Họp & Ghi chú']
  },
  {
    id: 'cat_designer',
    name: 'Designer & Hình ảnh',
    slug: 'designer',
    iconName: 'Palette',
    description: 'Tạo ảnh AI đỉnh cao, thiết kế banner, xóa phông, upscale chất lượng cao và tạo mockup thương hiệu.',
    colorGradient: 'from-purple-600 to-pink-600',
    accentColor: 'purple',
    targetUserKey: 'designer',
    popularTasks: ['Tạo ảnh Text-to-Image', 'Thiết kế banner', 'Xóa phông nền', 'Upscale 4K', 'Tạo Mockup']
  },
  {
    id: 'cat_creator',
    name: 'Creator & Video AI',
    slug: 'creator',
    iconName: 'Video',
    description: 'Biến văn bản thành video, avatar AI thuyết trình, tạo phụ đề tự động và biên tập video ngắn triệu view.',
    colorGradient: 'from-amber-500 to-rose-600',
    accentColor: 'amber',
    targetUserKey: 'creator',
    popularTasks: ['Text to Video', 'Avatar AI nói chuyện', 'Tự động tạo phụ đề', 'Cắt clip TikTok/Reels', 'Lip Sync']
  },
  {
    id: 'cat_voice',
    name: 'Voice AI & Giọng nói',
    slug: 'voice-ai',
    iconName: 'Mic',
    description: 'Chuyển văn bản thành giọng đọc truyền cảm, nhân bản giọng nói (Voice Cloning), lồng tiếng video đa ngôn ngữ.',
    colorGradient: 'from-emerald-500 to-teal-600',
    accentColor: 'emerald',
    targetUserKey: 'voice',
    popularTasks: ['Text to Speech (TTS)', 'Clone giọng nói', 'Lồng tiếng đa ngôn ngữ', 'Voice Agent tự động', 'API giọng nói']
  },
  {
    id: 'cat_developer',
    name: 'Developer & Lập trình',
    slug: 'developer',
    iconName: 'Code',
    description: 'Trợ lý lập trình AI thông minh, tự động sinh code, debug lỗi nhanh chóng, xây dựng app và deploy thần tốc.',
    colorGradient: 'from-cyan-500 to-blue-700',
    accentColor: 'cyan',
    targetUserKey: 'developer',
    popularTasks: ['AI Coding Assistant', 'Sinh code từ prompt', 'Debug & Refactor', 'Build Fullstack App', 'Code Review']
  }
];
