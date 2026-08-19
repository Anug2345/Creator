import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  DollarSign,
  CheckCircle2,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const EarningsCalculator: React.FC<{ onClaimRateCard: () => void }> = ({
  onClaimRateCard,
}) => {
  const [followers, setFollowers] = useState<number>(45000);
  const [videosPerWeek, setVideosPerWeek] = useState<number>(3);
  const [platform, setPlatform] = useState<'all' | 'tiktok' | 'instagram' | 'youtube'>('all');

  // Realistic calculation formula for African / emerging creator market
  // Base rate per video based on follower tier + multiplier for platform
  const getBaseRatePerVideo = (count: number) => {
    if (count < 15000) return 45000;
    if (count < 50000) return 120000;
    if (count < 150000) return 250000;
    if (count < 500000) return 480000;
    return 850000;
  };

  const platformMultiplier = platform === 'youtube' ? 1.4 : platform === 'all' ? 1.25 : 1.0;
  const ratePerVideo = Math.round(getBaseRatePerVideo(followers) * platformMultiplier);
  const monthlyVideos = videosPerWeek * 4;
  const monthlyEarningsNGN = ratePerVideo * monthlyVideos;
  const monthlyEarningsUSD = Math.round(monthlyEarningsNGN / 1520);
  const annualEarningsNGN = monthlyEarningsNGN * 12;

  const getTier = (count: number) => {
    if (count < 15000) return { name: 'Rising Star', color: 'text-amber-400', badge: 'Tier 1' };
    if (count < 50000) return { name: 'Verified Creator', color: 'text-cyan-400', badge: 'Tier 2' };
    if (count < 200000) return { name: 'Pro Creator', color: 'text-emerald-400', badge: 'Tier 3' };
    return { name: 'Elite Icon', color: 'text-purple-400', badge: 'Tier 4 VIP' };
  };

  const tier = getTier(followers);

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#00F0FF', '#F59E0B'],
    });
    onClaimRateCard();
  };

  return (
    <section id="calculator" className="relative py-20 lg:py-28 bg-[#090C12] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Rate Card Simulator
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Earning Potential
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4">
            See how much you can earn every month with guaranteed escrow campaigns on Creators Rewards.
          </p>
        </div>

        {/* CALCULATOR INTERFACE */}
        <div className="gsap-scale-reveal max-w-5xl mx-auto rounded-3xl bg-[#0F131C] border border-white/10 p-4 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
            
            {/* LEFT: SLIDERS & CONTROLS */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Platform Selector */}
              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 tracking-wider mb-2.5">
                  Primary Content Platform
                </label>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {[
                    { id: 'all', label: 'All-In-One' },
                    { id: 'tiktok', label: 'TikTok' },
                    { id: 'instagram', label: 'Instagram' },
                    { id: 'youtube', label: 'YouTube' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id as any)}
                      className={`py-2 px-1 rounded-xl text-[11px] sm:text-xs font-semibold transition-all text-center truncate ${
                        platform === p.id
                          ? 'bg-emerald-400 text-black shadow-md shadow-emerald-500/20'
                          : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Follower Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] sm:text-xs uppercase font-bold text-neutral-400 tracking-wider">
                    Total Follower Reach
                  </label>
                  <span className="font-mono-numbers text-base sm:text-lg font-bold text-white">
                    {followers.toLocaleString()} <span className="text-[11px] sm:text-xs text-neutral-400 font-normal">Followers</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={followers}
                  onChange={(e) => setFollowers(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-neutral-500 mt-1 font-mono">
                  <span>5K</span>
                  <span>100K</span>
                  <span>250K</span>
                  <span>500K+</span>
                </div>
              </div>

              {/* Video Deliverables Frequency */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] sm:text-xs uppercase font-bold text-neutral-400 tracking-wider">
                    Content Deliverables Per Week
                  </label>
                  <span className="font-mono-numbers text-base sm:text-lg font-bold text-white">
                    {videosPerWeek} <span className="text-[11px] sm:text-xs text-neutral-400 font-normal">Videos / Wk</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={8}
                  step={1}
                  value={videosPerWeek}
                  onChange={(e) => setVideosPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-neutral-500 mt-1 font-mono">
                  <span>1 Video/wk</span>
                  <span>4 Videos/wk</span>
                  <span>8 Videos/wk</span>
                </div>
              </div>

              {/* Perks Checklist */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[11px] sm:text-xs font-semibold text-neutral-300 mb-1">
                  What's included with your Creator Tier:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instant Direct Bank Payouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Automated Media Kit Hosting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Pre-Funded Escrow Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero Deductions on Base Briefs</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: REAL-TIME OUTPUT CARD */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-b from-[#141A26] to-[#0D111A] border border-emerald-500/30 p-4 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Tier Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Projected Tier Status
                  </span>
                  <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold bg-white/5 border border-white/10 ${tier.color}`}>
                    {tier.name}
                  </span>
                </div>

                {/* Estimated Monthly Earnings */}
                <div className="mb-4 sm:mb-6">
                  <div className="text-[10px] sm:text-xs text-neutral-400 uppercase font-semibold mb-1">
                    Estimated Monthly Earnings
                  </div>
                  <div className="font-mono-numbers text-2xl sm:text-4xl font-extrabold text-white">
                    ₦{monthlyEarningsNGN.toLocaleString()}
                  </div>
                  <div className="text-[11px] sm:text-xs text-emerald-400 font-medium mt-0.5">
                    ≈ ${monthlyEarningsUSD.toLocaleString()} USD / month
                  </div>
                </div>

                {/* Annual Projection & Rate per Brief */}
                <div className="space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/10 mb-4 sm:mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Rate Per UGC Video</span>
                    <span className="font-mono-numbers font-bold text-white text-xs sm:text-sm">
                      ₦{ratePerVideo.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Annual Earning Potential</span>
                    <span className="font-mono-numbers font-bold text-emerald-400 text-xs sm:text-sm">
                      ₦{annualEarningsNGN.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Monthly Deliverables</span>
                    <span className="font-mono-numbers font-bold text-white text-xs">
                      {monthlyVideos} Sponsored UGCs
                    </span>
                  </div>
                </div>

                {/* Claim Rate Card CTA */}
                <button
                  onClick={handleCelebrate}
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-black font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock In My Rate Card</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] sm:text-[11px] text-center text-neutral-400 mt-2.5">
                  Free instant account setup • No upfront costs
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
