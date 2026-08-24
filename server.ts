import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { SEED_TOOLS } from './src/data/seedTools.ts';
import { CATEGORIES } from './src/data/categories.ts';
import { Tool, AffiliateClick, AnalyticsSummary, TargetUser } from './src/types.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory Database with Seed Initial State
let toolsDb: Tool[] = JSON.parse(JSON.stringify(SEED_TOOLS));

// Mock / Initial Click Data for realistic analytics
const initialClicks: AffiliateClick[] = [
  { id: 'c1', tool_id: 'tool_elevenlabs', tool_slug: 'elevenlabs', tool_name: 'ElevenLabs', created_at: new Date(Date.now() - 1000 * 60 * 15).toISOString(), referrer: 'https://google.com', utm_source: 'google_search', utm_medium: 'cpc', utm_campaign: 'voice_ai_kw' },
  { id: 'c2', tool_id: 'tool_cursor', tool_slug: 'cursor', tool_name: 'Cursor', created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(), referrer: 'https://facebook.com', utm_source: 'facebook_feed', utm_medium: 'social', utm_campaign: 'dev_tools' },
  { id: 'c3', tool_id: 'tool_canva', tool_slug: 'canva', tool_name: 'Canva Magic Studio', created_at: new Date(Date.now() - 1000 * 60 * 120).toISOString(), referrer: 'https://tiktok.com', utm_source: 'tiktok_creator', utm_medium: 'short_video', utm_campaign: 'design_hacks' },
  { id: 'c4', tool_id: 'tool_runway', tool_slug: 'runway', tool_name: 'Runway Gen-3 Alpha', created_at: new Date(Date.now() - 1000 * 60 * 200).toISOString(), referrer: 'https://youtube.com', utm_source: 'youtube_review', utm_medium: 'video_desc', utm_campaign: 'video_ai_2026' },
  { id: 'c5', tool_id: 'tool_heygen', tool_slug: 'heygen', tool_name: 'HeyGen', created_at: new Date(Date.now() - 1000 * 60 * 360).toISOString(), referrer: 'https://google.com', utm_source: 'google_organic', utm_medium: 'seo', utm_campaign: 'avatar_ai' },
  { id: 'c6', tool_id: 'tool_replit', tool_slug: 'replit', tool_name: 'Replit Agent', created_at: new Date(Date.now() - 1000 * 60 * 500).toISOString(), referrer: 'https://direct.com', utm_source: 'newsletter', utm_medium: 'email', utm_campaign: 'weekly_digest' }
];

let clicksDb: AffiliateClick[] = [...initialClicks];

// Gemini Client Lazy Initializer
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// ==================== API ROUTES ====================

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Categories with live count
app.get('/api/categories', (req, res) => {
  const categoriesWithCounts = CATEGORIES.map((cat) => {
    const count = toolsDb.filter(
      (t) => t.status === 'active' && (t.category_slugs.includes(cat.slug) || t.target_users.includes(cat.targetUserKey))
    ).length;
    return { ...cat, count };
  });
  res.json(categoriesWithCounts);
});

