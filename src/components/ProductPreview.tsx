import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  ShieldCheck, 
  Wallet, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Sparkles, 
  DollarSign,
  Users,
  Eye,
  Clock,
  ChevronRight,
  Download,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProductPreview: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const [activeTab, setActiveTab] = useState<'creator' | 'brand' | 'analytics'>('creator');
  const [simulatedPayoutStatus, setSimulatedPayoutStatus] = useState<string>('Ready for Instant Cashout');
  const [isCashoutProcessed, setIsCashoutProcessed] = useState<boolean>(false);
  const [approvedSubmissionId, setApprovedSubmissionId] = useState<string | null>(null);

  const handleSimulateCashout = () => {
    setIsCashoutProcessed(true);
    setSimulatedPayoutStatus('₦742,500 Sent to GTBank • Ref #CR-88291');
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#10B981', '#00F0FF', '#F59E0B'],
    });
  };

  const handleApproveBrandSubmission = (id: string) => {
    setApprovedSubmissionId(id);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="product-preview" className="relative py-20 lg:py-28 bg-[#06080C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-radial-gradient opacity-30 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Interactive Platform Experience
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for High-Velocity Creator Operations
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4">
            Experience the unified OS that bridges creator payouts, brand briefs, and automated performance tracking.
          </p>
        </div>

        {/* INTERACTIVE TAB SWITCHER */}
        <div className="gsap-reveal flex items-center justify-center mb-8">
          <div className="flex p-1 sm:p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md max-w-md w-full">
            <button
              onClick={() => setActiveTab('creator')}
              className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl text-[11px] sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === 'creator'
                  ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Creator Hub</span>
            </button>

            <button
              onClick={() => setActiveTab('brand')}
              className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl text-[11px] sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === 'brand'
                  ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Brand Portal</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl text-[11px] sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === 'analytics'
                  ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Trust Engine</span>
            </button>
          </div>
        </div>

        {/* REALISTIC SAAS UI CONTAINER */}
        <div className="gsap-scale-reveal rounded-3xl bg-[#0B0E15] border border-white/12 shadow-2xl overflow-hidden">
          
          {/* Top Browser / App Window Bar */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#0E121B] border-b border-white/8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-[11px] sm:text-xs text-neutral-400 hidden sm:inline">
                https://app.creatorsrewards.net/dashboard
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Environment
              </span>
            </div>
          </div>

          {/* TAB 1: CREATOR HUB DASHBOARD */}
          {activeTab === 'creator' && (
            <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
              
              {/* Wallet & Stats Overview Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                
                {/* Available Balance Tile */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#131926] to-[#0D121B] border border-emerald-500/30 relative">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span>Available Escrow Balance</span>
                    <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                      Instant Clearance
                    </span>
                  </div>
                  <div className="font-mono-numbers text-2xl sm:text-3xl font-extrabold text-white">
                    {isCashoutProcessed ? '₦0.00' : '₦742,500.00'}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-neutral-400">GTBank •••• 4912</span>
                    <button
                      onClick={handleSimulateCashout}
                      disabled={isCashoutProcessed}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isCashoutProcessed
                          ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                          : 'bg-emerald-400 text-black hover:bg-emerald-300 shadow-md shadow-emerald-500/20'
                      }`}
                    >
                      {isCashoutProcessed ? 'Cleared' : 'Withdraw Now'}
                    </button>
                  </div>
                </div>

                {/* Lifetime Earnings Tile */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs text-neutral-400 mb-1">Lifetime Total Earned</div>
                  <div className="font-mono-numbers text-2xl sm:text-3xl font-extrabold text-white">
                    ₦14,850,000
                  </div>
                  <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +₦1.2M earned this month
                  </div>
                </div>

                {/* Creator Trust Score Tile */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span>Trust & Reliability Score</span>
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="font-mono-numbers text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    99.8%
                  </div>
                  <div className="text-xs text-neutral-400 mt-2">
                    Tier 4 VIP Access • Zero escrow delays
                  </div>
                </div>

              </div>

              {/* Active Deliverables & Campaign Queue */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                  <h3 className="font-bold text-sm sm:text-base text-white">Active Campaign Deliverables</h3>
                  <span className="text-[11px] sm:text-xs text-neutral-400">3 In Progress • 1 Approved</span>
                </div>

                <div className="space-y-3">
                  
                  {/* Item 1 */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/8 hover:border-white/15 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold shrink-0">
                        🎵
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-white truncate">Spotify Africa — Sound Reel</h4>
                        <p className="text-[11px] sm:text-xs text-neutral-400">45s Vertical Video • Due in 2 days</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <span className="font-mono-numbers font-bold text-xs sm:text-sm text-white">₦350,000</span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-[11px] font-semibold">
                        In Progress
                      </span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-emerald-500/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                        🏦
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-white truncate">Kuda Bank — Zero Fee Showcase</h4>
                        <p className="text-[11px] sm:text-xs text-neutral-400">Verified • 185K Views Tracked</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <span className="font-mono-numbers font-bold text-xs sm:text-sm text-emerald-400">₦392,500</span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Payout Ready
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Instant Notification Strip */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center justify-between">
                <span className="font-medium flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{simulatedPayoutStatus}</span>
                </span>
                <span className="text-neutral-400 text-[10px] sm:text-[11px] shrink-0 ml-2">Live</span>
              </div>

            </div>
          )}

          {/* TAB 2: BRAND PORTAL */}
          {activeTab === 'brand' && (
            <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
              
              {/* Brand Top KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs text-neutral-400">Active Creator Submissions</div>
                  <div className="font-mono-numbers text-xl sm:text-2xl font-bold text-white mt-1">28 Videos</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs text-neutral-400">Escrow Reserved Balance</div>
                  <div className="font-mono-numbers text-xl sm:text-2xl font-bold text-emerald-400 mt-1">₦4,500,000</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs text-neutral-400">Total Campaign Impressions</div>
                  <div className="font-mono-numbers text-xl sm:text-2xl font-bold text-cyan-400 mt-1">2.4M Views</div>
                </div>
              </div>

              {/* Creator Submissions Queue */}
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white mb-3">Pending Creator Submissions Review</h3>
                <div className="space-y-3">
                  
                  {[
                    { id: 'sub-1', name: 'Tobi Adebayo', handle: '@tobi_techbytes', video: 'FinTech App Speed Test', views: '142K Views', reward: '₦350,000' },
                    { id: 'sub-2', name: 'Amaka Eze', handle: '@amaka_glow', video: 'Unboxing Payday Routine', views: '98K Views', reward: '₦220,000' },
                  ].map((sub) => {
                    const isApproved = approvedSubmissionId === sub.id;
                    return (
                      <div
                        key={sub.id}
                        className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 fill-emerald-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-xs sm:text-sm text-white">{sub.name}</h4>
                              <span className="text-[11px] sm:text-xs text-neutral-400">{sub.handle}</span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-neutral-300">{sub.video} • <strong className="text-cyan-400">{sub.views}</strong></p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                          <span className="font-mono-numbers font-bold text-xs sm:text-sm text-white">{sub.reward}</span>
                          <button
                            onClick={() => handleApproveBrandSubmission(sub.id)}
                            disabled={isApproved}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              isApproved
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-emerald-400 text-black hover:bg-emerald-300'
                            }`}
                          >
                            {isApproved ? '✓ Payout Released' : 'Approve & Release Escrow'}
                          </button>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>

            </div>
          )}

          {/* TAB 3: TRUST ENGINE */}
          {activeTab === 'analytics' && (
            <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs text-neutral-400">Audience Authenticity Filter</div>
                  <div className="font-mono-numbers text-xl sm:text-2xl font-bold text-emerald-400 mt-1">99.4% Human</div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 mt-1">Bot-traffic & fake followers purged</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs text-neutral-400">On-Time Deliverable Rate</div>
                  <div className="font-mono-numbers text-xl sm:text-2xl font-bold text-white mt-1">98.9%</div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 mt-1">Milestones tracked automatically</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs text-neutral-400">NDPR Data Privacy Status</div>
                  <div className="font-mono-numbers text-xl sm:text-2xl font-bold text-cyan-300 mt-1">100% Certified</div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 mt-1">Full compliance & encrypted token vault</p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/8 text-sm text-neutral-300 space-y-2.5 sm:space-y-3">
                <h4 className="font-bold text-white text-sm sm:text-base">How Creators Rewards Enforces 100% Trust</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every creator's channel metrics are verified directly via official platform OAuth connections. We monitor engagement retention, comment authenticity, and conversion track-backs so brands get guaranteed viral impact and creators get paid unconditionally for their work.
                </p>
              </div>
            </div>
          )}

          {/* Dashboard Bottom CTA Bar */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#0E121B] border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-neutral-400 text-center sm:text-left">
              Ready to automate your creator monetization workflow?
            </span>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Launch Your Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
