import { Tool, AnalyticsSummary, TargetUser, PricingType, PluginTool } from '../types';
import {
  SlidersHorizontal,
  BarChart3,
  Link,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Sparkles,
  Award,
  RefreshCw,
  TrendingUp,
  Globe,
  DollarSign,
  Search,
  ExternalLink,
  Lock,
  Unlock,
  ShieldCheck,
  Save,
  X,
  Puzzle,
  LogOut,
  UserCheck
} from 'lucide-react';

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'tools' | 'affiliate' | 'plugins' | 'settings'>('analytics');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('admin_token') === 'admin_session_token_minhthuc2026';
  });

  // Login Form state
  const [loginUsername, setLoginUsername] = useState('admin@minhthucmkt.vn');
  const [loginPassword, setLoginPassword] = useState('MinhThuc2026@Admin');
  const [loginError, setLoginError] = useState('');

  const [tools, setTools] = useState<Tool[]>([]);
  const [plugins, setPlugins] = useState<PluginTool[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Editing Plugin State
  const [editingPlugin, setEditingPlugin] = useState<PluginTool | null>(null);
  const [isAddPluginModalOpen, setIsAddPluginModalOpen] = useState(false);
  const [pluginFormData, setPluginFormData] = useState<Partial<PluginTool>>({
    name: '',
    slug: '',
    description: '',
    icon_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    badge_text: 'HOT AI',
    type: 'iframe',
    external_url: 'https://',
    embed_code: '',
    category: 'office',
    status: 'active'
  });


  // Editing Tool State
  const [editingTool, setEditingTool] = useState<Tool | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form State for Add / Edit
  const [formData, setFormData] = useState<Partial<Tool>>({
    name: '',
    slug: '',
    tagline: '',
    short_description: '',
    full_description: '',
    logo_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    category_slugs: ['office'],
    target_users: ['office'],
    features: ['Tính năng 1', 'Tính năng 2'],
    official_url: 'https://',
    affiliate_url: 'https://',
    affiliate_enabled: true,
    affiliate_commission: '20% recurring',
    affiliate_cookie_days: 30,
    affiliate_program_url: 'https://',
    pricing_type: 'Freemium',
    starting_price: '$0/tháng',
    free_plan: true,
    rating: 4.8,
    review_count: 500,
    featured: false,
    recommended: false,
    status: 'active',
    pros: ['Dễ sử dụng', 'Hiệu suất cao'],
    cons: ['Cần kết nối mạng']
  });

  const fetchPlugins = async () => {
    try {
      const res = await fetch('/api/plugins');
      if (res.ok) {
        const data = await res.json();
        setPlugins(data.plugins || []);
      }
    } catch (err) {
      console.error('Error fetching plugins:', err);
    }
  };

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const [toolsRes, analyticsRes] = await Promise.all([
        fetch('/api/tools?limit=100'),
        fetch('/api/analytics')
      ]);

      if (toolsRes.ok) {
        const data = await toolsRes.json();
        setTools(data.tools);
      }
      if (analyticsRes.ok) {
        const aData = await analyticsRes.json();
        setAnalytics(aData);
      }
      fetchPlugins();
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAdminData();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUsername, password: loginPassword })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('admin_token', data.token);
        setIsAuthenticated(true);
      } else {
        const err = await res.json();
        setLoginError(err.error || 'Đăng nhập không thành công');
      }
    } catch {
      if ((loginUsername === 'admin@minhthucmkt.vn' || loginUsername === 'admin') && loginPassword === 'MinhThuc2026@Admin') {
        localStorage.setItem('admin_token', 'admin_session_token_minhthuc2026');
        setIsAuthenticated(true);
      } else {
        setLoginError('Tên đăng nhập hoặc mật khẩu không chính xác');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  const handleSavePlugin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pluginFormData.name || !pluginFormData.slug) {
      alert('Vui lòng điền tên và slug của Plugin/Công cụ');
      return;
    }

    try {
      if (editingPlugin) {
        const res = await fetch(`/api/plugins/${editingPlugin.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pluginFormData)
        });
        if (res.ok) {
          alert('Cập nhật Plugin thành công!');
          setEditingPlugin(null);
          fetchPlugins();
        }
      } else {
        const res = await fetch('/api/plugins', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pluginFormData)
        });
        if (res.ok) {
          alert('Thêm Plugin mới thành công!');
          setIsAddPluginModalOpen(false);
          fetchPlugins();
        }
      }
    } catch (err) {
      console.error('Error saving plugin:', err);
    }
  };

  const handleDeletePlugin = async (id: string, name: string) => {
    if (!window.confirm(`Bạn có chắc muốn xóa Plugin "${name}"?`)) return;
    try {
      const res = await fetch(`/api/plugins/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchPlugins();
      }
    } catch (err) {
      console.error('Error deleting plugin:', err);
    }
  };


  const handleSaveTool = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.slug) {
      alert('Vui lòng điền tên và slug công cụ');
      return;
    }

    try {
      if (editingTool) {
        // Update
        const res = await fetch(`/api/tools/${editingTool.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          alert('Cập nhật công cụ thành công!');
          setEditingTool(null);
          fetchAdminData();
        }
      } else {
        // Create
        const res = await fetch('/api/tools', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          alert('Thêm công cụ mới thành công!');
          setIsAddModalOpen(false);
          fetchAdminData();
        }
      }
    } catch (err) {
      console.error('Error saving tool:', err);
    }
  };

  const handleDeleteTool = async (id: string, name: string) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa công cụ "${name}"?`)) return;
    try {
      const res = await fetch(`/api/tools/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchAdminData();
      }
    } catch (err) {
      console.error('Error deleting tool:', err);
    }
  };

  const handleToggleStatus = async (tool: Tool) => {
    const newStatus = tool.status === 'active' ? 'disabled' : 'active';
    try {
      await fetch(`/api/tools/${tool.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchAdminData();
    } catch (err) {
      console.error('Toggle status error:', err);
    }
  };

  const handleToggleFeatured = async (tool: Tool) => {
    try {
      await fetch(`/api/tools/${tool.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured: !tool.featured })
      });
      fetchAdminData();
    } catch (err) {
      console.error('Toggle featured error:', err);
    }
  };

  const handleToggleRecommended = async (tool: Tool) => {
    try {
      await fetch(`/api/tools/${tool.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recommended: !tool.recommended })
      });
      fetchAdminData();
    } catch (err) {
      console.error('Toggle recommended error:', err);
    }
  };

  const handleResetSeedData = async () => {
    if (!window.confirm('Cảnh báo: Thao tác này sẽ đặt lại toàn bộ danh sách 28+ công cụ AI về mặc định. Bạn có chắc không?')) return;
    try {
      const res = await fetch('/api/tools/reset', { method: 'POST' });
      if (res.ok) {
        alert('Đã đặt lại dữ liệu thành công!');
        fetchAdminData();
      }
    } catch (err) {
      console.error('Reset data error:', err);
    }
  };

  const filteredTools = tools.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category_slugs.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Lock className="w-32 h-32 text-indigo-400" />
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 mb-4">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white">Đăng Nhập Quản Trị</h1>
            <p className="text-xs text-slate-400 mt-2">Đăng nhập tài khoản Admin hệ thống website `congcu.minhthucmkt.vn`</p>
          </div>

          <div className="bg-slate-950/80 border border-indigo-500/20 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs mb-2">
              <UserCheck className="w-4 h-4" />
              <span>Tài khoản Admin hệ thống:</span>
            </div>
            <p className="text-xs text-slate-300">Tài khoản: <strong className="text-white">admin@minhthucmkt.vn</strong> (hoặc <strong className="text-white">admin</strong>)</p>
            <p className="text-xs text-slate-300 mt-1">Mật khẩu: <strong className="text-amber-400">MinhThuc2026@Admin</strong></p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
              ⚠️ {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Tên đăng nhập / Email Admin</label>
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="admin@minhthucmkt.vn"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mật khẩu</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Đăng Nhập Quản Trị</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={onBack}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              ← Về trang chủ công cụ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-24">
      {/* Admin Header */}
      <div className="border-b border-slate-800 bg-slate-900/90 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700"
            >
              ← Về trang chủ
            </button>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-indigo-400" />
              <h1 className="text-lg font-bold text-white">Quản trị AI Tools Hub</h1>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">
                Admin Domain Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAdminData}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700 transition-colors"
              title="Làm mới dữ liệu"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Thống kê & Click Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'tools'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Quản lý Tools ({tools.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('plugins')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'plugins'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Puzzle className="w-4 h-4 text-emerald-400" />
            <span>Plugins & Công Cụ Ngoài ({plugins.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('affiliate')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'affiliate'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Link className="w-4 h-4" />
            <span>Quản lý Link Affiliate & Hoa hồng</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Dữ liệu & Cài đặt Seed</span>
          </button>
        </div>


        {/* TAB 1: ANALYTICS & CLICKS */}
        {activeTab === 'analytics' && analytics && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Tổng công cụ AI</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">{analytics.totalTools}</p>
                <span className="text-[11px] text-emerald-400 mt-1 block">Active: {analytics.activeTools} tools</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Công cụ có Affiliate</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">{analytics.affiliateTools}</p>
                <span className="text-[11px] text-slate-400 mt-1 block">Đang tạo dòng tiền</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Tổng lượt Click Chuyển đổi</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1">{analytics.totalClicks.toLocaleString()}</p>
                <span className="text-[11px] text-emerald-400 mt-1 block">Qua đường dẫn /go/:slug</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Clicks 7 ngày gần nhất</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1">{analytics.clicks7Days.toLocaleString()}</p>
                <span className="text-[11px] text-purple-300 mt-1 block">Tăng trưởng +18.4%</span>
              </div>
            </div>

            {/* Daily Chart & UTM Source Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Daily Clicks Distribution */}
              <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-400" />
                  <span>Xu hướng Clicks 7 ngày qua</span>
                </h3>
                <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2">
                  {analytics.clicksByDay.map((item, idx) => {
                    const heightPercent = Math.min(100, Math.max(15, (item.clicks / 350) * 100));
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <span className="text-[10px] text-slate-400 font-medium">{item.clicks}</span>
                        <div
                          className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg transition-all duration-300 hover:brightness-125"
                          style={{ height: `${heightPercent}%` }}
                        />
                        <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* UTM Sources */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>Nguồn Traffic (UTM / Referrer)</span>
                </h3>
                <div className="space-y-3">
                  {analytics.clicksBySource.map((src, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
                      <span className="font-semibold text-slate-300">{src.source}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-bold border border-slate-700">
                        {src.count} clicks
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Clicked Tools Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Top 10 Công cụ AI được Click nhiều nhất</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-3 font-semibold">Hạng</th>
                      <th className="pb-3 font-semibold">Tên công cụ</th>
                      <th className="pb-3 font-semibold">Redirect Link</th>
                      <th className="pb-3 font-semibold">Tổng lượt Click</th>
                      <th className="pb-3 font-semibold">Chính sách hoa hồng</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {analytics.topClickedTools.map((t, idx) => (
                      <tr key={t.tool_id} className="hover:bg-slate-800/40">
                        <td className="py-3 font-bold text-amber-400">#{idx + 1}</td>
                        <td className="py-3 font-bold text-white">{t.tool_name}</td>
                        <td className="py-3 font-mono text-indigo-400">/go/{t.slug}</td>
                        <td className="py-3 font-extrabold text-white">{t.clicks.toLocaleString()}</td>
                        <td className="py-3 text-slate-300">{t.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Clicks Stream */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">
                Nhật ký chuyển hướng thời gian thực (Live Click Stream)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-2.5 font-semibold">Thời gian</th>
                      <th className="pb-2.5 font-semibold">Tool</th>
                      <th className="pb-2.5 font-semibold">UTM Source</th>
                      <th className="pb-2.5 font-semibold">Campaign</th>
                      <th className="pb-2.5 font-semibold">Referrer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                    {analytics.recentClicks.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-800/30">
                        <td className="py-2.5 text-slate-400">
                          {new Date(c.created_at).toLocaleTimeString('vi-VN')}
                        </td>
                        <td className="py-2.5 font-bold text-white">{c.tool_name}</td>
                        <td className="py-2.5 text-indigo-400">{c.utm_source || 'direct'}</td>
                        <td className="py-2.5 text-slate-400">{c.utm_campaign || 'default'}</td>
                        <td className="py-2.5 text-slate-500 truncate max-w-xs">{c.referrer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TOOLS MANAGEMENT */}
        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm tool theo tên, slug, category..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                onClick={() => {
                  setFormData({
                    name: '',
                    slug: '',
                    tagline: '',
                    short_description: '',
                    full_description: '',
                    logo_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
                    category_slugs: ['office'],
                    target_users: ['office'],
                    features: ['Tính năng 1', 'Tính năng 2'],
                    official_url: 'https://',
                    affiliate_url: 'https://',
                    affiliate_enabled: true,
                    affiliate_commission: '20% recurring',
                    affiliate_cookie_days: 30,
                    affiliate_program_url: 'https://',
                    pricing_type: 'Freemium',
                    starting_price: '$0/tháng',
                    free_plan: true,
                    rating: 4.8,
                    review_count: 100,
                    featured: false,
                    recommended: false,
                    status: 'active',
                    pros: ['Ưu điểm 1'],
                    cons: ['Nhược điểm 1']
                  });
                  setEditingTool(null);
                  setIsAddModalOpen(true);
                }}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm công cụ mới</span>
              </button>
            </div>

            {/* Tools Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/60 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="p-4 font-semibold">Công cụ</th>
                      <th className="p-4 font-semibold">Danh mục</th>
                      <th className="p-4 font-semibold">Giá khởi điểm</th>
                      <th className="p-4 font-semibold text-center">Nổi bật</th>
                      <th className="p-4 font-semibold text-center">Khuyên dùng</th>
                      <th className="p-4 font-semibold text-center">Trạng thái</th>
                      <th className="p-4 font-semibold text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredTools.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-800/40">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-800 p-0.5 flex items-center justify-center shrink-0">
                              <img src={t.logo_url} alt={t.name} className="w-full h-full object-cover rounded" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white">{t.name}</h4>
                              <span className="text-[10px] font-mono text-indigo-400">/go/{t.slug}</span>
                            </div>
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {t.category_slugs.map((c) => (
                              <span key={c} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                                {c}
                              </span>
                            ))}
                          </div>
                        </td>

                        <td className="p-4 font-semibold text-slate-200">
                          {t.starting_price}
                        </td>

                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleToggleFeatured(t)}
                            className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                              t.featured
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                                : 'text-slate-600 hover:text-slate-400'
                            }`}
                          >
                            <Sparkles className="w-4 h-4" />
                          </button>
                        </td>

                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleToggleRecommended(t)}
                            className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                              t.recommended
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'text-slate-600 hover:text-slate-400'
                            }`}
                          >
                            <Award className="w-4 h-4" />
                          </button>
                        </td>

                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleToggleStatus(t)}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all ${
                              t.status === 'active'
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                            }`}
                          >
                            {t.status === 'active' ? 'Hoạt động' : 'Tạm ẩn'}
                          </button>
                        </td>

                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setEditingTool(t);
                                setFormData(t);
                                setIsAddModalOpen(true);
                              }}
                              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                              title="Sửa công cụ"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteTool(t.id, t.name)}
                              className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800"
                              title="Xóa công cụ"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AFFILIATE LINKS & COMMISSIONS */}
        {activeTab === 'affiliate' && (
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-6">
              <h3 className="text-base font-bold text-white mb-1">Cấu hình Hệ thống Tiếp thị Liên kết</h3>
              <p className="text-xs text-slate-400">
                Quản lý các URL affiliate, hoa hồng phần trăm, thời hạn cookie và link đăng ký chương trình đối tác cho từng công cụ AI.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/60 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="p-4 font-semibold">Tên Tool</th>
                      <th className="p-4 font-semibold">Trạng thái Affiliate</th>
                      <th className="p-4 font-semibold">Đường dẫn Affiliate URL</th>
                      <th className="p-4 font-semibold">Mức hoa hồng</th>
                      <th className="p-4 font-semibold">Cookie (Ngày)</th>
                      <th className="p-4 font-semibold text-right">Chỉnh sửa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {tools.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-800/40">
                        <td className="p-4 font-bold text-white">
                          <div className="flex items-center gap-2">
                            <span>{t.name}</span>
                            <a href={`/go/${t.slug}`} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300">
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </td>

                        <td className="p-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              t.affiliate_enabled
                                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            {t.affiliate_enabled ? '✓ Đang bật' : 'Chưa bật'}
                          </span>
                        </td>

                        <td className="p-4 font-mono text-[11px] text-slate-300 max-w-xs truncate">
                          {t.affiliate_url || t.official_url}
                        </td>

                        <td className="p-4 font-semibold text-emerald-400">
                          {t.affiliate_commission || 'Chưa cập nhật'}
                        </td>

                        <td className="p-4 text-slate-300">
                          {t.affiliate_cookie_days ? `${t.affiliate_cookie_days} ngày` : 'N/A'}
                        </td>

                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              setEditingTool(t);
                              setFormData(t);
                              setIsAddModalOpen(true);
                            }}
                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700"
                          >
                            Sửa link
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SETTINGS & SEED DATA */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-2">Khôi phục Dữ liệu Mặc định (Seed Reset)</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Hệ thống đi kèm với 28+ công cụ AI hàng đầu đã được cấu hình đầy đủ thông tin chuẩn SEO, tính năng, ưu nhược điểm và mô hình giá. Bạn có thể đặt lại dữ liệu bất cứ khi nào.
              </p>

              <button
                onClick={handleResetSeedData}
                className="px-5 py-2.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-colors"
              >
                Đặt lại 28+ Seed AI Tools gốc
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-2">Chính sách Minh bạch Tiếp thị Liên kết</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tất cả các chuyển hướng qua route <code>/go/:slug</code> tự động ghi nhận referrer, timestamp và mã định danh chiến dịch mà không lưu trữ dữ liệu nhạy cảm của người dùng.
              </p>
        {/* TAB 4: PLUGINS & EXTERNAL TOOLS */}
        {activeTab === 'plugins' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <div>
                <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                  <Puzzle className="w-5 h-5 text-emerald-400" />
                  <span>Quản lý Plugins & Công Cụ Bên Ngoài</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Tạo thêm và quản lý các Plugin nhúng (iframe, affiliate link, script, widget) kết nối các công cụ AI mở rộng bên ngoài.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingPlugin(null);
                  setPluginFormData({
                    name: '',
                    slug: '',
                    description: '',
                    icon_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
                    badge_text: 'HOT AI',
                    type: 'iframe',
                    external_url: 'https://',
                    embed_code: '',
                    category: 'office',
                    status: 'active'
                  });
                  setIsAddPluginModalOpen(true);
                }}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 transition-all whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm Plugin Mới</span>
              </button>
            </div>

            {/* Plugins Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plugins.map((plugin) => (
                <div key={plugin.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={plugin.icon_url} alt={plugin.name} className="w-10 h-10 rounded-xl object-cover border border-slate-800" />
                        <div>
                          <h4 className="font-bold text-white text-sm">{plugin.name}</h4>
                          <span className="text-[10px] text-slate-400 font-mono">/{plugin.slug}</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {plugin.badge_text || 'PLUGIN'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 mb-4">{plugin.description}</p>

                    <div className="space-y-1.5 text-[11px] bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 mb-4">
                      <div className="flex justify-between text-slate-400">
                        <span>Loại Plugin:</span>
                        <strong className="text-indigo-400 capitalize">{plugin.type}</strong>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Danh mục:</span>
                        <strong className="text-slate-300">{plugin.category}</strong>
                      </div>
                      <div className="flex justify-between text-slate-400 truncate">
                        <span>URL ngoài:</span>
                        <a href={plugin.external_url} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline max-w-[160px] truncate">
                          {plugin.external_url}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${plugin.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                      {plugin.status === 'active' ? '● Hoạt động' : 'Tắt'}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingPlugin(plugin);
                          setPluginFormData(plugin);
                          setIsAddPluginModalOpen(true);
                        }}
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                        title="Sửa Plugin"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePlugin(plugin.id, plugin.name)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800"
                        title="Xóa Plugin"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ADD / EDIT PLUGIN MODAL */}
      {isAddPluginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Puzzle className="w-5 h-5 text-emerald-400" />
                <span>{editingPlugin ? `Sửa Plugin: ${editingPlugin.name}` : 'Thêm Plugin / Công Cụ Ngoài Mới'}</span>
              </h3>
              <button
                onClick={() => setIsAddPluginModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePlugin} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Tên Plugin / Công cụ ngoài *</label>
                  <input
                    type="text"
                    required
                    value={pluginFormData.name || ''}
                    onChange={(e) => setPluginFormData({ ...pluginFormData, name: e.target.value })}
                    placeholder="vd: ChatGPT Plus Quick Generator"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Slug URL *</label>
                  <input
                    type="text"
                    required
                    value={pluginFormData.slug || ''}
                    onChange={(e) => setPluginFormData({ ...pluginFormData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    placeholder="chatgpt-quick-gen"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Mô tả ngắn gọn</label>
                <textarea
                  rows={2}
                  value={pluginFormData.description || ''}
                  onChange={(e) => setPluginFormData({ ...pluginFormData, description: e.target.value })}
                  placeholder="Mô tả chức năng công cụ AI nhúng hoặc liên kết ngoài..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Loại Plugin</label>
                  <select
                    value={pluginFormData.type || 'iframe'}
                    onChange={(e) => setPluginFormData({ ...pluginFormData, type: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="iframe">Nhúng Iframe</option>
                    <option value="affiliate_link">Link Tiếp Thị Liên Kết</option>
                    <option value="script">Script Tự Động</option>
                    <option value="widget">Widget Tùy Biến</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Nhãn Badge (vd: HOT, NEW, PRO)</label>
                  <input
                    type="text"
                    value={pluginFormData.badge_text || 'HOT AI'}
                    onChange={(e) => setPluginFormData({ ...pluginFormData, badge_text: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Đường dẫn ngoài (URL Destination) *</label>
                <input
                  type="url"
                  required
                  value={pluginFormData.external_url || ''}
                  onChange={(e) => setPluginFormData({ ...pluginFormData, external_url: e.target.value })}
                  placeholder="https://chatgpt.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">URL Ảnh Icon Logo</label>
                <input
                  type="url"
                  value={pluginFormData.icon_url || ''}
                  onChange={(e) => setPluginFormData({ ...pluginFormData, icon_url: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddPluginModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Lưu Plugin</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* ADD / EDIT TOOL MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <h3 className="text-lg font-bold text-white">
                {editingTool ? `Sửa công cụ: ${editingTool.name}` : 'Thêm công cụ AI mới'}
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTool} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Tên công cụ *</label>
                  <input
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Slug URL (vd: elevenlabs) *</label>
                  <input
                    type="text"
                    required
                    value={formData.slug || ''}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Tagline ngắn gọn</label>
                <input
                  type="text"
                  value={formData.tagline || ''}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="Khẩu hiệu 1 câu nổi bật"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Mô tả ngắn</label>
                <textarea
                  rows={2}
                  value={formData.short_description || ''}
                  onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Mô tả chi tiết (Tool này dùng để làm gì?)</label>
                <textarea
                  rows={4}
                  value={formData.full_description || ''}
                  onChange={(e) => setFormData({ ...formData, full_description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Logo URL (Ảnh đại diện)</label>
                  <input
                    type="url"
                    value={formData.logo_url || ''}
                    onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Website chính thức</label>
                  <input
                    type="url"
                    value={formData.official_url || ''}
                    onChange={(e) => setFormData({ ...formData, official_url: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Affiliate Config */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Cấu hình Link Tiếp thị liên kết (Affiliate)</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.affiliate_enabled || false}
                      onChange={(e) => setFormData({ ...formData, affiliate_enabled: e.target.checked })}
                      className="rounded bg-slate-900 border-slate-700 text-indigo-600"
                    />
                    <span className="font-semibold text-slate-300">Bật Affiliate Link</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Affiliate URL</label>
                    <input
                      type="url"
                      value={formData.affiliate_url || ''}
                      onChange={(e) => setFormData({ ...formData, affiliate_url: e.target.value })}
                      placeholder="https://tool.com/?ref=aitoolshub"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Mức hoa hồng</label>
                    <input
                      type="text"
                      value={formData.affiliate_commission || ''}
                      onChange={(e) => setFormData({ ...formData, affiliate_commission: e.target.value })}
                      placeholder="vd: 20% recurring"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing Config */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Mô hình giá</label>
                  <select
                    value={formData.pricing_type || 'Freemium'}
                    onChange={(e) => setFormData({ ...formData, pricing_type: e.target.value as PricingType })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Free">Free</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Paid">Paid</option>
                    <option value="Free Trial">Free Trial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Giá khởi điểm</label>
                  <input
                    type="text"
                    value={formData.starting_price || ''}
                    onChange={(e) => setFormData({ ...formData, starting_price: e.target.value })}
                    placeholder="vd: $0/tháng (Gói Pro $20)"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Đánh giá (1-5)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={formData.rating || 4.8}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.free_plan || false}
                    onChange={(e) => setFormData({ ...formData, free_plan: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-700 text-emerald-600"
                  />
                  <span className="font-semibold text-slate-300">Có gói Free</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured || false}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-700 text-purple-600"
                  />
                  <span className="font-semibold text-slate-300">Nổi bật (Featured)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.recommended || false}
                    onChange={(e) => setFormData({ ...formData, recommended: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-700 text-amber-600"
                  />
                  <span className="font-semibold text-slate-300">Khuyên dùng (Recommended)</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Lưu thông tin</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
