export type PricingType = 'Free' | 'Freemium' | 'Paid' | 'Free Trial';

export type TargetUser = 'office' | 'designer' | 'creator' | 'voice' | 'developer';

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description?: string;
  features: string[];
  isPopular?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  short_description: string;
  full_description: string;
  logo_url: string;
  badge_text?: string;
  category_slugs: string[];
  target_users: TargetUser[];
  features: string[];
  official_url: string;
  affiliate_url: string;
  affiliate_enabled: boolean;
  affiliate_commission: string;
  affiliate_cookie_days: number;
  affiliate_program_url: string;
  pricing_type: PricingType;
  starting_price: string;
  free_plan: boolean;
  rating: number;
  review_count: number;
  featured: boolean;
  recommended: boolean;
  status: 'active' | 'disabled';
  pros: string[];
  cons: string[];
  pricing_plans: PricingPlan[];
  clicks_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  colorGradient: string;
  accentColor: string;
  targetUserKey: TargetUser;
  popularTasks: string[];
}

export interface AffiliateClick {
  id: string;
  tool_id: string;
  tool_slug: string;
  tool_name: string;
  created_at: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  user_agent?: string;
}

export interface AnalyticsSummary {
  totalTools: number;
  activeTools: number;
  affiliateTools: number;
  totalClicks: number;
  clicks7Days: number;
  clicks30Days: number;
  topClickedTools: {
    tool_id: string;
    tool_name: string;
    slug: string;
    clicks: number;
    commission: string;
  }[];
  clicksByDay: {
    date: string;
    clicks: number;
  }[];
  clicksBySource: {
    source: string;
    count: number;
  }[];
  recentClicks: AffiliateClick[];
}

export interface QuizState {
  step: number;
  profession: TargetUser | null;
  taskGoal: string;
  pricingPreference: 'all' | 'free' | 'freemium' | 'paid_ok';
  priority: 'easy' | 'features' | 'budget' | 'pro';
}

export interface RecommendationResult {
  tool: Tool;
  matchScore: number;
  reasons: string[];
}

export interface PluginTool {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon_url: string;
  badge_text?: string;
  type: 'iframe' | 'affiliate_link' | 'script' | 'widget';
  external_url: string;
  embed_code?: string;
  category: string;
  status: 'active' | 'disabled';
  created_at: string;
}

