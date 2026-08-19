import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 lg:py-28 bg-[#06080C] overflow-hidden">
      {/* Radial lighting background */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-gradient opacity-30 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5" />
            Real Creator Stories
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by 48,000+ Creators Across Africa
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4">
            See how creators transformed their social reach into predictable, escrow-secured monthly income.
          </p>
        </div>

        {/* FEATURED STORY CARD & CAROUSEL */}
        <div className="gsap-scale-reveal max-w-4xl mx-auto">
          <div className="rounded-3xl bg-[#0D1017] border border-white/10 p-5 sm:p-10 lg:p-12 shadow-2xl relative">
            
            {/* Rating Stars & Verification */}
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-neutral-300">5.0 Verified Review</span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Creator Payout</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-2xl font-medium text-white leading-relaxed mb-6 sm:mb-8">
              "{current.quote}"
            </blockquote>

            {/* Creator Bio & Earnings Growth Metric */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover ring-2 ring-emerald-400/40"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                    {current.name}
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400">{current.category} • {current.handle}</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                <div className="text-left sm:text-right">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Monthly Income</div>
                  <div className="font-mono-numbers text-base sm:text-lg font-bold text-emerald-400">{current.monthlyEarnings}</div>
                  <div className="text-[10px] sm:text-[11px] text-cyan-300 font-medium">{current.earningsGrowth} YoY Growth</div>
                </div>

                {/* Carousel Arrows */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                    aria-label="Previous story"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                    aria-label="Next story"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
