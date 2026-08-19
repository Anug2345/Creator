import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  DollarSign,
  Heart,
  Eye,
  Award,
  Lock,
  ArrowUpRight
} from 'lucide-react';

interface HeroProps {
  onOpenAuth: (role: 'creator' | 'brand') => void;
  onExploreCampaigns: () => void;
  onExploreCreators: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenAuth, 
  onExploreCampaigns, 
  onExploreCreators 
}) => {
  // Simulated live view counter & engagement on the interactive card
  const [liveViews, setLiveViews] = useState(148200);
  const [liveLikes, setLiveLikes] = useState(18420);
  const [activeTab, setActiveTab] = useState<'payout' | 'campaign'>('payout');

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViews(prev => prev + Math.floor(Math.random() * 8) + 3);
      setLiveLikes(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-radial-gradient pointer-events-none blur-3xl opacity-60" />
      <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 left-[-10%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO COPY & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Live Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">NIGERIA'S #1 CREATOR MONETIZATION NETWORK</span>
              <span className="text-white/30">•</span>
              <span className="text-neutral-300">Escrow Protected</span>
            </div>

            {/* Powerful Display Headline with controlled line breaks */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Create.<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Get Discovered.
              </span><br />
              Get Rewarded.
            </h1>

            {/* Concise supporting statement */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Turn your TikTok, Instagram, and YouTube content into guaranteed cash payouts. Connect verified channels, claim high-paying brand campaigns, and receive instant direct-to-bank or USDT deposits.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenAuth('creator')}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Earning Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCampaigns}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl backdrop-blur-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Explore Live Campaigns</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <span>Instant Naira & USDT Payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span>100% Pre-funded Brand Escrow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Zap className="w-3 h-3" />
                </div>
                <span>NDPR & GDPR Compliant</span>
              </div>
            </div>

            {/* Quick Live Payout Stat Strip */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/8 backdrop-blur-md flex items-center justify-between max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                  ₦
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Total Creator Payouts Disbursed
                  </div>
                  <div className="font-mono-numbers text-base sm:text-lg font-bold text-white">
                    ₦485,250,000+ <span className="text-xs text-emerald-400 font-normal">($320K+ USD)</span>
                  </div>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                  <TrendingUp className="w-3 h-3" /> +38% MoM
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LAYERED ALIVE VISUAL ECOSYSTEM */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Creator Card */}
            <div className="relative mx-auto max-w-md rounded-2xl bg-[#0D1017] border border-white/10 p-5 shadow-2xl shadow-black/80">
              
              {/* Card Header: Creator Info & Live Trust Score */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                      alt="Chidera Okafor"
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-emerald-500/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0D1017] flex items-center justify-center">
                      <Sparkles className="w-2.5 h-2.5 text-black" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-sm text-white">Chidera Okafor</h3>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        PRO
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400">@chidera.visuals • Tech & Lifestyle</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Trust Score</div>
                  <div className="font-mono-numbers text-sm font-bold text-emerald-400 flex items-center justify-end gap-1">
                    <span>99.8%</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Video Deliverable Preview & Real-Time Stats */}
              <div className="relative my-4 rounded-xl overflow-hidden bg-neutral-900 border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=800&auto=format&fit=crop&q=80" 
                  alt="Campaign Video Deliverable"
                  className="w-full h-44 object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Live Play Badge & Campaign Title */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Kuda Bank UGC Deliverable
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-[10px] font-bold text-black uppercase tracking-wider">
                    Approved & Disbursed
                  </span>
                </div>

                {/* Bottom Video Metrics Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 font-mono-numbers text-neutral-200">
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{liveViews.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 font-mono-numbers text-neutral-200">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                      <span>{liveLikes.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 14.2% Engagement
                  </div>
                </div>
              </div>

              {/* Card Bottom: Active Payout Release Details */}
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/8 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Campaign Reward Rate</span>
                  <span className="font-mono-numbers font-bold text-white text-sm">₦350,000</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Direct Deposit Rail</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Access Bank (Instant)
                  </span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-full rounded-full" />
                </div>
              </div>

            </div>

            {/* FLOATING CARD 1: Real-time Payout Toast Notification (Top Right) */}
            <div className="absolute -top-4 sm:-top-6 right-0 sm:-right-4 lg:-right-6 bg-[#121620]/95 backdrop-blur-xl border border-emerald-500/30 rounded-xl p-2.5 sm:p-3 shadow-xl animate-float-slow max-w-[200px] sm:max-w-[240px] z-20">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  ⚡
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] text-emerald-400 font-bold uppercase tracking-wider truncate">
                    Instant Payout Cleared
                  </div>
                  <div className="font-mono-numbers text-xs sm:text-sm font-extrabold text-white">
                    +₦240,000.00
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-400 truncate">
                    Kuda UGC • 2m ago
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 2: Active Brand Campaign Match (Bottom Left) */}
            <div className="absolute -bottom-5 sm:-bottom-8 left-0 sm:-left-4 lg:-left-6 bg-[#121620]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 sm:p-3.5 shadow-2xl animate-float-reverse max-w-[210px] sm:max-w-[260px] z-20">
              <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> High Match Brief
                </span>
                <span className="text-[9px] sm:text-[10px] bg-white/10 text-neutral-300 px-1.5 py-0.2 rounded font-mono">
                  4 Spots Left
                </span>
              </div>
              <div className="font-semibold text-[11px] sm:text-xs text-white truncate">
                Spotify Afrobeats Challenge
              </div>
              <div className="flex items-center justify-between mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-white/10 text-[10px] sm:text-xs">
                <span className="text-neutral-400">Pool: <strong className="text-white font-mono">₦6.0M</strong></span>
                <span className="text-emerald-400 font-bold font-mono">₦300k/creator</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
