import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Lock
} from 'lucide-react';

interface FinalCTAProps {
  onOpenAuth: (role: 'creator' | 'brand') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAuth }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#05070B] overflow-hidden">
      {/* Intense atmospheric radial backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[550px] bg-radial-gradient opacity-60 pointer-events-none blur-3xl" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="gsap-scale-reveal max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4" />
          Join The Future of Content Monetization
        </div>

        {/* Large Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
          Your creativity is currency.<br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Claim what you've earned.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 48,000+ top Nigerian and African creators getting verified brand campaigns with guaranteed escrow and instant direct-to-bank payouts.
        </p>

        {/* Dual High-Impact Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => onOpenAuth('creator')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Join as Creator</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenAuth('brand')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-all"
          >
            <span>Launch a Brand Campaign</span>
          </button>
        </div>

        {/* Trust Guarantees */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-neutral-400 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant Free Registration</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Escrow Security</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Naira & USDT Transfers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
