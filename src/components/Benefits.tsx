import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Sparkles, 
  Lock, 
  TrendingUp, 
  Award, 
  Globe,
  ArrowRight
} from 'lucide-react';

export const Benefits: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const benefits = [
    {
      icon: Lock,
      title: 'Guaranteed Escrow Protection',
      description: 'Brands must deposit 100% of the campaign budget into regulated escrow before briefs go live. You never work for free or chase overdue invoices.',
      tag: 'Zero Risk',
      color: 'emerald',
    },
    {
      icon: Zap,
      title: 'Instant Direct Bank Payouts',
      description: 'The second your deliverable is verified, escrow funds are cleared straight into your Nigerian bank account or USDT wallet in under 60 seconds.',
      tag: '< 60 Secs',
      color: 'cyan',
    },
    {
      icon: Sparkles,
      title: 'AI Smart Brief Matcher',
      description: 'Stop sending cold DMs. Our neural matching engine pairs your audience profile with brands that specifically convert in your niche.',
      tag: 'Zero Cold DMs',
      color: 'purple',
    },
    {
      icon: Wallet,
      title: '0% Hidden Platform Deductions',
      description: 'What you see on the campaign card is what lands in your bank account. No surprise agency fees, no processing deductions on base rewards.',
      tag: '100% Yours',
      color: 'amber',
    },
    {
      icon: Award,
      title: 'Automated Media Kit & Trust Score',
      description: 'Build a verifiable track record with every campaign you deliver on time. High Trust Scores unlock VIP private briefs and rate multipliers.',
      tag: 'Career Growth',
      color: 'emerald',
    },
    {
      icon: ShieldCheck,
      title: 'NDPR & Data Privacy Certified',
      description: 'Full compliance with Nigeria Data Protection Regulation. Your accounts and financial tokens are protected with bank-grade encryption.',
      tag: 'Compliant',
      color: 'cyan',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#080B10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Unmatched Creator Advantage
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Creators & Brands Choose Creators Rewards
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed">
            We removed the middlemen, delayed wire transfers, and uncertain negotiations from creator monetization.
          </p>
        </div>

        {/* 6 STRUCTURED BENEFIT CARDS */}
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#0E121B] border border-white/8 hover:border-emerald-500/30 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-white/5 text-neutral-300 border border-white/10">
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/5 flex items-center text-xs font-semibold text-neutral-400 group-hover:text-emerald-400 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