// Get Tools List with Rich Query Filters & Search
app.get('/api/tools', (req, res) => {
  const {
    category,
    search,
    pricing,
    target_user,
    affiliate_only,
    featured,
    recommended,
    free_plan,
    sort = 'popular',
    limit
  } = req.query;

  let filtered = [...toolsDb].filter((t) => t.status === 'active');

  // Filter Category
  if (category && typeof category === 'string' && category !== 'all') {
    filtered = filtered.filter((t) => t.category_slugs.includes(category));
  }

  // Filter Target User
  if (target_user && typeof target_user === 'string' && target_user !== 'all') {
    filtered = filtered.filter((t) => t.target_users.includes(target_user as TargetUser));
  }

  // Filter Pricing Type
  if (pricing && typeof pricing === 'string' && pricing !== 'all') {
    filtered = filtered.filter((t) => t.pricing_type.toLowerCase() === pricing.toLowerCase());
  }

  // Filter Free Plan Available
  if (free_plan === 'true') {
    filtered = filtered.filter((t) => t.free_plan === true);
  }

  // Filter Affiliate enabled only
  if (affiliate_only === 'true') {
    filtered = filtered.filter((t) => t.affiliate_enabled === true);
  }

  // Filter Featured
  if (featured === 'true') {
    filtered = filtered.filter((t) => t.featured === true);
  }

  // Filter Recommended
  if (recommended === 'true') {
    filtered = filtered.filter((t) => t.recommended === true);
  }

  // Search by Name, Description, Features, Target Users
  if (search && typeof search === 'string' && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter((t) => {
      const matchName = t.name.toLowerCase().includes(q);
      const matchTagline = t.tagline.toLowerCase().includes(q);
      const matchShortDesc = t.short_description.toLowerCase().includes(q);
      const matchFullDesc = t.full_description.toLowerCase().includes(q);
      const matchFeatures = t.features.some((f) => f.toLowerCase().includes(q));
      const matchCategory = t.category_slugs.some((c) => c.toLowerCase().includes(q));
      const matchTargetUsers = t.target_users.some((u) => u.toLowerCase().includes(q));
      return matchName || matchTagline || matchShortDesc || matchFullDesc || matchFeatures || matchCategory || matchTargetUsers;
    });
  }

  // Sorting
  if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'newest') {
    filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } else if (sort === 'clicks') {
    filtered.sort((a, b) => (b.clicks_count || 0) - (a.clicks_count || 0));
  } else if (sort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Default Popular: Featured first, then rating * clicks
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.rating * (b.clicks_count || 100)) - (a.rating * (a.clicks_count || 100));
    });
  }

  if (limit && !isNaN(Number(limit))) {
    filtered = filtered.slice(0, Number(limit));
  }

  res.json({
    total: filtered.length,
    tools: filtered
  });
});

// Get Single Tool by Slug
app.get('/api/tools/:slug', (req, res) => {
  const { slug } = req.params;
  const tool = toolsDb.find((t) => t.slug === slug || t.id === slug);
  if (!tool) {
    res.status(404).json({ error: 'Không tìm thấy công cụ AI này' });
    return;
  }

  // Similar tools from same categories
  const similarTools = toolsDb
    .filter((t) => t.id !== tool.id && t.status === 'active' && t.category_slugs.some((cat) => tool.category_slugs.includes(cat)))
    .slice(0, 4);

  res.json({
    tool,
    similarTools
  });
});

