import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Building2,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { STATS, BRAND_LOGOS } from '../data/mockData';

export const SocialProof: React.FC = () => {
  const [animatedPayout, setAnimatedPayout] = useState(450);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedPayout((prev) => {
        if (prev < 485) return prev + 1;
        return 485;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 lg:py-16 border-y border-white/5 bg-[#080B10]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER / TRUST BANNER */}
        <div className="gsap-reveal flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              VERIFIED ECOSYSTEM PERFORMANCE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Powering the next generation of African creators & global brands
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Audited & NDPR Certified Payouts</span>
          </div>
        </div>

        {/* 4 CORE STATS TILES */}
        <div className="gsap-stagger grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-12">
          
          {/* Stat 1 */}
          <div className="p-3.5 sm:p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider truncate">
                  Disbursed
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                  ₦
                </div>
              </div>
              <div className="font-mono-numbers text-xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                ₦{animatedPayout}M+
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-neutral-400 mt-2 leading-relaxed">
              $320,000+ USD directly to creator bank accounts
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-3.5 sm:p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider truncate">
                  Creators
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="font-mono-numbers text-xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                48,500+
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-neutral-400 mt-2 leading-relaxed">
              Active across TikTok, Instagram, YouTube & X
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-3.5 sm:p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider truncate">
                  Campaigns
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="font-mono-numbers text-xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                2,100+
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-neutral-400 mt-2 leading-relaxed">
              Completed UGC challenges, reels & reviews
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-3.5 sm:p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider truncate">
                  Clearance
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="font-mono-numbers text-xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                &lt; 45 Secs
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-neutral-400 mt-2 leading-relaxed">
              Automated escrow release into local banks
            </p>
          </div>

        </div>

        {/* BRAND PARTNER LOGO MARQUEE */}
        <div>
          <p className="text-center text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">
            TRUSTED BY FORWARD-THINKING BRANDS & AGENCIES
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {BRAND_LOGOS.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all group"
              >
                <span className="font-bold text-sm text-neutral-300 group-hover:text-white transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-neutral-500 mt-0.5 font-medium">
                  {brand.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
