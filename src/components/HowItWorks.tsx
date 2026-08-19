import React, { useState } from 'react';
import { 
  Link2, 
  Sparkles, 
  Video, 
  Wallet, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Share2, 
  Smartphone,
  ChevronRight
} from 'lucide-react';

export const HowItWorks: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Connect & Verify Channels',
      tag: '1-Click OAuth',
      description: 'Link your TikTok, Instagram, YouTube, or X account securely. Our system verifies your authentic engagement rate, audience demographics, and calculates your initial Trust Score.',
      icon: Link2,
      color: 'emerald',
      preview: {
        heading: 'Account Verification Complete',
        sub: '@chidera.visuals • TikTok & Instagram Connected',
        metric1Label: 'Audience Authenticity',
        metric1Value: '99.4%',
        metric2Label: 'Verified Engagement',
        metric2Value: '8.4%',
        badge: 'Verified Level 3 Creator',
      },
    },
    {
      step: '02',
      title: 'Match With Brand Campaigns',
      tag: 'AI Brief Matcher',
      description: 'No pitching fatigue. Our smart matching algorithm pairs you with verified brands (Fintech, Lifestyle, Food, Tech) looking for your exact audience and aesthetic.',
      icon: Sparkles,
      color: 'cyan',
      preview: {
        heading: 'AI Campaign Match Ready',
        sub: '3 Premium briefs curated for your profile',
        metric1Label: 'Matching Accuracy',
        metric1Value: '98.2%',
        metric2Label: 'Guaranteed Reward',
        metric2Value: '₦350,000',
        badge: 'Kuda Bank UGC Challenge',
      },
    },
    {
      step: '03',
      title: 'Create & Submit UGC Deliverable',
      tag: 'Automated Tracking',
      description: 'Film authentic content following the brand brief guidelines. Submit your video or live link through your creator portal. Our system tracks performance and views in real-time.',
      icon: Video,
      color: 'purple',
      preview: {
        heading: 'Deliverable Under Review',
        sub: 'Video link submitted • 185K Views Tracked',
        metric1Label: 'Brief Compliance',
        metric1Value: '100%',
        metric2Label: 'Delivery Time',
        metric2Value: '18h ahead of deadline',
        badge: 'Brand Approved',
      },
    },
    {
      step: '04',
      title: 'Instant Escrow Cashout',
      tag: 'Direct-To-Bank',
      description: 'The moment your deliverable is approved, pre-funded escrow is instantly released into your Nigerian bank account via NIBSS/Paystack rails or to your USDT crypto wallet.',
      icon: Wallet,
      color: 'amber',
      preview: {
        heading: 'Escrow Disbursed Instantly',
        sub: 'Direct deposit cleared to GTBank • NGN',
        metric1Label: 'Payout Speed',
        metric1Value: '< 30 Seconds',
        metric2Label: 'Platform Cut',
        metric2Value: '₦0.00 (Zero Fee)',
        badge: 'Funds Received: ₦350,000.00',
      },
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-gradient opacity-40 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            Seamless Monetization Journey
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Creators Rewards Works
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed">
            From connecting your social channels to seeing money land in your bank account in 4 frictionless steps.
          </p>
        </div>

        {/* 4 STEPS INTERACTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* LEFT: 4 STEPS SELECTOR */}
          <div className="gsap-stagger lg:col-span-6 space-y-3 sm:space-y-4">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white/[0.05] border-emerald-500/40 shadow-xl shadow-emerald-500/5 sm:translate-x-1'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/15 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                        isActive
                          ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-500/25'
                          : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      {item.step}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className={`font-bold text-sm sm:text-lg transition-colors ${
                          isActive ? 'text-white' : 'text-neutral-300'
                        }`}>
                          {item.title}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white/5 text-neutral-400 shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: INTERACTIVE STEP SIMULATOR PREVIEW */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#111622] to-[#0A0D14] border border-white/10 p-4 sm:p-8 shadow-2xl overflow-hidden">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs text-neutral-400">
                    Step {steps[activeStep].step} Simulator
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {steps[activeStep].tag}
                </span>
              </div>

              {/* Step Dynamic Content */}
              <div className="py-4 sm:py-6 space-y-4 sm:space-y-6">
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Active Step Preview
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold text-white">
                    {steps[activeStep].preview.heading}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    {steps[activeStep].preview.sub}
                  </p>
                </div>

                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">{steps[activeStep].preview.badge}</span>
                </div>

                {/* Metrics Breakdown */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8">
                    <div className="text-[11px] sm:text-xs text-neutral-400 mb-1">
                      {steps[activeStep].preview.metric1Label}
                    </div>
                    <div className="font-mono-numbers text-base sm:text-xl font-bold text-emerald-400">
                      {steps[activeStep].preview.metric1Value}
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8">
                    <div className="text-[11px] sm:text-xs text-neutral-400 mb-1">
                      {steps[activeStep].preview.metric2Label}
                    </div>
                    <div className="font-mono-numbers text-base sm:text-xl font-bold text-white">
                      {steps[activeStep].preview.metric2Value}
                    </div>
                  </div>
                </div>

                {/* Interactive Action inside step preview */}
                <div className="pt-2">
                  <button
                    onClick={onGetStarted}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <span>Try This Step with Your Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Step indicator pagination dots */}
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/10">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === i ? 'w-8 bg-emerald-400' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