// Admin: Add New Tool
app.post('/api/tools', (req, res) => {
  const body = req.body;
  if (!body.name || !body.slug) {
    res.status(400).json({ error: 'Tên công cụ và slug là bắt buộc' });
    return;
  }

  const existing = toolsDb.find((t) => t.slug === body.slug);
  if (existing) {
    res.status(400).json({ error: 'Slug này đã tồn tại trong hệ thống' });
    return;
  }

  const newTool: Tool = {
    id: `tool_${Date.now()}`,
    name: body.name,
    slug: body.slug,
    tagline: body.tagline || '',
    short_description: body.short_description || '',
    full_description: body.full_description || '',
    logo_url: body.logo_url || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    category_slugs: body.category_slugs || ['office'],
    target_users: body.target_users || ['office'],
    features: body.features || [],
    official_url: body.official_url || 'https://example.com',
    affiliate_url: body.affiliate_url || '',
    affiliate_enabled: Boolean(body.affiliate_enabled),
    affiliate_commission: body.affiliate_commission || '',
    affiliate_cookie_days: Number(body.affiliate_cookie_days) || 30,
    affiliate_program_url: body.affiliate_program_url || '',
    pricing_type: body.pricing_type || 'Freemium',
    starting_price: body.starting_price || '$0/tháng',
    free_plan: Boolean(body.free_plan),
    rating: Number(body.rating) || 4.8,
    review_count: Number(body.review_count) || 100,
    featured: Boolean(body.featured),
    recommended: Boolean(body.recommended),
    status: body.status || 'active',
    pros: body.pros || [],
    cons: body.cons || [],
    pricing_plans: body.pricing_plans || [
      { name: 'Free', price: '$0', period: 'vĩnh viễn', features: ['Dùng thử cơ bản'] },
      { name: 'Pro', price: '$20', period: 'mỗi tháng', isPopular: true, features: ['Đầy đủ tính năng'] }
    ],
    clicks_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  toolsDb.unshift(newTool);
  res.status(201).json(newTool);
});

// Admin: Update Tool
app.put('/api/tools/:id', (req, res) => {
  const { id } = req.params;
  const index = toolsDb.findIndex((t) => t.id === id || t.slug === id);
  if (index === -1) {
    res.status(404).json({ error: 'Không tìm thấy công cụ' });
    return;
  }

  const updated: Tool = {
    ...toolsDb[index],
    ...req.body,
    id: toolsDb[index].id,
    updated_at: new Date().toISOString()
  };

  toolsDb[index] = updated;
  res.json(updated);
});

// Admin: Delete Tool
app.delete('/api/tools/:id', (req, res) => {
  const { id } = req.params;
  const index = toolsDb.findIndex((t) => t.id === id || t.slug === id);
  if (index === -1) {
    res.status(404).json({ error: 'Không tìm thấy công cụ để xóa' });
    return;
  }

  const deleted = toolsDb.splice(index, 1)[0];
  res.json({ message: 'Đã xóa công cụ thành công', deleted });
});

// Admin: Reset Data to Seed
app.post('/api/tools/reset', (req, res) => {
  toolsDb = JSON.parse(JSON.stringify(SEED_TOOLS));
  res.json({ message: 'Đã đặt lại dữ liệu gốc thành công!', total: toolsDb.length });
});

// Track Click Directly via API
app.post('/api/clicks/track', (req, res) => {
  const { tool_id, tool_slug, referrer, utm_source, utm_medium, utm_campaign } = req.body;
  const tool = toolsDb.find((t) => t.id === tool_id || t.slug === tool_slug);

  if (tool) {
    tool.clicks_count = (tool.clicks_count || 0) + 1;
    const clickRecord: AffiliateClick = {
      id: `c_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      tool_id: tool.id,
      tool_slug: tool.slug,
      tool_name: tool.name,
      created_at: new Date().toISOString(),
      referrer: referrer || 'direct',
      utm_source: utm_source || 'direct',
      utm_medium: utm_medium || 'none',
      utm_campaign: utm_campaign || 'general',
      user_agent: req.headers['user-agent']
    };
    clicksDb.unshift(clickRecord);
    if (clicksDb.length > 500) {
      clicksDb.pop();
    }
  }

  res.json({ success: true });
});

// Analytics Summary for Admin
app.get('/api/analytics', (req, res) => {
  const totalTools = toolsDb.length;
  const activeTools = toolsDb.filter((t) => t.status === 'active').length;
  const affiliateTools = toolsDb.filter((t) => t.affiliate_enabled && t.affiliate_url).length;

  const totalClicks = toolsDb.reduce((acc, t) => acc + (t.clicks_count || 0), 0);

  // Top Clicked Tools
  const topClickedTools = [...toolsDb]
    .sort((a, b) => (b.clicks_count || 0) - (a.clicks_count || 0))
    .slice(0, 10)
    .map((t) => ({
      tool_id: t.id,
      tool_name: t.name,
      slug: t.slug,
      clicks: t.clicks_count || 0,
      commission: t.affiliate_commission || 'N/A'
    }));

  // Daily Clicks Trend (past 7 days simulated distribution + real)
  const days: { [key: string]: number } = {};
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    const key = d.toLocaleDateString('vi-VN', { month: '2-digit', day: '2-digit' });
    days[key] = Math.floor(180 + Math.random() * 120 + (6 - i) * 15);
  }

  const clicksByDay = Object.keys(days).map((date) => ({
    date,
    clicks: days[date]
  }));

  // UTM Sources Distribution
  const sourcesMap: { [key: string]: number } = {
    Google: 42,
    Facebook: 26,
    TikTok: 18,
    YouTube: 14
  };

  clicksDb.forEach((c) => {
    const src = c.utm_source || 'Direct';
    sourcesMap[src] = (sourcesMap[src] || 0) + 1;
  });

  const clicksBySource = Object.keys(sourcesMap).map((k) => ({
    source: k,
    count: sourcesMap[k]
  }));

  const summary: AnalyticsSummary = {
    totalTools,
    activeTools,
    affiliateTools,
    totalClicks,
    clicks7Days: Math.floor(totalClicks * 0.28),
    clicks30Days: totalClicks,
    topClickedTools,
    clicksByDay,
    clicksBySource,
    recentClicks: clicksDb.slice(0, 25)
  };

  res.json(summary);
});

// ==================== AFFILIATE REDIRECT ENGINE (/go/:slug) ====================
app.get('/go/:slug', (req, res) => {
  const { slug } = req.params;
  const tool = toolsDb.find((t) => t.slug === slug || t.id === slug);

  if (!tool) {
    res.status(404).send(`
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="utf-8">
        <title>Không tìm thấy công cụ AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0f172a; color: #fff; text-align: center; }
          .card { padding: 2rem; background: #1e293b; border-radius: 1rem; max-width: 400px; border: 1px solid #334155; }
          a { color: #38bdf8; text-decoration: none; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Không tìm thấy công cụ</h2>
          <p>Đường link chuyển hướng không tồn tại hoặc đã bị gỡ.</p>
          <a href="/">Quay về Trang Chủ AI Tools Hub</a>
        </div>
      </body>
      </html>
    `);
    return;
  }

  // 1. Record Click in DB
  tool.clicks_count = (tool.clicks_count || 0) + 1;

  const referrer = req.get('Referrer') || req.get('Referer') || 'direct';
  const utm_source = (req.query.utm_source as string) || (req.query.src as string) || 'hub_redirect';
  const utm_medium = (req.query.utm_medium as string) || 'affiliate_link';
  const utm_campaign = (req.query.utm_campaign as string) || 'aitoolshub';

  const clickRecord: AffiliateClick = {
    id: `c_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    tool_id: tool.id,
    tool_slug: tool.slug,
    tool_name: tool.name,
    created_at: new Date().toISOString(),
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
    user_agent: req.headers['user-agent']
  };

  clicksDb.unshift(clickRecord);
  if (clicksDb.length > 500) clicksDb.pop();

  // 2. Determine target destination URL
  let targetUrl = (tool.affiliate_enabled && tool.affiliate_url) ? tool.affiliate_url : tool.official_url;

  // Append tracking parameters if needed
  try {
    const urlObj = new URL(targetUrl);
    if (!urlObj.searchParams.has('utm_source')) {
      urlObj.searchParams.set('utm_source', 'aitoolshub');
    }
    targetUrl = urlObj.toString();
  } catch (e) {
    // fallback if targetUrl is relative
  }

  // If client requests JSON
  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    res.json({
      success: true,
      destination: targetUrl,
      tool: { name: tool.name, slug: tool.slug }
    });
    return;
  }

  // Smooth Redirect Interstitial Page for High Trust & Compliance
  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="utf-8">
      <title>Đang chuyển hướng tới ${tool.name}...</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="refresh" content="1;url=${targetUrl}">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #090d16;
          color: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 1.5rem;
        }
        .container {
          background: #111827;
          border: 1px solid #1f2937;
          border-radius: 1.25rem;
          padding: 2.5rem 2rem;
          max-width: 460px;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .logo-box {
          width: 72px;
          height: 72px;
          border-radius: 1.25rem;
          margin: 0 auto 1.5rem;
          background: #1f2937;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
          border: 2px solid #374151;
        }
        .logo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        h1 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #f3f4f6;
        }
        p {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 1.75rem;
          line-height: 1.5;
        }
        .spinner {
          width: 36px;
          height: 36px;
          border: 3px solid rgba(99, 102, 241, 0.2);
          border-top-color: #6366f1;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1.5rem;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .btn {
          display: inline-block;
          background: #4f46e5;
          color: #fff;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-size: 0.875rem;
          transition: background 0.2s;
        }
        .btn:hover {
          background: #4338ca;
        }
        .notice {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 1.5rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo-box">
          <img src="${tool.logo_url}" alt="${tool.name}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80'" />
        </div>
        <div class="spinner"></div>
        <h1>Đang chuyển hướng tới ${tool.name}</h1>
        <p>Hệ thống AI Tools Hub đang đưa bạn đến website chính thức với ưu đãi tốt nhất...</p>
        <a class="btn" href="${targetUrl}">Bấm vào đây nếu không tự chuyển</a>
        <div class="notice">
          Một số liên kết là link affiliate hỗ trợ duy trì nền tảng AI Tools Hub miễn phí cho cộng đồng.
        </div>
      </div>
      <script>
        setTimeout(() => {
          window.location.href = ${JSON.stringify(targetUrl)};
        }, 600);
      </script>
    </body>
    </html>
  `);
});

// AI Smart Recommendation Engine (via Gemini or Knowledge Matcher)
app.post('/api/ai-match', async (req, res) => {
  const { prompt, profession, goal, budget } = req.body;

  try {
    const ai = getGeminiClient();
    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Bạn là chuyên gia tư vấn công cụ AI hàng đầu thế giới trên nền tảng AI Tools Hub.
Người dùng có nhu cầu:
- Nghề nghiệp / Vai trò: ${profession || 'Chung'}
- Mục tiêu cần AI hỗ trợ: ${goal || prompt || 'Tối ưu hóa công việc'}
- Ngân sách / Mong muốn giá: ${budget || 'Linh hoạt'}

Dưới đây là danh sách các công cụ AI có sẵn trong hệ thống:
${toolsDb.map((t) => `- [${t.name}] (slug: ${t.slug}): ${t.short_description} (Phù hợp: ${t.target_users.join(', ')})`).join('\n')}

Hãy chọn ra chính xác 3 công cụ AI phù hợp nhất từ danh sách trên.
Trả về định dạng JSON thuần túy (không bọc trong markdown codeblock nếu có thể, hoặc chuẩn JSON) với cấu trúc:
{
  "summary": "Lời khuyên ngắn gọn 1-2 câu",
  "recommendations": [
    {
      "slug": "slug_cua_tool",
      "matchScore": 98,
      "why": "Lý do vì sao công cụ này là giải pháp số 1 cho nhu cầu của bạn"
    }
  ]
}`
      });

      const text = response.text || '';
      // Clean possible markdown code fences
      const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
      try {
        const parsed = JSON.parse(cleaned);
        // Attach full tool details
        const enriched = parsed.recommendations.map((rec: any) => {
          const tool = toolsDb.find((t) => t.slug === rec.slug || t.name.toLowerCase() === rec.slug?.toLowerCase());
          return {
            tool: tool || toolsDb[0],
            matchScore: rec.matchScore || 95,
            reasons: [rec.why]
          };
        });
        res.json({ summary: parsed.summary, results: enriched });
        return;
      } catch (err) {
        // Fallback to algorithmic match if JSON parse failed
      }
    }
  } catch (error) {
    console.error('Gemini recommendation error:', error);
  }

  // Fallback intelligent algorithmic scoring
  const targetUserKey = (profession as TargetUser) || 'office';
  const matches = toolsDb
    .filter((t) => t.status === 'active')
    .map((tool) => {
      let score = 70;
      const reasons: string[] = [];

      if (tool.target_users.includes(targetUserKey)) {
        score += 20;
        reasons.push(`Được tối ưu hóa hoàn hảo cho người làm ${targetUserKey}`);
      }
      if (tool.featured) {
        score += 5;
        reasons.push('Được đánh giá Top 1 lựa chọn từ cộng đồng chuyên gia');
      }
      if (tool.free_plan) {
        score += 5;
        reasons.push('Có gói Free trải nghiệm không rủi ro chi phí');
      }

      return { tool, matchScore: Math.min(score, 99), reasons };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  res.json({
    summary: `Dựa trên nhu cầu công việc của bạn, đây là 3 giải pháp AI tối ưu nhất giúp tăng năng suất vượt trội.`,
    results: matches
  });
});

// ==================== VITE SERVER & STATIC HOSTING ====================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AI Tools Discovery & Affiliate Hub is running on http://localhost:${PORT}`);
  });
}

startServer();
