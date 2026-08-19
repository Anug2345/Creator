import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { FAQS } from '../data/mockData';
import { FAQItem } from '../types';

export const FAQ: React.FC<{ onContactSupport: () => void }> = ({ onContactSupport }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'creators', label: 'For Creators' },
    { id: 'brands', label: 'For Brands' },
    { id: 'payouts', label: 'Payouts & Banking' },
    { id: 'trust', label: 'Trust & NDPR' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#080B10] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-neutral-400 mt-3">
            Everything you need to know about campaigns, instant bank transfers, and verification.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="gsap-reveal flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? 'bg-emerald-400 text-black shadow-md shadow-emerald-500/20'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* ACCORDION LIST */}
        <div className="gsap-stagger space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.04] border-emerald-500/30 shadow-lg'
                    : 'bg-white/[0.015] border-white/8 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-emerald-400 text-black rotate-180'
                        : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* STILL HAVE QUESTIONS STRIP */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Have a specific partnership question?</h4>
              <p className="text-xs text-neutral-400">Our creator relations & enterprise brand team is online 24/7.</p>
            </div>
          </div>

          <button
            onClick={onContactSupport}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors whitespace-nowrap"
          >
            Contact Creator Support
          </button>
        </div>

      </div>
    </section>
  );
};
