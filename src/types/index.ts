export type PlatformType = 'tiktok' | 'instagram' | 'youtube' | 'twitter' | 'snapchat';

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  coverImage: string;
  category: string;
  followers: string;
  engagementRate: string;
  avgViews: string;
  totalEarned: string;
  trustScore: number;
  tier: 'Rising Star' | 'Verified Creator' | 'Pro Creator' | 'Elite Icon';
  platforms: PlatformType[];
  recentBrands: string[];
  bio: string;
  sampleVideoTitle: string;
  ratePerVideo: string;
}

export interface Campaign {
  id: string;
  brand: string;
  brandLogo: string;
  title: string;
  category: string;
  rewardPool: string;
  payoutPerCreator: string;
  spotsLeft: number;
  totalSpots: number;
  deadline: string;
  platforms: PlatformType[];
  description: string;
  requirements: string[];
  tags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  category: string;
  platform: PlatformType;
  quote: string;
  monthlyEarnings: string;
  earningsGrowth: string;
  campaignsCompleted: number;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'creators' | 'brands' | 'payouts' | 'trust';
}

export interface LiveActivity {
  id: string;
  creatorName: string;
  creatorAvatar: string;
  amount: string;
  brand: string;
  campaignName: string;
  timeAgo: string;
  currency: string;
}
