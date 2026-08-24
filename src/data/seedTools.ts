import { Tool } from '../types';

export const SEED_TOOLS: Tool[] = [
  // ==================== VĂN PHÒNG & NĂNG SUẤT ====================
  {
    id: 'tool_chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    tagline: 'Mô hình AI đa năng hàng đầu thế giới từ OpenAI',
    short_description: 'Trợ lý AI toàn diện hỗ trợ soạn thảo văn bản, tóm tắt tài liệu, phân tích dữ liệu chuyên sâu và tạo ý tưởng tức thì.',
    full_description: 'ChatGPT của OpenAI là tiêu chuẩn vàng trong các mô hình ngôn ngữ lớn (LLM). Với khả năng xử lý ngữ cảnh sâu, suy luận logic vượt trội qua mô hình GPT-4o và OpenAI o1, ChatGPT giúp tối ưu hóa 80% công việc bàn giấy, từ soạn email chuyên nghiệp, dịch thuật chuẩn xác, phân tích file Excel/PDF đến lập kế hoạch chiến lược.',
    logo_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office'],
    target_users: ['office', 'creator', 'developer'],
    features: [
      'Xử lý và phân tích tài liệu văn phòng (PDF, Word, Excel, CSV)',
      'Truy cập web thời gian thực và tìm kiếm thông tin cập nhật',
      'Tạo hình ảnh tích hợp qua DALL·E 3',
      'Phân tích dữ liệu nâng cao (Advanced Data Analysis)',
      'Hỗ trợ chế độ Voice tương tác giọng nói trực tiếp',
      'Tạo Custom GPTs chuyên biệt theo nhu cầu doanh nghiệp'
    ],
    official_url: 'https://chatgpt.com',
    affiliate_url: 'https://chatgpt.com/?ref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '15% cho gói Team/Enterprise',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://openai.com/enterprise',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Plus $20/tháng)',
    free_plan: true,
    rating: 4.9,
    review_count: 12450,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Giao diện trực quan, cực kỳ dễ sử dụng',
      'Hỗ trợ tiếng Việt rất mượt mà và tự nhiên',
      'Khả năng đọc và phân tích file dữ liệu mạnh mẽ',
      'Hệ sinh thái Custom GPTs phong phú'
    ],
    cons: [
      'Gói Plus có giới hạn lượt hỏi mỗi 3 tiếng đối với model cao cấp',
      'Cần kiểm chứng lại thông tin mang tính chuyên môn sâu'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'vĩnh viễn',
        description: 'Truy cập mô hình GPT-4o mini không giới hạn và GPT-4o giới hạn.',
        features: ['Truy cập GPT-4o mini', 'Tải tài liệu cơ bản', 'Truy cập web tìm kiếm']
      },
      {
        name: 'Plus',
        price: '$20',
        period: 'mỗi tháng',
        isPopular: true,
        description: 'Dành cho cá nhân muốn nâng cao tối đa hiệu suất làm việc.',
        features: ['Truy cập ưu tiên GPT-4o & OpenAI o1', 'Tạo ảnh DALL·E 3', 'Phân tích dữ liệu nâng cao', 'Voice Mode thời gian thực', 'Tạo Custom GPTs']
      },
      {
        name: 'Team',
        price: '$25',
        period: 'mỗi user / tháng',
        description: 'Dành cho đội nhóm và doanh nghiệp vừa và nhỏ.',
        features: ['Không dùng dữ liệu huấn luyện AI', 'Không gian làm việc chung', 'Quản trị viên & phân quyền', 'Hạn mức sử dụng cao hơn']
      }
    ],
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3420
  },
  {
    id: 'tool_claude',
    name: 'Claude',
    slug: 'claude',
    tagline: 'Mô hình AI viết văn phong mượt mà và phân tích logic từ Anthropic',
    short_description: 'Nổi bật với văn phong tự nhiên, tóm tắt tài liệu siêu dài tới 200K tokens và hỗ trợ tạo Artifacts tương tác.',
    full_description: 'Claude của Anthropic (với dòng mô hình Claude 3.5 Sonnet và Claude 3.7) được đánh giá cao nhất về độ tinh tế trong văn phong viết lách, khả năng tóm tắt tài liệu khổng lồ (sách, hợp đồng pháp lý, tài liệu nghiên cứu) và tính năng Claude Artifacts giúp chạy code, vẽ biểu đồ trực tiếp trên màn hình.',
    logo_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office', 'developer'],
    target_users: ['office', 'developer', 'creator'],
    features: [
      'Cửa sổ ngữ cảnh 200,000 tokens (đọc tài liệu hàng trăm trang)',
      'Claude Artifacts hiển thị code, HTML, biểu đồ SVG tương tác ngay lập tức',
      'Văn phong tiếng Việt và tiếng Anh tự nhiên, mượt mà như chuyên gia',
      'Phân tích tài liệu PDF phức tạp với biểu đồ và bảng biểu'
    ],
    official_url: 'https://claude.ai',
    affiliate_url: 'https://claude.ai/?via=aitoolshub',
    affiliate_enabled: false,
    affiliate_commission: 'N/A (Chưa mở affiliate công khai)',
    affiliate_cookie_days: 0,
    affiliate_program_url: 'https://anthropic.com',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Pro $20/tháng)',
    free_plan: true,
    rating: 4.9,
    review_count: 8900,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Văn phong viết báo cáo và email mềm mại, không có cảm giác AI thô cứng',
      'Claude Artifacts giúp xem trước web, game nhỏ hoặc sơ đồ tức thì',
      'Đọc và phân tích file PDF nhiều trang cực kỳ chuẩn xác'
    ],
    cons: [
      'Bản miễn phí giới hạn tin nhắn khá nhanh vào giờ cao điểm',
      'Chưa có tính năng tạo ảnh trực tiếp như DALL·E'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['Truy cập Claude 3.5 Sonnet cơ bản', 'Tải file văn bản & PDF', 'Tạo Artifacts']
      },
      {
        name: 'Pro',
        price: '$20',
        period: 'mỗi tháng',
        isPopular: true,
        features: ['Gấp 5 lần dung lượng sử dụng so với Free', 'Truy cập sớm các model mới nhất', 'Ưu tiên kết nối khi server bận']
      },
      {
        name: 'Team',
        price: '$25',
        period: 'mỗi user / tháng',
        features: ['Quản trị thành viên', 'Chia sẻ Project nội bộ', 'Hạn mức sử dụng lớn hơn']
      }
    ],
    created_at: '2026-01-12T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 2890
  },
  {
    id: 'tool_notebooklm',
    name: 'NotebookLM',
    slug: 'notebooklm',
    tagline: 'Sổ tay nghiên cứu AI cá nhân hóa và tạo Podcast giọng nói của Google',
    short_description: 'Tải tài liệu, slide, link YouTube lên và NotebookLM sẽ tóm tắt, trả lời trích dẫn nguồn và biến thành buổi thảo luận Podcast sinh động.',
    full_description: 'NotebookLM là công cụ nghiên cứu mang tính cách mạng của Google. Không giống các chatbot thông thường dễ bị ảo giác, NotebookLM chỉ trả lời dựa trên chính xác tài liệu bạn cung cấp và đính kèm số trích dẫn nguồn rõ ràng. Tính năng "Audio Overview" cho phép biến hàng chục trang tài liệu thành một cuộc đối thoại podcast 2 người dẫn cực kỳ lôi cuốn.',
    logo_url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office', 'voice-ai'],
    target_users: ['office', 'creator', 'voice'],
    features: [
      'Nghiên cứu có nguồn dẫn chứng (Grounded Source Citations)',
      'Audio Overview: Tạo Podcast thảo luận 2 người dẫn tự động từ tài liệu',
      'Hỗ trợ Google Docs, Slides, file PDF, văn bản và URL YouTube',
      'Bảo mật dữ liệu cá nhân cao cấp từ Google'
    ],
    official_url: 'https://notebooklm.google.com',
    affiliate_url: 'https://notebooklm.google.com',
    affiliate_enabled: false,
    affiliate_commission: 'Miễn phí hoàn toàn',
    affiliate_cookie_days: 0,
    affiliate_program_url: 'https://google.com',
    pricing_type: 'Free',
    starting_price: 'Miễn phí 100%',
    free_plan: true,
    rating: 4.8,
    review_count: 4200,
    featured: false,
    recommended: true,
    status: 'active',
    pros: [
      'Hoàn toàn miễn phí, tài trợ bởi Google',
      'Tuyệt đối không bị ảo giác nhờ cơ chế Source Grounding',
      'Tính năng tóm tắt Audio Podcast nghe cực kỳ tự nhiên và hữu ích'
    ],
    cons: [
      'Chỉ trả lời trong phạm vi tài liệu bạn đã nạp vào',
      'Chưa hỗ trợ chỉnh sửa kịch bản Podcast chi tiết'
    ],
    pricing_plans: [
      {
        name: 'Free for Everyone',
        price: '$0',
        period: 'vĩnh viễn',
        isPopular: true,
        features: ['50 nguồn tài liệu mỗi Notebook', 'Mỗi nguồn tối đa 500,000 từ', 'Tạo Audio Overview Podcast không giới hạn', 'Tích hợp Google Drive']
      }
    ],
    created_at: '2026-02-01T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 1980
  },
  {
    id: 'tool_notion',
    name: 'Notion AI',
    slug: 'notion',
    tagline: 'Không gian làm việc tất cả trong một kết hợp trí tuệ nhân tạo',
    short_description: 'Tích hợp AI ngay trong sổ ghi chép, quản lý dự án, bảng Kanban và kho tài liệu nội bộ công ty.',
    full_description: 'Notion AI biến không gian ghi chú và tài liệu của bạn thành một bộ não thứ hai. Notion AI có thể tự động viết lại báo cáo, điền tự động dữ liệu vào bảng cơ sở dữ liệu (Notion DB Autofill), trả lời câu hỏi dựa trên toàn bộ wiki của công ty (Q&A Workspace) và lập kế hoạch công việc nhanh chóng.',
    logo_url: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office'],
    target_users: ['office', 'designer', 'developer'],
    features: [
      'Hỏi đáp AI trên toàn bộ cơ sở dữ liệu công ty (Workspace Q&A)',
      'Tự động điền thuộc tính bảng (AI Autofill Columns)',
      'Soạn thảo, dịch thuật và sửa lỗi ngữ pháp tức thì',
      'Tạo tóm tắt cuộc họp và hành động tiếp theo (Action Items)'
    ],
    official_url: 'https://notion.so',
    affiliate_url: 'https://notion.so/?aff=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% doanh thu năm đầu tiên',
    affiliate_cookie_days: 90,
    affiliate_program_url: 'https://notion.so/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$8/tháng + $8-10 cho gói Notion AI',
    free_plan: true,
    rating: 4.8,
    review_count: 15300,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Giao diện cực đẹp, trực quan, quản lý thông tin xuất sắc',
      'Tính năng Q&A trên toàn bộ workspace giúp tìm tài liệu trong 2 giây',
      'Hệ sinh thái template khổng lồ cho mọi phòng ban'
    ],
    cons: [
      'Gói Notion AI là add-on phải trả thêm tiền trên mỗi user',
      'Cần chút thời gian ban đầu để xây dựng cấu trúc workspace chuẩn'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['Không gian làm việc cá nhân', 'Đồng bộ thiết bị', 'Dùng thử Notion AI giới hạn']
      },
      {
        name: 'Plus',
        price: '$10',
        period: 'mỗi user / tháng',
        isPopular: true,
        features: ['Không giới hạn block ghi chú', 'Tải file không giới hạn', 'Lịch sử trang 30 ngày', 'Mời tối đa 100 khách']
      },
      {
        name: 'Notion AI Add-on',
        price: '+$8-10',
        period: 'mỗi user / tháng',
        features: ['Notion Q&A không giới hạn', 'AI Autofill tự động cập nhật bảng', 'Soạn thảo và tóm tắt không giới hạn']
      }
    ],
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 2450
  },
  {
    id: 'tool_gamma',
    name: 'Gamma App',
    slug: 'gamma',
    tagline: 'Tạo slide thuyết trình, tài liệu và website đẹp mắt bằng AI trong 30 giây',
    short_description: 'Chỉ cần nhập ý tưởng hoặc paste dàn ý, Gamma sẽ tự động thiết kế slide chuẩn thuyết trình với bố cục và hình ảnh chuyên nghiệp.',
    full_description: 'Gamma là công cụ hàng đầu thay thế cách làm slide truyền thống như PowerPoint hay Keynote. Nhờ ứng dụng AI thông minh, Gamma tự động phân chia thẻ nội dung, chọn màu sắc hài hòa, tìm ảnh minh họa phù hợp và hỗ trợ xuất file PowerPoint / PDF hoặc trình chiếu trực tuyến với hiệu ứng mượt mà.',
    logo_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office', 'designer'],
    target_users: ['office', 'designer', 'creator'],
    features: [
      'Tạo Slide thuyết trình từ prompt hoặc tài liệu có sẵn trong 30 giây',
      'Tạo Webpage và Document tương tác không cần viết code',
      'Định dạng linh hoạt, bố cục tự căn chỉnh thông minh',
      'Xuất file PDF, PowerPoint (PPTX) và chia sẻ link trực tiếp',
      'Tích hợp AI tạo ảnh và chọn icon theo ngữ cảnh'
    ],
    official_url: 'https://gamma.app',
    affiliate_url: 'https://gamma.app/signup?partner=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '30% recurring trọn đời',
    affiliate_cookie_days: 60,
    affiliate_program_url: 'https://gamma.app/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Plus $8/tháng)',
    free_plan: true,
    rating: 4.85,
    review_count: 6700,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Tiết kiệm từ 2-4 tiếng làm slide cho mỗi bài thuyết trình',
      'Thiết kế hiện đại, tinh tế, chuẩn phong cách SaaS quốc tế',
      'Cho phép chỉnh sửa chi tiết từng khối card nội dung'
    ],
    cons: [
      'Bản free giới hạn số credit ban đầu',
      'Xuất sang file PPTX đôi khi cần căn chỉnh lại font chữ'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['400 AI credits ban đầu khi đăng ký', 'Tạo bài thuyết trình và doc cơ bản', 'Có gắn watermark Gamma nhỏ']
      },
      {
        name: 'Plus',
        price: '$8',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['Credits AI không giới hạn', 'Xóa watermark Gamma', 'Xuất file PDF & PPTX không giới hạn', 'Lịch sử thay đổi 30 ngày']
      },
      {
        name: 'Pro',
        price: '$15',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['Sử dụng mô hình AI cao cấp nhất', 'Tùy chỉnh font chữ & bảng màu thương hiệu', 'Thống kê người xem chi tiết (Analytics)']
      }
    ],
    created_at: '2026-02-05T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3100
  },
  {
    id: 'tool_writesonic',
    name: 'Writesonic',
    slug: 'writesonic',
    tagline: 'Nền tảng viết content chuẩn SEO và tối ưu hóa bài viết blog bằng AI',
    short_description: 'Tạo bài viết chuẩn SEO 2000+ từ, viết bài quảng cáo Facebook/Google Ads, bài PR và xây dựng chatbot chăm sóc khách hàng.',
    full_description: 'Writesonic kết hợp công nghệ AI với phân tích dữ liệu SEO thời gian thực. Công cụ này giúp các marketer và nhân viên văn phòng sản xuất hàng loạt nội dung chất lượng cao, bài viết blog lên top Google, email marketing tăng tỷ lệ chuyển đổi và quản lý chatbot Chatsonic thông minh.',
    logo_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office', 'creator'],
    target_users: ['office', 'creator'],
    features: [
      'AI Article Writer 6.0 viết bài blog chuẩn SEO có nghiên cứu từ khóa',
      'Chatsonic: Chatbot hỗ trợ tra cứu Google Search thời gian thực',
      'Hơn 80+ mẫu template viết quảng cáo, email, tiêu đề',
      'Tích hợp kết nối WordPress và Shopify tự động xuất bản'
    ],
    official_url: 'https://writesonic.com',
    affiliate_url: 'https://writesonic.com/?via=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '30% recurring trọn đời',
    affiliate_cookie_days: 60,
    affiliate_program_url: 'https://writesonic.com/affiliate-program',
    pricing_type: 'Freemium',
    starting_price: '$16/tháng',
    free_plan: true,
    rating: 4.7,
    review_count: 5100,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Chuyên sâu cho SEO và Digital Marketing',
      'Tích hợp dữ liệu tìm kiếm Google trực tiếp',
      'Chương trình affiliate trả hoa hồng trọn đời rất tốt'
    ],
    cons: [
      'Bài viết dài vẫn cần biên tập lại để có dấu ấn cá nhân',
      'Hạn mức từ phụ thuộc vào gói cước'
    ],
    pricing_plans: [
      {
        name: 'Free Trial',
        price: '$0',
        period: '1 lần',
        features: ['10,000 từ miễn phí', 'Truy cập 50+ templates', 'Tạo bài viết SEO ngắn']
      },
      {
        name: 'Individual',
        price: '$16',
        period: 'mỗi tháng',
        isPopular: true,
        features: ['Không giới hạn từ thế hệ AI chuẩn', 'AI Article Writer 6.0', 'Tích hợp SEO Surfer', 'Chatsonic Pro']
      },
      {
        name: 'Teams',
        price: '$25',
        period: 'mỗi user / tháng',
        features: ['Tùy chỉnh Brand Voice riêng', 'Cộng tác nhóm nhiều thành viên', 'API Access', 'Hỗ trợ ưu tiên']
      }
    ],
    created_at: '2026-02-10T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 1540
  },
  {
    id: 'tool_jasper',
    name: 'Jasper AI',
    slug: 'jasper',
    tagline: 'Giải pháp AI Marketing toàn diện cho doanh nghiệp và đội ngũ nội dung',
    short_description: 'Định hình giọng điệu thương hiệu (Brand Voice), tạo chiến dịch marketing đa kênh và quản lý kho nội dung doanh nghiệp.',
    full_description: 'Jasper AI được định vị là nền tảng AI doanh nghiệp cao cấp nhất cho phòng tiếp thị. Khác với các công cụ tạo nội dung thông thường, Jasper học toàn bộ hướng dẫn phong cách, sản phẩm và văn hóa của công ty bạn để tạo ra nội dung đồng nhất trên mọi kênh xã hội, blog và chiến dịch quảng cáo.',
    logo_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office', 'creator'],
    target_users: ['office', 'creator'],
    features: [
      'Học và tuân thủ giọng điệu thương hiệu (Company Brand Voice)',
      'Tạo chiến dịch đa kênh đồng loạt (Campaigns Workflow)',
      'Bảo mật dữ liệu cấp độ doanh nghiệp (SOC2 Type II)',
      'Hơn 50+ framework tiếp thị đỉnh cao (AIDA, PAS, BAB)'
    ],
    official_url: 'https://jasper.ai',
    affiliate_url: 'https://jasper.ai/?utm_source=partner&utm_campaign=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '25% recurring trong 12 tháng',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://jasper.ai/partners',
    pricing_type: 'Free Trial',
    starting_price: '$39/tháng (Có 7 ngày dùng thử)',
    free_plan: false,
    rating: 4.65,
    review_count: 7300,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Chuyên môn hóa cực cao cho tiếp thị và thương hiệu',
      'Tính năng Brand Voice giúp nội dung không bị rập khuôn',
      'Hỗ trợ tạo cả chiến dịch marketing chỉ từ 1 bản tóm tắt (Brief)'
    ],
    cons: [
      'Giá thành tương đối cao so với cá nhân',
      'Không có gói Free vĩnh viễn'
    ],
    pricing_plans: [
      {
        name: 'Creator',
        price: '$39',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['1 User', '1 Brand Voice', '50+ templates marketing', 'Tiện ích mở rộng trên trình duyệt']
      },
      {
        name: 'Pro',
        price: '$59',
        period: 'mỗi user / tháng',
        isPopular: true,
        features: ['Tối đa 5 thành viên', '3 Brand Voices', 'Tạo hình ảnh AI', 'Tạo chiến dịch Campaign Workflow']
      },
      {
        name: 'Business',
        price: 'Tùy chỉnh',
        period: 'hàng năm',
        features: ['Brand Voices không giới hạn', 'Quản lý phân quyền & SSO', 'Bảo mật doanh nghiệp', 'Account Manager riêng']
      }
    ],
    created_at: '2026-02-12T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 1120
  },
  {
    id: 'tool_hubspot',
    name: 'HubSpot AI (Breeze)',
    slug: 'hubspot',
    tagline: 'Bộ công cụ AI CRM và tự động hóa bán hàng, marketing số 1',
    short_description: 'Tự động gửi email nuôi dưỡng khách hàng, tóm tắt nhật ký cuộc gọi CRM, phân tích hành vi mua và dự báo doanh số.',
    full_description: 'HubSpot Breeze AI tích hợp sâu vào nền tảng CRM để biến các tác vụ bán hàng phức tạp thành chuỗi tự động hóa mượt mà. Đội ngũ kinh doanh và CSKH có thể tóm tắt lịch sử giao dịch với khách hàng, tạo email cá nhân hóa theo từng lead và tối ưu hóa phễu bán hàng.',
    logo_url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office'],
    target_users: ['office'],
    features: [
      'Breeze Copilot trợ lý AI trên toàn bộ hệ thống CRM',
      'Breeze Agents tự động tương tác khách hàng và nghiên cứu mạng xã hội',
      'Tự động soạn thảo email bán hàng cá nhân hóa theo từng khách hàng',
      'Dự báo doanh số và phân tích xu hướng thị trường'
    ],
    official_url: 'https://hubspot.com',
    affiliate_url: 'https://hubspot.sjv.io/aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '30% recurring hoặc $250-$1000/bán hàng thành công',
    affiliate_cookie_days: 90,
    affiliate_program_url: 'https://hubspot.com/partners/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0 (CRM miễn phí) / Gói Starter $15/tháng',
    free_plan: true,
    rating: 4.75,
    review_count: 11000,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Hệ thống CRM toàn diện nhất thế giới',
      'Bản CRM miễn phí có rất nhiều tính năng mạnh mẽ',
      'Chương trình Affiliate hoa hồng cực kỳ cao và uy tín'
    ],
    cons: [
      'Gói nâng cao cho doanh nghiệp lớn (Professional/Enterprise) giá đắt',
      'Cần thời gian đào tạo nhân sự sử dụng'
    ],
    pricing_plans: [
      {
        name: 'Free CRM',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['Quản lý liên hệ không giới hạn', 'Tích hợp Breeze AI cơ bản', 'Biểu mẫu thu thập lead', 'Gửi email marketing giới hạn']
      },
      {
        name: 'Starter Customer Platform',
        price: '$15',
        period: 'mỗi user / tháng',
        isPopular: true,
        features: ['Loại bỏ thương hiệu HubSpot', 'Tự động hóa tiếp thị đơn giản', 'Báo cáo hiệu suất nâng cao', 'Hỗ trợ 24/7']
      }
    ],
    created_at: '2026-02-15T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 1430
  },

  // ==================== DESIGNER & HÌNH ẢNH ====================
  {
    id: 'tool_canva',
    name: 'Canva Magic Studio',
    slug: 'canva',
    tagline: 'Bộ công cụ thiết kế đồ họa trực quan tích hợp siêu AI Magic Studio',
    short_description: 'Tạo poster, banner quảng cáo, bài đăng mạng xã hội, xóa nền chỉ với 1 cú nhấp và đổi kích thước thiết kế đa nền tảng.',
    full_description: 'Canva là nền tảng thiết kế đồ họa phổ biến nhất hành tinh. Với Magic Studio, Canva đưa sức mạnh AI đến với mọi người: Magic Design tạo template từ ảnh phác thảo, Magic Eraser xóa vật thể không mong muốn, Magic Switch chuyển đổi bài thuyết trình thành tài liệu blog và Magic Media tạo ảnh/video AI từ mô tả văn bản.',
    logo_url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['designer', 'office'],
    target_users: ['designer', 'office', 'creator'],
    features: [
      'Magic Design: Tự động lên ý tưởng và bố cục thiết kế từ mô tả',
      'Magic Eraser & Magic Edit: Xóa vật thể và thay thế chi tiết trên ảnh',
      'Magic Switch: Đổi kích thước và chuyển đổi ngôn ngữ trong 1 giây',
      'Kho tài nguyên hơn 100+ triệu hình ảnh, video, vector bản quyền'
    ],
    official_url: 'https://canva.com',
    affiliate_url: 'https://canva.com/join/aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: 'Lên tới $36 cho mỗi lượt đăng ký Pro mới',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://canva.com/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Pro $12.99/tháng hoặc 1.490.000đ/năm)',
    free_plan: true,
    rating: 4.9,
    review_count: 28000,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Giao diện cực kỳ thân thiện với người không chuyên lẫn designer',
      'Thư viện mẫu đồ họa khổng lồ phù hợp với mọi ngành nghề',
      'Tính năng AI Magic Studio mượt mà, hỗ trợ tiếng Việt rất tốt'
    ],
    cons: [
      'Các tài nguyên ảnh và font chữ đẹp nhất đều nằm ở gói Pro',
      'Không hỗ trợ xuất file vector EPS/AI chuyên sâu như Adobe'
    ],
    pricing_plans: [
      {
        name: 'Canva Free',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['Hơn 1 triệu mẫu template miễn phí', 'Tải ảnh cơ bản', '5GB lưu trữ đám mây', 'Các tính năng AI giới hạn']
      },
      {
        name: 'Canva Pro',
        price: '$12.99',
        period: 'mỗi tháng (hoặc $119/năm)',
        isPopular: true,
        features: ['Mở khóa 100+ triệu ảnh & video Premium', 'Magic Studio AI không giới hạn', 'Xóa phông nền 1-click', 'Bộ nhận diện thương hiệu Brand Kit', '1TB lưu trữ']
      },
      {
        name: 'Canva for Teams',
        price: '$14.99',
        period: 'mỗi tháng (cho 3 thành viên)',
        features: ['Quy trình duyệt thiết kế', 'Quản lý tài sản thương hiệu tập trung', 'Kiểm soát phân quyền', 'Báo cáo hoạt động nhóm']
      }
    ],
    created_at: '2026-01-08T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 4890
  },
  {
    id: 'tool_freepik',
    name: 'Freepik AI Suite',
    slug: 'freepik',
    tagline: 'Kho đồ họa số 1 thế giới tích hợp AI Designer và Mystic Generator',
    short_description: 'Tạo hình ảnh chân thực siêu sắc nét với Mystic AI, thiết kế banner tự động, mockup sản phẩm 3D và hàng triệu vector bản quyền.',
    full_description: 'Freepik đã nâng tầm từ một kho tài nguyên vector thành một đế chế sáng tạo AI. Với công cụ Mystic AI (được ví như Midjourney trong trình duyệt), Freepik AI Upscaler nâng độ phân giải lên 8K mà không vỡ hạt, và AI Image Generator tạo ra hình ảnh chất lượng thương mại không bản quyền phục vụ quảng cáo.',
    logo_url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['designer'],
    target_users: ['designer', 'creator'],
    features: [
      'Mystic AI Image Generator: Chất lượng chân thực ngang tầm Midjourney v6',
      'AI Upscaler: Nâng độ phân giải lên 4K - 8K giữ trọn chi tiết',
      'Reimagine AI: Tạo ra các biến thể vô tận từ một bức ảnh gốc',
      'Tải hàng triệu file PSD, Vector, Mockup thương mại có bản quyền'
    ],
    official_url: 'https://freepik.com',
    affiliate_url: 'https://freepik.com/pricing?ref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% hoa hồng trên mỗi đơn hàng',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://freepik.com/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$9/tháng (Gói Premium)',
    free_plan: true,
    rating: 4.8,
    review_count: 9400,
    featured: false,
    recommended: true,
    status: 'active',
    pros: [
      'Kho tài nguyên thiết kế lớn nhất hiện nay cho dân Designer',
      'Mystic AI cho chất lượng da người và ánh sáng cực kỳ chân thực',
      'Chi phí gói Premium rẻ hơn nhiều so với mua lẻ từng công cụ'
    ],
    cons: [
      'Gói Free giới hạn lượt tải mỗi ngày',
      'Chưa hỗ trợ prompt tiếng Việt tối ưu bằng tiếng Anh'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['Tải tối đa 10 tài nguyên/ngày (yêu cầu ghi nguồn)', 'Trải nghiệm AI cơ bản có watermark']
      },
      {
        name: 'Premium',
        price: '$9',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['Tải không giới hạn tài nguyên Premium', 'Không cần ghi nguồn tác giả', 'Sử dụng Mystic AI Generator', 'AI Upscaler 4K/8K không giới hạn']
      }
    ],
    created_at: '2026-01-20T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 2670
  },
  {
    id: 'tool_leonardo',
    name: 'Leonardo AI',
    slug: 'leonardo-ai',
    tagline: 'Nền tảng tạo hình ảnh và tài sản đồ họa AI chuyên nghiệp cho Game & Art',
    short_description: 'Tạo hình ảnh chi tiết kinh ngạc với Canvas Editor, kiểm soát phong cách nhất quán (Style Consistency) và Realtime Gen.',
    full_description: 'Leonardo AI là công cụ tạo ảnh AI được giới nghệ sĩ số và game designer yêu thích nhất. Với các mô hình chuyên biệt như Phoenix, Leonardo Diffusion XL, tính năng Realtime Canvas cho phép vẽ phác thảo đến đâu AI render thời gian thực đến đó, cùng khả năng train model riêng theo phong cách thương hiệu.',
    logo_url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['designer', 'creator'],
    target_users: ['designer', 'creator'],
    features: [
      'Realtime Generation & Realtime Canvas vẽ tương tác tức thì',
      'Kiểm soát tư thế nhân vật, góc máy và bảng màu (ControlNet)',
      'Training Custom Model theo phong cách thương hiệu cá nhân',
      'Tạo Motion Video ngắn từ ảnh tĩnh tích hợp sẵn'
    ],
    official_url: 'https://leonardo.ai',
    affiliate_url: 'https://leonardo.ai/?via=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '25% recurring trọn đời',
    affiliate_cookie_days: 60,
    affiliate_program_url: 'https://leonardo.ai/affiliate',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (150 token reset hàng ngày) / Gói Apprentice $10/tháng',
    free_plan: true,
    rating: 4.85,
    review_count: 8700,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Cung cấp 150 token miễn phí làm mới mỗi ngày (rất hào phóng)',
      'Chất lượng ảnh game, 3D, concept art vượt trội',
      'Giao diện trực quan hơn hẳn Discord của Midjourney'
    ],
    cons: [
      'Tạo ảnh phong cách đời thực đôi khi cần tinh chỉnh prompt chi tiết',
      'Thời gian render vào giờ cao điểm có thể chậm hơn một chút'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'hàng ngày',
        features: ['150 token làm mới mỗi ngày', 'Tối đa 150 ảnh chất lượng chuẩn/ngày', 'Sử dụng AI Canvas', 'Quyền sở hữu thương mại cơ bản']
      },
      {
        name: 'Apprentice',
        price: '$10',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['8,500 token nhanh mỗi tháng', 'Không chờ đợi hàng đợi', 'Tạo tối đa 5 model riêng', 'Tạo ảnh riêng tư (Private generation)']
      },
      {
        name: 'Artisan',
        price: '$24',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['25,000 token nhanh mỗi tháng', 'Tạo tối đa 20 model riêng', 'Mở khóa tất cả tính năng cao cấp']
      }
    ],
    created_at: '2026-01-25T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3120
  },
  {
    id: 'tool_adobe_firefly',
    name: 'Adobe Firefly',
    slug: 'adobe-firefly',
    tagline: 'Bộ công cụ sáng tạo AI an toàn thương mại tích hợp sâu trong Photoshop',
    short_description: 'Generative Fill mở rộng khung hình, thêm xóa vật thể tự nhiên, tạo hiệu ứng chữ nghệ thuật và an toàn bản quyền thương mại 100%.',
    full_description: 'Adobe Firefly được huấn luyện độc quyền trên kho ảnh bản quyền Adobe Stock và các tác phẩm công cộng, giúp các nhà thiết kế và doanh nghiệp hoàn toàn yên tâm về vấn đề pháp lý khi xuất bản ấn phẩm quảng cáo. Tính năng Generative Fill và Generative Expand trong Photoshop và Illustrator đã trở thành công cụ không thể thiếu của designer chuyên nghiệp.',
    logo_url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['designer'],
    target_users: ['designer'],
    features: [
      'Generative Fill & Expand trong Photoshop thay đổi bối cảnh siêu thực',
      'Text to Vector Graphic tạo file vector SVG trong Illustrator',
      'Được bồi thường bản quyền thương mại từ Adobe (Commercial Safety)',
      'Generative Recolor đổi bảng màu vector theo tâm trạng'
    ],
    official_url: 'https://firefly.adobe.com',
    affiliate_url: 'https://adobe.prf.hn/click/camref:aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '85% cho tháng đầu tiên của gói Adobe Creative Cloud',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://adobe.com/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (25 generative credits) / Gói Premium $4.99/tháng',
    free_plan: true,
    rating: 4.8,
    review_count: 14200,
    featured: false,
    recommended: true,
    status: 'active',
    pros: [
      'An toàn bản quyền thương mại 100% cho các dự án thương hiệu lớn',
      'Tích hợp liền mạch trong Photoshop, Illustrator, Premiere Pro',
      'Khả năng mở rộng viền ảnh (Expand) khớp ánh sáng hoàn hảo'
    ],
    cons: [
      'Gói Creative Cloud đầy đủ giá khá cao',
      'Chất lượng ảnh nghệ thuật đôi khi kiểm duyệt hơi nghiêm ngặt'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'mỗi tháng',
        features: ['25 Generative Credits/tháng', 'Có gắn watermark thông tin nội dung']
      },
      {
        name: 'Firefly Premium',
        price: '$4.99',
        period: 'mỗi tháng',
        isPopular: true,
        features: ['100 Generative Credits/tháng', 'Không có watermark', 'Quyền sử dụng thương mại đầy đủ', 'Tải ảnh độ phân giải cao']
      }
    ],
    created_at: '2026-02-01T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 2190
  },
  {
    id: 'tool_midjourney',
    name: 'Midjourney',
    slug: 'midjourney',
    tagline: 'Vua tạo hình ảnh nghệ thuật và thị giác với độ thẩm mỹ đỉnh cao',
    short_description: 'Khả năng kết xuất hình ảnh nghệ thuật, ánh sáng điện ảnh (Cinematic Lighting) và tính thẩm mỹ số 1 thị trường hiện nay.',
    full_description: 'Midjourney luôn giữ vị trí độc tôn về tính thẩm mỹ và độ nghệ thuật của hình ảnh AI. Phiên bản Midjourney v6.1 mang lại làn da chân thực tới từng lỗ chân lông, ánh sáng điện ảnh, khả năng render chữ cái chính xác và kiểm soát phong cách nhân vật qua các tham số --cref và --sref đỉnh cao.',
    logo_url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['designer', 'creator'],
    target_users: ['designer', 'creator'],
    features: [
      'Độ thẩm mỹ hình ảnh và góc máy điện ảnh vượt trội',
      'Tham số --cref duy trì nhất quán khuôn mặt nhân vật qua nhiều bối cảnh',
      'Tham số --sref sao chép phong cách nghệ thuật từ ảnh mẫu',
      'Web Editor trực quan hỗ trợ Inpainting và Outpainting'
    ],
    official_url: 'https://midjourney.com',
    affiliate_url: 'https://midjourney.com',
    affiliate_enabled: false,
    affiliate_commission: 'Chưa có chương trình affiliate',
    affiliate_cookie_days: 0,
    affiliate_program_url: 'https://midjourney.com',
    pricing_type: 'Paid',
    starting_price: '$10/tháng (Gói Basic)',
    free_plan: false,
    rating: 4.95,
    review_count: 32000,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Chất lượng ảnh đẹp nhất trong tất cả các mô hình AI hiện nay',
      'Tạo concept nghệ thuật, thời trang và kiến trúc tuyệt mỹ',
      'Cộng đồng sáng tạo lớn và kho prompt tham khảo vô tận'
    ],
    cons: [
      'Không có bản miễn phí',
      'Chủ yếu hoạt động qua Discord (dù đã có trang web riêng cho tài khoản trả phí)'
    ],
    pricing_plans: [
      {
        name: 'Basic Plan',
        price: '$10',
        period: 'mỗi tháng (hoặc $8/tháng theo năm)',
        features: ['3.3 giờ GPU nhanh / tháng (~200 ảnh)', 'Sử dụng web editor', 'Quyền sử dụng thương mại']
      },
      {
        name: 'Standard Plan',
        price: '$30',
        period: 'mỗi tháng (hoặc $24/tháng theo năm)',
        isPopular: true,
        features: ['15 giờ GPU nhanh / tháng', 'Tạo ảnh chế độ Relax không giới hạn số lượng', 'Quyền thương mại']
      },
      {
        name: 'Pro Plan',
        price: '$60',
        period: 'mỗi tháng',
        features: ['30 giờ GPU nhanh', 'Chế độ Stealth Mode ẩn ảnh riêng tư', 'Chạy tối đa 12 tác vụ đồng thời']
      }
    ],
    created_at: '2026-01-05T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 5120
  },
  {
    id: 'tool_krea',
    name: 'Krea AI',
    slug: 'krea-ai',
    tagline: 'Bộ công cụ sáng tạo Realtime AI, Upscale 16K và Video Animation',
    short_description: 'Trải nghiệm tạo ảnh theo thời gian thực không độ trễ, nâng cấp ảnh lên 16K siêu nét và tạo video chuyển động biến ảo.',
    full_description: 'Krea AI là hiện tượng công nghệ trong giới thiết kế nhờ tốc độ phản hồi tính bằng mili-giây. Bạn chỉ cần di chuyển hình khối hình học hoặc gõ prompt, màn hình bên cạnh sẽ tự động render ảnh hoàn chỉnh ngay lập tức. Krea cũng sở hữu công cụ AI Enhancer & Upscaler được đánh giá là chi tiết nhất thế giới hiện nay.',
    logo_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['designer', 'creator'],
    target_users: ['designer', 'creator'],
    features: [
      'Realtime Generation không độ trễ khi vẽ phác thảo',
      'AI Enhancer & Upscaler phục hồi chi tiết ảnh lên đến 16K',
      'Tạo Video AI chuyển cảnh Morphing mượt mà',
      'Tạo ảo ảnh thị giác (Optical Illusions) từ logo và hoa văn'
    ],
    official_url: 'https://krea.ai',
    affiliate_url: 'https://krea.ai/?ref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% recurring cho mọi gói đăng ký',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://krea.ai',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Basic $24/tháng)',
    free_plan: true,
    rating: 4.8,
    review_count: 4900,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Công nghệ Real-time cực kỳ ấn tượng, tạo cảm hứng sáng tạo tức thì',
      'Bộ nâng cấp ảnh (Upscaler) chi tiết vượt trội so với các đối thủ',
      'Thường xuyên cập nhật các công cụ AI thử nghiệm mới nhất'
    ],
    cons: [
      'Bản miễn phí có giới hạn số lượt upscale hàng ngày',
      'Cần cấu hình máy tính hoặc đường truyền internet ổn định'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'hàng ngày',
        features: ['Trải nghiệm Realtime giới hạn', 'Tải ảnh chất lượng tiêu chuẩn', 'Upscale tối đa 3 ảnh/ngày']
      },
      {
        name: 'Basic',
        price: '$24',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['Realtime không giới hạn thời gian', 'Upscale nâng cao không giới hạn', 'Chạy nhanh không hàng đợi', 'Tạo video AI']
      }
    ],
    created_at: '2026-02-08T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 1870
  },

  // ==================== CREATOR & VIDEO AI ====================
  {
    id: 'tool_runway',
    name: 'Runway Gen-3 Alpha',
    slug: 'runway',
    tagline: 'Đỉnh cao công nghệ tạo video AI chuẩn điện ảnh Hollywood',
    short_description: 'Biến văn bản thành video (Text-to-Video), biến ảnh tĩnh thành video mượt mà (Image-to-Video) và điều khiển chuyển động camera chuyên nghiệp.',
    full_description: 'Runway là cái tên tiên phong mở ra kỷ nguyên video AI. Với mô hình Gen-3 Alpha, Runway mang lại chất lượng hình ảnh chuyển động chân thực, khả năng mô phỏng vật lý phức tạp, biểu cảm gương mặt người sống động và các công cụ điều khiển đạo diễn như Motion Brush, Camera Control xoay 360 độ chuẩn xác.',
    logo_url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['creator'],
    target_users: ['creator', 'designer'],
    features: [
      'Gen-3 Alpha: Chất lượng video chân thực chuẩn điện ảnh 4K',
      'Image to Video: Thổi hồn chuyển động sống động vào mọi bức ảnh',
      'Motion Brush: Chỉ định chính xác khu vực nào trên ảnh sẽ chuyển động',
      'Advanced Camera Controls: Điều khiển góc máy Pan, Zoom, Orbit theo ý muốn',
      'Lip Sync: Khớp khẩu hình miệng nhân vật với giọng nói tự động'
    ],
    official_url: 'https://runwayml.com',
    affiliate_url: 'https://runwayml.com/?partner=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '25% trên tổng hóa đơn gói hàng năm',
    affiliate_cookie_days: 45,
    affiliate_program_url: 'https://runwayml.com/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0 (125 credits một lần) / Gói Standard $12/tháng',
    free_plan: true,
    rating: 4.9,
    review_count: 16500,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Chất lượng chuyển động vật lý và con người tốt nhất thị trường',
      'Bộ công cụ hậu kỳ video AI toàn diện nhất (xóa phông xanh, inpainting)',
      'Được nhiều đạo diễn và hãng phim Hollywood tin dùng'
    ],
    cons: [
      'Tiêu tốn credit khá nhanh khi render video độ dài lớn',
      'Credit bản Free không tự động reset hàng tháng'
    ],
    pricing_plans: [
      {
        name: 'Basic Free',
        price: '$0',
        period: '1 lần duy nhất',
        features: ['125 credits ban đầu', 'Xuất video 720p', 'Tối đa 3 project video']
      },
      {
        name: 'Standard',
        price: '$12',
        period: 'mỗi user / tháng (thanh toán năm)',
        isPopular: true,
        features: ['625 credits mỗi tháng', 'Xuất video 4K & xóa watermark', 'Không giới hạn project', 'Mở khóa Gen-3 Alpha']
      },
      {
        name: 'Pro',
        price: '$28',
        period: 'mỗi user / tháng (thanh toán năm)',
        features: ['2250 credits mỗi tháng', 'Hàng đợi ưu tiên thế hệ', 'Train custom model theo nhân vật riêng']
      }
    ],
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 4210
  },
  {
    id: 'tool_invideo',
    name: 'InVideo AI',
    slug: 'invideo',
    tagline: 'Tự động tạo video TikTok, YouTube Shorts hoàn chỉnh chỉ từ 1 câu lệnh',
    short_description: 'Nhập chủ đề bất kỳ, InVideo AI sẽ tự động viết kịch bản, ghép cảnh quay stock bản quyền, lồng tiếng AI truyền cảm và thêm phụ đề tự động.',
    full_description: 'InVideo AI là cỗ máy sản xuất nội dung video tự động hàng đầu cho các nhà sáng tạo nội dung YouTube Shorts, TikTok và Reels. Bạn chỉ cần nhập một câu lệnh đơn giản như "Tạo video 60 giây giải thích về lỗ đen vũ trụ", InVideo AI sẽ lo toàn bộ từ A đến Z: lên kịch bản, tìm video phù hợp, đọc lồng tiếng và căn chỉnh âm nhạc.',
    logo_url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['creator'],
    target_users: ['creator', 'office'],
    features: [
      'Tạo video hoàn chỉnh có lồng tiếng và phụ đề chỉ từ 1 dòng prompt',
      'Kho hơn 16+ triệu video và ảnh bản quyền từ Storyblocks & iStock',
      'Giọng đọc AI Voice chân thực tự nhiên với đa dạng cảm xúc',
      'Chỉnh sửa kịch bản và thay thế cảnh quay bằng câu lệnh trò chuyện (Chat to Edit)'
    ],
    official_url: 'https://invideo.io',
    affiliate_url: 'https://invideo.sjv.io/aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '25% - 50% hoa hồng trên gói trả phí',
    affiliate_cookie_days: 90,
    affiliate_program_url: 'https://invideo.io/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Plus $20/tháng)',
    free_plan: true,
    rating: 4.8,
    review_count: 11400,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Tiết kiệm 95% thời gian sản xuất video ngắn TikTok/Shorts',
      'Kho stock footage iStock cao cấp tích hợp sẵn không lo bản quyền',
      'Khả năng chỉnh sửa video bằng prompt cực kỳ tiện lợi'
    ],
    cons: [
      'Bản free có gắn watermark InVideo',
      'Giọng đọc tiếng Việt cần chỉnh ngữ điệu thêm cho mượt'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['10 phút tạo video AI/tuần', 'Kho stock cơ bản', 'Có gắn watermark InVideo']
      },
      {
        name: 'Plus',
        price: '$20',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['50 phút tạo video AI/tháng', 'Xóa hoàn toàn watermark', 'Sử dụng kho iStock bản quyền', 'Lồng tiếng giọng AI Clone riêng']
      },
      {
        name: 'Max',
        price: '$48',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['200 phút tạo video AI/tháng', 'Hạn mức lưu trữ đám mây 400GB', 'Hỗ trợ ưu tiên 24/7']
      }
    ],
    created_at: '2026-01-18T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3680
  },
  {
    id: 'tool_descript',
    name: 'Descript',
    slug: 'descript',
    tagline: 'Phần mềm biên tập video và podcast bằng cách chỉnh sửa văn bản như Word',
    short_description: 'Xóa từ đệm "ờ, à" chỉ với 1 click, chỉnh sửa video bằng cách sửa file transcript chữ, tự động nhìn vào camera và lọc tạp âm phòng thu.',
    full_description: 'Descript biến đổi hoàn toàn cách biên tập video truyền thống. Thay vì cắt ghép timeline phức tạp, Descript tự động chuyển video thành văn bản, bạn chỉ cần xóa một câu trong văn bản là đoạn video tương ứng sẽ tự động được cắt bỏ. Tính năng Studio Sound biến âm thanh micro điện thoại thành chất lượng phòng thu chuyên nghiệp.',
    logo_url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['creator', 'voice-ai'],
    target_users: ['creator', 'office', 'voice'],
    features: [
      'Biên tập video bằng cách sửa văn bản Text Transcript',
      'Studio Sound: Khử ồn và tái tạo giọng nói như phòng thu $10,000',
      'Remove Filler Words: Xóa tất cả các tiếng "ừ, ờ, à" trong 1 click',
      'Eye Contact AI: Tự động điều chỉnh hướng mắt luôn nhìn thẳng camera',
      'Overdub: Sửa lỗi phát âm sai bằng giọng AI nhân bản của chính bạn'
    ],
    official_url: 'https://descript.com',
    affiliate_url: 'https://descript.com/?lmref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '15% recurring trọn đời cho mỗi khách hàng',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://descript.com/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Hobbyist $12/tháng)',
    free_plan: true,
    rating: 4.85,
    review_count: 8200,
    featured: false,
    recommended: true,
    status: 'active',
    pros: [
      'Công cụ lọc âm Studio Sound xuất sắc nhất hiện nay',
      'Cắt video nhanh gấp 5 lần so với Premiere Pro đối với video nói chuyện',
      'Tạo phụ đề động phong cách Alex Hormozi cực kỳ bắt mắt'
    ],
    cons: [
      'Cần tải app cài đặt trên máy tính (macOS / Windows)',
      'Nhận diện tiếng Việt đôi khi sai dấu nếu người nói phát âm không rõ'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'mỗi tháng',
        features: ['1 giờ transcribe/tháng', 'Xuất video 720p có watermark', 'Studio Sound cơ bản']
      },
      {
        name: 'Hobbyist',
        price: '$12',
        period: 'mỗi user / tháng (thanh toán năm)',
        isPopular: true,
        features: ['10 giờ transcribe/tháng', 'Xuất video 4K không watermark', 'Studio Sound không giới hạn', 'Xóa từ đệm cơ bản']
      },
      {
        name: 'Creator',
        price: '$24',
        period: 'mỗi user / tháng (thanh toán năm)',
        features: ['30 giờ transcribe/tháng', 'Xóa tất cả các loại từ đệm nâng cao', 'Tính năng Eye Contact AI', 'Tạo giọng Overdub riêng']
      }
    ],
    created_at: '2026-01-22T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 2240
  },
  {
    id: 'tool_heygen',
    name: 'HeyGen',
    slug: 'heygen',
    tagline: 'Nền tảng tạo Video Avatar AI nói chuyện và dịch video đa ngôn ngữ số 1',
    short_description: 'Tạo video thuyết trình với người ảo AI y hệt người thật, dịch video sang 40+ ngôn ngữ khớp khẩu hình miệng (Lip-sync Video Translation).',
    full_description: 'HeyGen là công nghệ Avatar AI tiên tiến nhất hiện nay, được sử dụng rộng rãi bởi các công ty đa quốc gia để đào tạo nhân viên, làm video bán hàng và marketing. Tính năng Video Translate của HeyGen có thể biến một video tiếng Việt thành tiếng Anh, Nhật, Pháp với chính giọng nói gốc của bạn và khẩu hình miệng trùng khớp đến khó tin.',
    logo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['creator', 'voice-ai', 'office'],
    target_users: ['creator', 'office', 'voice'],
    features: [
      'Avatar AI sống động với hơn 100+ nhân vật từ mọi sắc tộc',
      'Video Translate: Dịch video giữ nguyên giọng thật và khớp môi hoàn hảo',
      'Instant Avatar: Tạo bản sao kỹ thuật số của chính bạn chỉ với 2 phút video quay bằng điện thoại',
      'Tích hợp kịch bản AI ChatGPT tự động tạo bài nói thuyết trình'
    ],
    official_url: 'https://heygen.com',
    affiliate_url: 'https://heygen.com/?sid=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% recurring trọn đời',
    affiliate_cookie_days: 60,
    affiliate_program_url: 'https://heygen.com/affiliate-program',
    pricing_type: 'Freemium',
    starting_price: '$0 (1 credit dùng thử) / Gói Creator $24/tháng',
    free_plan: true,
    rating: 4.9,
    review_count: 9800,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Công nghệ khớp khẩu hình và dịch video chân thực nhất thế giới',
      'Tạo video đào tạo chuyên nghiệp không cần thuê diễn viên, trường quay',
      'Bản sao Instant Avatar quay bằng điện thoại trông y như người thật'
    ],
    cons: [
      'Gói cơ bản có số credit video hàng tháng ở mức vừa phải',
      'Yêu cầu xác minh danh tính khi clone avatar cá nhân để tránh giả mạo'
    ],
    pricing_plans: [
      {
        name: 'Free Trial',
        price: '$0',
        period: '1 credit',
        features: ['1 credit video miễn phí', 'Truy cập thư viện avatar', 'Dịch video thử nghiệm']
      },
      {
        name: 'Creator',
        price: '$24',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['15 credits video mỗi tháng', 'Thời lượng video tối đa 5 phút/lần', 'Tạo tối đa 3 Instant Avatar riêng', 'Xóa watermark']
      },
      {
        name: 'Team',
        price: '$60',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['30 credits video mỗi tháng', 'Video dài tối đa 20 phút', 'Xuất video độ phân giải 4K', 'Quản lý thành viên nhóm']
      }
    ],
    created_at: '2026-01-28T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3890
  },
  {
    id: 'tool_kling',
    name: 'Kling AI',
    slug: 'kling-ai',
    tagline: 'Mô hình sinh video AI độ phân giải cao tới 1080p và thời lượng dài từ Kuaishou',
    short_description: 'Tạo video Text-to-Video lên tới 10 giây với chuyển động cực kỳ tự nhiên, mô phỏng vật lý chân thực và chất lượng sắc nét.',
    full_description: 'Kling AI gây sốt toàn cầu nhờ khả năng tạo video thời lượng dài (tối đa 10 giây mỗi clip và có thể nối dài) với độ phân giải Full HD 1080p. Công nghệ 3D Spatio-Temporal Attention của Kling giúp các cử động ăn uống, chạy nhảy, tương tác với đồ vật trông cực kỳ mượt mà và thuyết phục.',
    logo_url: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['creator'],
    target_users: ['creator'],
    features: [
      'Text-to-Video & Image-to-Video chất lượng Full HD 1080p',
      'Thời lượng tạo video 5 giây hoặc 10 giây trong 1 lần sinh',
      'Mô phỏng vật lý chính xác (nước chảy, khói lửa, cử động tay)',
      'Camera Controls đa hướng và tính năng nối dài video liên tục'
    ],
    official_url: 'https://klingai.com',
    affiliate_url: 'https://klingai.com/?invite=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% hoa hồng trên các gói nạp',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://klingai.com',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (66 credit miễn phí mỗi ngày) / Gói Standard $10/tháng',
    free_plan: true,
    rating: 4.8,
    review_count: 6100,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Tặng credit miễn phí làm mới hàng ngày cho người dùng',
      'Thời lượng video 10 giây dài hơn đa số các đối thủ khác',
      'Cử động người và tương tác đồ vật rất ít khi bị lỗi biến dạng'
    ],
    cons: [
      'Thời gian render ở chế độ Free có thể phải chờ xếp hàng',
      'Bản Free có watermark Kling ở góc video'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'hàng ngày',
        features: ['66 credits miễn phí hàng ngày', 'Tạo video chế độ tiêu chuẩn', 'Có watermark']
      },
      {
        name: 'Standard',
        price: '$10',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['660 credits mỗi tháng', 'Chế độ High Quality Professional', 'Thời lượng video lên tới 10s', 'Xóa watermark']
      },
      {
        name: 'Pro',
        price: '$37',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['3000 credits mỗi tháng', 'Hàng đợi ưu tiên thế hệ siêu tốc', 'Mở khóa toàn bộ tính năng camera chuyên sâu']
      }
    ],
    created_at: '2026-02-14T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 2410
  },

  // ==================== VOICE AI & GIỌNG NÓI ====================
  {
    id: 'tool_elevenlabs',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    tagline: 'Nền tảng lồng tiếng AI và nhân bản giọng nói cảm xúc số 1 thế giới',
    short_description: 'Chuyển văn bản thành giọng đọc truyền cảm xúc tự nhiên, Voice Cloning chỉ từ 1 phút ghi âm, lồng tiếng video tự động và Voice Agent.',
    full_description: 'ElevenLabs là tiêu chuẩn vàng tuyệt đối trong ngành công nghệ giọng nói nhân tạo (Voice AI). Với khả năng tái tạo hơi thở, tiếng cười, ngữ điệu cảm xúc trầm bổng và độ trễ siêu thấp (<200ms), ElevenLabs phục vụ từ các nhà sáng tạo audiobook, video game, video YouTube đến các hệ thống tổng đài AI đàm thoại thời gian thực.',
    logo_url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['voice-ai', 'creator'],
    target_users: ['voice', 'creator', 'developer'],
    features: [
      'Text to Speech với hơn 1000+ giọng đọc cảm xúc ở 32+ ngôn ngữ (có tiếng Việt)',
      'Instant & Professional Voice Cloning nhân bản giọng nói độ tương đồng 99%',
      'AI Dubbing: Tự động lồng tiếng video sang ngôn ngữ khác giữ trọn cảm xúc',
      'Conversational AI: Xây dựng Voice Agent nghe nói tương tác thời gian thực',
      'API giọng nói siêu tốc độ trễ cực thấp cho các lập trình viên'
    ],
    official_url: 'https://elevenlabs.io',
    affiliate_url: 'https://elevenlabs.io/?from=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '22% recurring trọn đời cho toàn bộ giao dịch',
    affiliate_cookie_days: 60,
    affiliate_program_url: 'https://elevenlabs.io/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (10,000 ký tự) / Gói Starter $5/tháng (giảm còn $1 tháng đầu)',
    free_plan: true,
    rating: 4.95,
    review_count: 18900,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Giọng đọc tự nhiên nhất hành tinh, không hề có cảm giác robot',
      'Nhân bản giọng nói cực kỳ chuẩn xác ngay cả với mẫu ghi âm ngắn',
      'Hỗ trợ tiếng Việt với ngữ điệu và phát âm vô cùng tự nhiên',
      'Chương trình Affiliate chuyển đổi cực cao và hoa hồng trọn đời'
    ],
    cons: [
      'Nếu làm sách nói dài hàng trăm nghìn ký tự cần cân nhắc gói Pro',
      'Tính năng clone giọng nâng cao (PVC) yêu cầu mẫu âm thanh sạch'
    ],
    pricing_plans: [
      {
        name: 'Free Plan',
        price: '$0',
        period: 'mỗi tháng',
        features: ['10,000 ký tự mỗi tháng (~10 phút audio)', 'Truy cập giọng nói chuẩn ở 32 ngôn ngữ', 'Tạo tối đa 3 giọng tùy chỉnh', 'Ghi nguồn ElevenLabs']
      },
      {
        name: 'Starter',
        price: '$5',
        period: 'mỗi tháng ($1 tháng đầu tiên)',
        isPopular: true,
        features: ['30,000 ký tự mỗi tháng', 'Instant Voice Cloning tạo giọng riêng', 'Quyền sử dụng thương mại đầy đủ', 'Dubbing lồng tiếng cơ bản']
      },
      {
        name: 'Creator',
        price: '$22',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['100,000 ký tự mỗi tháng (~100 phút audio)', 'Professional Voice Cloning chất lượng cao nhất', 'Chất lượng âm thanh 192kbps', 'API truy cập ưu tiên']
      },
      {
        name: 'Pro',
        price: '$99',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['500,000 ký tự mỗi tháng', 'Chất lượng âm thanh phòng thu 44.1kHz PCM', 'Analytics chi tiết', 'Hỗ trợ kỹ thuật 1-1']
      }
    ],
    created_at: '2026-01-05T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 6540
  },
  {
    id: 'tool_murf',
    name: 'Murf AI',
    slug: 'murf-ai',
    tagline: 'Studio lồng tiếng AI đa năng cho video đào tạo, quảng cáo và e-learning',
    short_description: 'Hơn 120+ giọng đọc chất lượng studio, tích hợp sẵn trình chỉnh sửa video, âm nhạc nền và tùy chỉnh tốc độ, cao độ từng từ.',
    full_description: 'Murf AI là công cụ lồng tiếng chuyên dụng cho các chuyên gia đào tạo doanh nghiệp (L&D), nhà làm phim quảng cáo và phát triển khóa học trực tuyến. Giao diện dạng timeline cho phép bạn khớp chính xác từng câu nói với khung hình video, tinh chỉnh trọng âm của từ và thêm nhạc nền bản quyền một cách dễ dàng.',
    logo_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['voice-ai', 'creator', 'office'],
    target_users: ['voice', 'office', 'creator'],
    features: [
      'Bộ sưu tập 120+ giọng đọc AI đa ngôn ngữ chất lượng cao',
      'Trình chỉnh sửa Murf Studio tích hợp video, slide và nhạc nền',
      'Tùy chỉnh linh hoạt: Speed, Pitch, Emphasis (nhấn âm) và Pauses (khoảng dừng)',
      'Chuyển đổi bản ghi âm giọng nói nghiệp dư thành giọng đọc AI chuyên nghiệp (Voice Changer)'
    ],
    official_url: 'https://murf.ai',
    affiliate_url: 'https://murf.ai/?lmref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% recurring cho mỗi gói đăng ký trả phí',
    affiliate_cookie_days: 90,
    affiliate_program_url: 'https://murf.ai/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0 (10 phút tạo audio) / Gói Creator $23/tháng',
    free_plan: true,
    rating: 4.75,
    review_count: 5300,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Giao diện Studio ghép video và âm thanh cực kỳ trực quan',
      'Khả năng chỉnh nhấn trọng âm của từng từ rất chi tiết',
      'Kho nhạc nền phong phú tích hợp sẵn không lo vi phạm bản quyền'
    ],
    cons: [
      'Bản free không cho phép tải file audio về máy',
      'Số lượng giọng tiếng Việt còn ít hơn ElevenLabs'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: '1 lần',
        features: ['10 phút tạo giọng nói thử nghiệm', 'Truy cập toàn bộ 120+ giọng', 'Không hỗ trợ tải file audio']
      },
      {
        name: 'Creator',
        price: '$23',
        period: 'mỗi user / tháng (thanh toán năm)',
        isPopular: true,
        features: ['Tải file âm thanh không giới hạn', 'Không giới hạn project', 'Quyền thương mại', 'Hơn 8,000 bản nhạc nền bản quyền']
      },
      {
        name: 'Business',
        price: '$79',
        period: 'mỗi user / tháng (thanh toán năm)',
        features: ['Cộng tác nhóm', 'Voice Changer không giới hạn', 'Truy cập API', 'Hỗ trợ ưu tiên riêng']
      }
    ],
    created_at: '2026-02-01T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 1780
  },
  {
    id: 'tool_lovo',
    name: 'LOVO AI (Genny)',
    slug: 'lovo-ai',
    tagline: 'Phòng thu tạo giọng đọc AI từng đoạt giải thưởng với hơn 500+ giọng',
    short_description: 'Nền tảng AI Voiceover và Video Generator thế hệ mới với hơn 500 giọng nói, 100+ ngôn ngữ và khả năng biểu đạt 30+ sắc thái cảm xúc.',
    full_description: 'LOVO AI với sản phẩm chủ lực Genny là giải pháp all-in-one cho người sáng tạo nội dung đa phương tiện. Genny tích hợp bộ sinh giọng nói cảm xúc, công cụ viết kịch bản AI bằng ChatGPT, bộ tạo ảnh AI và trình dựng video dạng timeline hoàn chỉnh.',
    logo_url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['voice-ai', 'creator'],
    target_users: ['voice', 'creator'],
    features: [
      'Hơn 500+ giọng đọc AI với 30+ sắc thái cảm xúc (hào hứng, giận dữ, thì thầm...)',
      'Tích hợp AI Writer soạn kịch bản và AI Art Generator tạo ảnh minh họa',
      'Trình chỉnh sửa video đa track hoàn chỉnh ngay trong trình duyệt',
      'Voice Cloning chất lượng cao cho cá nhân và thương hiệu'
    ],
    official_url: 'https://lovo.ai',
    affiliate_url: 'https://lovo.ai/?ref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% hoa hồng trên mỗi giao dịch',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://lovo.ai/affiliate',
    pricing_type: 'Freemium',
    starting_price: '$0 (14 ngày Pro) / Gói Basic $24/tháng',
    free_plan: true,
    rating: 4.7,
    review_count: 4600,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Số lượng giọng nói và sắc thái cảm xúc phong phú bậc nhất',
      'Tích hợp cả công cụ viết kịch bản và tạo ảnh trong một giao diện',
      'Có nhiều tùy chọn chỉnh phát âm theo phiên âm chuẩn'
    ],
    cons: [
      'Giao diện hơi nhiều tính năng nên người mới cần chút thời gian làm quen',
      'Thời gian render đôi khi hơi chậm khi xuất video độ phân giải cao'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: '14 ngày thử nghiệm',
        features: ['Trải nghiệm đầy đủ tính năng Pro trong 14 ngày', 'Tải tối đa 5 bản audio']
      },
      {
        name: 'Basic',
        price: '$24',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['2 giờ tạo giọng nói mỗi tháng', 'Voice cloning 5 giọng riêng', 'Xuất video HD 1080p', 'Sử dụng thương mại']
      },
      {
        name: 'Pro',
        price: '$48',
        period: 'mỗi tháng (thanh toán năm)',
        features: ['5 giờ tạo giọng nói mỗi tháng', 'Voice cloning không giới hạn', 'Tải file nhanh ưu tiên', 'Lưu trữ không giới hạn']
      }
    ],
    created_at: '2026-02-04T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 1390
  },

  // ==================== DEVELOPER & LẬP TRÌNH ====================
  {
    id: 'tool_cursor',
    name: 'Cursor',
    slug: 'cursor',
    tagline: 'Code editor AI mạnh mẽ nhất thế giới được xây dựng trên nền tảng VS Code',
    short_description: 'Trợ lý lập trình hiểu toàn bộ codebase, tính năng Tab autocomplete siêu dự đoán, chỉnh sửa nhiều file cùng lúc qua Composer và terminal AI.',
    full_description: 'Cursor là trình soạn thảo mã nguồn AI đang tạo nên cuộc cách mạng trong giới lập trình. Được fork từ VS Code nên hỗ trợ 100% các extension quen thuộc, Cursor tích hợp các model AI đỉnh cao như Claude 3.7 Sonnet và GPT-4o. Tính năng Cursor Composer cho phép xây dựng toàn bộ tính năng fullstack, sửa hàng chục file cùng lúc chỉ từ 1 câu lệnh mô tả.',
    logo_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['developer'],
    target_users: ['developer'],
    features: [
      'Hiểu toàn bộ dự án qua chỉ mục codebase (Codebase Indexing & @-Mentions)',
      'Cursor Tab: Tự động dự đoán và hoàn thành nhiều dòng code thông minh',
      'Composer: Tạo và chỉnh sửa hàng loạt file trong project chỉ bằng 1 prompt',
      'Terminal AI: Tự động debug và sửa lệnh bash/terminal khi gặp lỗi',
      'Hỗ trợ chuyển đổi linh hoạt giữa Claude 3.5/3.7 Sonnet, GPT-4o và DeepSeek'
    ],
    official_url: 'https://cursor.com',
    affiliate_url: 'https://cursor.com/?ref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '$10 cho mỗi tài khoản nâng cấp gói Pro',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://cursor.com',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Pro $20/tháng)',
    free_plan: true,
    rating: 4.95,
    review_count: 24300,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Tăng năng suất lập trình lên gấp 3-5 lần thực tế',
      'Tương thích hoàn toàn với hệ sinh thái extension của VS Code',
      'Khả năng suy luận ngữ cảnh trên toàn bộ thư mục dự án xuất sắc',
      'Composer chỉnh sửa nhiều file cùng lúc cực kỳ chính xác'
    ],
    cons: [
      'Gói Pro có hạn mức 500 lượt yêu cầu nhanh (Fast requests) mỗi tháng',
      'Người mới bắt đầu học code có thể phụ thuộc quá nhiều vào AI'
    ],
    pricing_plans: [
      {
        name: 'Hobby',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['50 lượt dùng model cao cấp (Fast requests)', '2000 lượt hoàn thành code Cursor Tab', 'Chỉ mục codebase cơ bản']
      },
      {
        name: 'Pro',
        price: '$20',
        period: 'mỗi tháng',
        isPopular: true,
        features: ['500 Fast premium requests (Claude 3.5/3.7 Sonnet, GPT-4o)', 'Lượt yêu cầu chậm không giới hạn', 'Cursor Tab không giới hạn', 'Sử dụng Composer không giới hạn']
      },
      {
        name: 'Business',
        price: '$40',
        period: 'mỗi user / tháng',
        features: ['Không dùng dữ liệu code để huấn luyện AI (Zero data retention)', 'Bảng điều khiển quản trị tập trung', 'Hạn mức sử dụng nhóm cao hơn']
      }
    ],
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 7890
  },
  {
    id: 'tool_claude_code',
    name: 'Claude Code',
    slug: 'claude-code',
    tagline: 'Agent lập trình dòng lệnh (CLI) tự động hóa của Anthropic',
    short_description: 'Công cụ CLI thông minh chạy trực tiếp trong terminal, tự đọc mã nguồn, chạy test, sửa lỗi, tạo git commit và deploy dự án.',
    full_description: 'Claude Code là công cụ coding agent chạy trực tiếp từ dòng lệnh máy tính của bạn do chính Anthropic phát triển. Không chỉ gợi ý code đơn thuần, Claude Code có quyền tự động tìm kiếm file trong dự án, thực thi các lệnh bash kiểm tra lỗi biên dịch, sửa lỗi bug và viết commit git hoàn chỉnh.',
    logo_url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['developer'],
    target_users: ['developer'],
    features: [
      'Chạy trực tiếp trong Terminal của lập trình viên (CLI Tool)',
      'Tự động đọc, phân tích và sửa lỗi trên toàn bộ kho mã nguồn',
      'Tự chạy test suite và tự sửa code cho đến khi tất cả test đều pass',
      'Tạo Pull Request và Git commit có giải thích chi tiết logic'
    ],
    official_url: 'https://anthropic.com/claude-code',
    affiliate_url: 'https://anthropic.com/claude-code',
    affiliate_enabled: false,
    affiliate_commission: 'Theo mức sử dụng Anthropic API',
    affiliate_cookie_days: 0,
    affiliate_program_url: 'https://anthropic.com',
    pricing_type: 'Paid',
    starting_price: 'Tính theo mức sử dụng Anthropic API tokens',
    free_plan: false,
    rating: 4.9,
    review_count: 4200,
    featured: false,
    recommended: true,
    status: 'active',
    pros: [
      'Khả năng tự động hóa tác vụ terminal và git cực kỳ mạnh mẽ',
      'Sử dụng mô hình Claude 3.7 Sonnet với năng lực tư duy lập trình hàng đầu',
      'Rất nhẹ và tích hợp mượt mà vào workflow của senior developer'
    ],
    cons: [
      'Cần có kiến thức sử dụng Terminal / dòng lệnh cơ bản',
      'Tính phí theo token API nên cần kiểm soát ngân sách nếu dự án quá lớn'
    ],
    pricing_plans: [
      {
        name: 'Pay-as-you-go',
        price: 'Theo Token API',
        period: 'mỗi triệu token',
        isPopular: true,
        features: ['Sử dụng trực tiếp qua Anthropic Console API Key', 'Toàn quyền kiểm soát quyền thực thi lệnh', 'Hỗ trợ các model Claude mới nhất']
      }
    ],
    created_at: '2026-02-15T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3120
  },
  {
    id: 'tool_copilot',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    tagline: 'Trợ lý lập trình AI chính thức từ GitHub và Microsoft',
    short_description: 'Tích hợp mượt mà trong VS Code, Visual Studio, JetBrains, gợi ý code theo ngữ cảnh thời gian thực và giải thích codebase.',
    full_description: 'GitHub Copilot là trợ lý lập trình AI có số lượng người dùng lớn nhất thế giới. Tích hợp sâu với hệ sinh thái GitHub, Copilot Chat hỗ trợ review code trong Pull Request, tạo tài liệu hướng dẫn tự động và phát hiện các lỗ hổng bảo mật tiềm ẩn trong mã nguồn.',
    logo_url: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fce1?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['developer'],
    target_users: ['developer'],
    features: [
      'Gợi ý dòng code và function theo thời gian thực (Code Autocomplete)',
      'Copilot Chat giải thích mã nguồn và hỗ trợ refactor',
      'Tích hợp review Pull Request và phát hiện lỗi bảo mật trên GitHub',
      'Hỗ trợ mọi IDE: VS Code, JetBrains (IntelliJ, PyCharm, WebStorm), Neovim'
    ],
    official_url: 'https://github.com/features/copilot',
    affiliate_url: 'https://github.com/features/copilot',
    affiliate_enabled: false,
    affiliate_commission: 'N/A',
    affiliate_cookie_days: 0,
    affiliate_program_url: 'https://github.com',
    pricing_type: 'Paid',
    starting_price: '$10/tháng (Miễn phí cho sinh viên & Maintainer Open Source)',
    free_plan: false,
    rating: 4.8,
    review_count: 31000,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Tích hợp sâu và mượt mà nhất trong các IDE phổ biến',
      'Miễn phí hoàn toàn cho học sinh, sinh viên và lập trình viên nguồn mở',
      'Độ tin cậy và chính sách bảo mật doanh nghiệp nghiêm ngặt'
    ],
    cons: [
      'Không hỗ trợ tính năng sửa nhiều file mạnh mẽ như Cursor Composer',
      'Không có bản miễn phí cho người dùng phổ thông thông thường'
    ],
    pricing_plans: [
      {
        name: 'Copilot Individual',
        price: '$10',
        period: 'mỗi tháng (hoặc $100/năm)',
        isPopular: true,
        features: ['Gợi ý code không giới hạn', 'Copilot Chat trong IDE', 'Tự động tạo mô tả commit Git', 'Có 30 ngày dùng thử']
      },
      {
        name: 'Copilot Business',
        price: '$19',
        period: 'mỗi user / tháng',
        features: ['Quản lý giấy phép tổ chức', 'Bảo vệ sở hữu trí tuệ', 'Tùy chỉnh chính sách mã nguồn']
      }
    ],
    created_at: '2026-01-05T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 4560
  },
  {
    id: 'tool_replit',
    name: 'Replit Agent',
    slug: 'replit',
    tagline: 'Môi trường lập trình đám mây tích hợp Autonomous Software Agent',
    short_description: 'Xây dựng ứng dụng hoàn chỉnh từ con số 0 chỉ bằng ngôn ngữ tự nhiên: AI tự thiết kế database, viết backend, giao diện và bấm nút deploy.',
    full_description: 'Replit Agent đã tạo nên bước ngoặt lớn cho xu hướng no-code/low-code hiện đại. Bằng cách kết hợp môi trường thực thi đám mây hoàn chỉnh với AI Agent tự chủ, Replit Agent có thể tự cài đặt thư viện npm/pip, cấu hình PostgreSQL, viết API backend, thiết kế giao diện React và tự động triển khai app lên internet chỉ sau vài phút.',
    logo_url: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['developer'],
    target_users: ['developer', 'office'],
    features: [
      'Autonomous Agent: Tự động xây dựng toàn bộ ứng dụng từ đầu đến cuối',
      'Tự động khởi tạo và cấu hình cơ sở dữ liệu PostgreSQL',
      'Môi trường chạy code đám mây không cần cài đặt gì trên máy',
      'Deploy 1-click lên domain tùy chỉnh với SSL miễn phí'
    ],
    official_url: 'https://replit.com',
    affiliate_url: 'https://replit.com/?referral=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% hoa hồng trên gói Replit Core',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://replit.com',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Replit Core $20/tháng)',
    free_plan: true,
    rating: 4.85,
    review_count: 10800,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Cho phép người không chuyên về kỹ thuật cũng có thể build được app chạy thật',
      'Môi trường fullstack có sẵn database, backend và frontend',
      'Cực kỳ nhanh chóng để tạo MVP hoặc công cụ nội bộ công ty'
    ],
    cons: [
      'Gói Agent tiêu tốn credit tương đối nhanh khi chỉnh sửa nhiều vòng',
      'Cần gói trả phí để có tài nguyên máy chủ mạnh mẽ hơn'
    ],
    pricing_plans: [
      {
        name: 'Starter',
        price: '$0',
        period: 'vĩnh viễn',
        features: ['Môi trường lập trình đám mây cơ bản', 'Truy cập Replit AI cơ bản', '3 public Repls']
      },
      {
        name: 'Replit Core',
        price: '$20',
        period: 'mỗi tháng (thanh toán năm)',
        isPopular: true,
        features: ['Sử dụng Replit Agent', 'Cấu hình máy chủ 4x vCPU & 8GB RAM', 'PostgreSQL database tích hợp', 'Private Repls không giới hạn']
      }
    ],
    created_at: '2026-01-14T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 4120
  },
  {
    id: 'tool_lovable',
    name: 'Lovable',
    slug: 'lovable',
    tagline: 'Nền tảng Full-Stack AI Engineer tạo sản phẩm web hoàn hảo với Supabase & GitHub',
    short_description: 'Xây dựng ứng dụng web hiện đại từ ý tưởng văn bản, tích hợp sẵn Supabase authentication, database và đồng bộ trực tiếp 2 chiều với GitHub.',
    full_description: 'Lovable là một trong những AI App Builder phát triển nhanh nhất thế giới. Với tôn chỉ "Ý tưởng thành sản phẩm thực thụ", Lovable tạo ra mã nguồn React/Tailwind sạch đẹp, kết nối thẳng với Supabase để xử lý đăng nhập người dùng, cơ sở dữ liệu và thanh toán Stripe, đồng thời xuất code trực tiếp về repo GitHub cá nhân.',
    logo_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['developer', 'designer'],
    target_users: ['developer', 'designer', 'office'],
    features: [
      'Thiết kế giao diện hiện đại với React, Vite, Tailwind CSS và shadcn/ui',
      'Tích hợp 1-click với Supabase (Auth, Database, Storage)',
      'Đồng bộ 2 chiều với GitHub Repository (Two-way GitHub Sync)',
      'Hỗ trợ tích hợp cổng thanh toán Stripe và các API bên thứ ba'
    ],
    official_url: 'https://lovable.dev',
    affiliate_url: 'https://lovable.dev/?via=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% recurring trong 12 tháng',
    affiliate_cookie_days: 60,
    affiliate_program_url: 'https://lovable.dev/affiliates',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Starter $20/tháng)',
    free_plan: true,
    rating: 4.9,
    review_count: 5400,
    featured: true,
    recommended: true,
    status: 'active',
    pros: [
      'Giao diện ứng dụng sinh ra cực kỳ đẹp mắt, chuẩn xu hướng UI/UX hiện đại',
      'Đồng bộ mã nguồn trực tiếp với GitHub giúp lập trình viên toàn quyền kiểm soát',
      'Khả năng tích hợp Supabase database và auth siêu mượt'
    ],
    cons: [
      'Hạn mức tin nhắn bản miễn phí khá nhanh hết khi xây dựng app phức tạp',
      'Vẫn cần hiểu chút về logic database khi xây dựng luồng dữ liệu lớn'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'hàng ngày',
        features: ['5 tin nhắn miễn phí mỗi ngày', 'Tạo project công khai', 'Đồng bộ GitHub cơ bản']
      },
      {
        name: 'Starter',
        price: '$20',
        period: 'mỗi tháng',
        isPopular: true,
        features: ['100 tin nhắn thế hệ mỗi tháng', 'Private projects', 'Tích hợp Supabase & Stripe không giới hạn', 'Deploy custom domain']
      },
      {
        name: 'Launch',
        price: '$50',
        period: 'mỗi tháng',
        features: ['300 tin nhắn thế hệ mỗi tháng', 'Hỗ trợ ưu tiên cao cấp', 'Tốc độ phản hồi nhanh hơn']
      }
    ],
    created_at: '2026-02-05T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3840
  },
  {
    id: 'tool_bolt',
    name: 'Bolt.new',
    slug: 'bolt',
    tagline: 'Môi trường phát triển ứng dụng Full-Stack AI trên trình duyệt bằng WebContainers',
    short_description: 'Prompt, build, chạy thử nghiệm và deploy ứng dụng fullstack (Node, Next, Vite) trực tiếp trong trình duyệt mà không cần cài đặt Node.js.',
    full_description: 'Bolt.new của StackBlitz là công cụ mang tính đột phá nhờ công nghệ WebContainers, cho phép chạy toàn bộ Node.js server ngay bên trong trình duyệt của người dùng. Bolt.new có thể tự động cài đặt các package npm, chạy dev server, sửa lỗi runtime và deploy trực tiếp lên Netlify/Vercel.',
    logo_url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['developer'],
    target_users: ['developer', 'designer'],
    features: [
      'Chạy môi trường Node.js Fullstack thực thụ ngay trên trình duyệt',
      'Tự động cài đặt npm packages và sửa lỗi biên dịch thời gian thực',
      'Xem trước Live Preview ngay lập tức với tốc độ cực nhanh',
      'Deploy 1-click lên Netlify hoặc xuất mã nguồn về máy tính'
    ],
    official_url: 'https://bolt.new',
    affiliate_url: 'https://bolt.new/?ref=aitoolshub',
    affiliate_enabled: true,
    affiliate_commission: '20% hoa hồng cho mỗi gói đăng ký Pro',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://bolt.new',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Pro $20/tháng)',
    free_plan: true,
    rating: 4.85,
    review_count: 8900,
    featured: false,
    recommended: true,
    status: 'active',
    pros: [
      'Tốc độ khởi tạo dự án nhanh nhất hiện nay nhờ WebContainers',
      'Khả năng tự fix lỗi runtime trong terminal của trình duyệt rất ấn tượng',
      'Dễ dàng chia sẻ đường link project cho khách hàng hoặc đồng nghiệp xem thử'
    ],
    cons: [
      'Gói Free giới hạn số token prompt hàng ngày',
      'Các ứng dụng đòi hỏi cơ sở dữ liệu lớn cần kết nối qua API đám mây'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'hàng ngày',
        features: ['Token prompt làm mới hàng ngày', 'Chạy ứng dụng trong WebContainer', 'Deploy lên Netlify']
      },
      {
        name: 'Pro',
        price: '$20',
        period: 'mỗi tháng',
        isPopular: true,
        features: ['10,000,000 tokens mỗi tháng', 'Private projects', 'Tải toàn bộ source code ZIP', 'Hàng đợi ưu tiên']
      }
    ],
    created_at: '2026-02-10T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 3290
  },
  {
    id: 'tool_v0',
    name: 'v0 by Vercel',
    slug: 'v0',
    tagline: 'Hệ thống sinh giao diện UI component chuẩn React & Tailwind từ prompt',
    short_description: 'Tạo các thành phần UI, trang dashboard và form biểu mẫu chuẩn phong cách shadcn/ui, dễ dàng copy paste vào dự án Next.js.',
    full_description: 'v0 được phát triển bởi Vercel, công ty đứng sau framework Next.js đình đám. v0 chuyên biệt hóa vào việc tạo ra các thành phần giao diện người dùng (UI Components) đẹp mắt, chuẩn accessibility, tối ưu hóa responsive và tuân thủ chặt chẽ phong cách thiết kế hiện đại của Tailwind CSS và Radix UI.',
    logo_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['developer', 'designer'],
    target_users: ['developer', 'designer'],
    features: [
      'Tạo giao diện React, Next.js, Tailwind CSS và shadcn/ui chất lượng cao',
      'Xem trước trực tiếp trên nhiều kích thước màn hình (Mobile, Tablet, Desktop)',
      'Lệnh npx v0 add component_id để kéo thẳng code về project local',
      'Tùy biến tinh chỉnh từng nút bấm, bảng biểu và màu sắc bằng prompt phụ'
    ],
    official_url: 'https://v0.dev',
    affiliate_url: 'https://v0.dev',
    affiliate_enabled: false,
    affiliate_commission: 'N/A',
    affiliate_cookie_days: 0,
    affiliate_program_url: 'https://vercel.com',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng (Gói Premium $20/tháng)',
    free_plan: true,
    rating: 4.8,
    review_count: 7600,
    featured: false,
    recommended: false,
    status: 'active',
    pros: [
      'Chất lượng code UI sạch sẽ, chuẩn React và Tailwind',
      'Tương thích hoàn hảo với shadcn/ui và hệ sinh thái Next.js',
      'Tiết kiệm 80% thời gian code giao diện cho Frontend Developer'
    ],
    cons: [
      'Chủ yếu tập trung vào phần giao diện UI, chưa hỗ trợ backend database phức tạp',
      'Bản free có số credit tạo UI giới hạn mỗi tháng'
    ],
    pricing_plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'mỗi tháng',
        features: ['200 credits miễn phí mỗi tháng', 'Tạo UI công khai', 'Xem trước responsive']
      },
      {
        name: 'Premium',
        price: '$20',
        period: 'mỗi tháng',
        isPopular: true,
        features: ['5,000 credits mỗi tháng', 'Tạo UI riêng tư (Private)', 'Tùy chọn tải trọn gói component', 'Tốc độ render nhanh nhất']
      }
    ],
    created_at: '2026-02-12T00:00:00Z',
    updated_at: '2026-08-20T00:00:00Z',
    clicks_count: 2750
  }
];
