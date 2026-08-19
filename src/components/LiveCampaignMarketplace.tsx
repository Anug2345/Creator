import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Users, 
  Zap, 
  Filter, 
  CheckCircle2, 
  TrendingUp,
  Tag
} from 'lucide-react';
import { CAMPAIGNS } from '../data/mockData';
import { Campaign } from '../types';

interface LiveCampaignMarketplaceProps {
  onSelectCampaign: (campaign: Campaign) => void;
  onOpenBrandBrief: () => void;
}

export const LiveCampaignMarketplace: React.FC<LiveCampaignMarketplaceProps> = ({
  onSelectCampaign,
  onOpenBrandBrief,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'FinTech', 'Music & Audio', 'Food & Lifestyle', 'Finance', 'Mobility', 'Web3 & Tech'];

  const filteredCampaigns = selectedCategory === 'All'
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(c.category.toLowerCase()));

  return (
    <section id="campaigns" className="relative py-20 lg:py-28 bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Live Brand Briefs
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Active Creator Campaigns
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Verified brands with pre-funded escrow ready to book creators today. Apply with one click using your connected profile.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBrandBrief}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-white transition-all hover:border-white/20 whitespace-nowrap"
            >
              Post a Brand Campaign →
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="gsap-reveal flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-400 text-black shadow-md shadow-emerald-500/20'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CAMPAIGNS GRID */}
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((camp) => (
            <div
              key={camp.id}
              onClick={() => onSelectCampaign(camp)}
              className="cursor-pointer group relative rounded-2xl bg-[#0D1017] border border-white/8 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {camp.featured && (
                <div className="absolute -top-2.5 right-6 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  Featured Match
                </div>
              )}

              <div>
                {/* Brand and Category Row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                      {camp.brandLogo}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                        {camp.brand}
                      </h4>
                      <span className="text-[11px] text-neutral-400">{camp.category}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                    <Clock className="w-3 h-3" /> {camp.deadline}
                  </span>
                </div>

                {/* Campaign Title */}
                <h3 className="font-bold text-base text-white mb-2 line-clamp-2 leading-snug">
                  {camp.title}
                </h3>

                <p className="text-xs text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                  {camp.description}
                </p>

                {/* Platforms & Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {camp.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-medium uppercase text-neutral-300 tracking-wider"
                    >
                      {p}
                    </span>
                  ))}
                  {camp.tags.slice(0, 1).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] font-medium text-emerald-400 border border-emerald-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Pool & Apply Button */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Total Escrow</span>
                    <div className="font-mono-numbers font-extrabold text-sm text-white">
                      {camp.rewardPool}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Per Creator</span>
                    <div className="font-mono-numbers font-bold text-sm text-emerald-400">
                      {camp.payoutPerCreator}
                    </div>
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-emerald-400 group-hover:bg-emerald-400 hover:text-black group-hover:text-black text-neutral-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5">
                  <span>View Details & Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
