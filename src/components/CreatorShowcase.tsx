import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Eye, 
  ExternalLink,
  DollarSign
} from 'lucide-react';
import { CREATORS } from '../data/mockData';
import { Creator } from '../types';

interface CreatorShowcaseProps {
  onSelectCreator: (creator: Creator) => void;
  onOpenAuth: (role: 'creator' | 'brand') => void;
}

export const CreatorShowcase: React.FC<CreatorShowcaseProps> = ({
  onSelectCreator,
  onOpenAuth,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Lifestyle & Tech', 'Beauty & Fashion', 'Comedy & Skits', 'Food & Culinary', 'Finance & Career'];

  const filteredCreators = activeCategory === 'All'
    ? CREATORS
    : CREATORS.filter(c => c.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="creators" className="relative py-20 lg:py-28 bg-[#06080C] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="gsap-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              Verified Talent Roster
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Meet Top Earning Creators
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Authentic storytellers with verified engagement and 98%+ Trust Scores delivering high-impact ROI for brands.
            </p>
          </div>

          <button
            onClick={() => onOpenAuth('creator')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-white transition-colors self-start md:self-auto"
          >
            <span>Apply as Verified Creator</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="gsap-reveal flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-400 text-black shadow-md shadow-emerald-500/20'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CREATORS GRID */}
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              onClick={() => onSelectCreator(creator)}
              className="group cursor-pointer rounded-2xl bg-[#0D1017] border border-white/8 hover:border-emerald-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
            >
              {/* Card Cover & Avatar banner */}
              <div className="relative h-28 overflow-hidden bg-neutral-900">
                <img
                  src={creator.coverImage}
                  alt={creator.name}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1017] via-transparent to-transparent" />
                
                {/* Tier Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    {creator.tier}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 pt-0 relative flex-1 flex flex-col justify-between">
                
                {/* Floating Avatar & Trust Score */}
                <div className="flex items-end justify-between -mt-8 mb-4">
                  <div className="relative">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-4 ring-[#0D1017] shadow-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-[#0D1017]">
                      <ShieldCheck className="w-3 h-3 text-black" />
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] uppercase font-semibold text-neutral-400">Total Earned</div>
                    <div className="font-mono-numbers font-extrabold text-base text-emerald-400">
                      {creator.totalEarned}
                    </div>
                  </div>
                </div>

                {/* Name & Handle */}
                <div className="mb-3">
                  <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                    {creator.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mt-0.5">
                    <span>{creator.handle}</span>
                    <span className="text-neutral-300 font-medium">{creator.category}</span>
                  </div>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                  {creator.bio}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/8 mb-4 text-center">
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase font-semibold">Followers</div>
                    <div className="font-mono-numbers text-xs font-bold text-white mt-0.5">{creator.followers}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase font-semibold">Engagement</div>
                    <div className="font-mono-numbers text-xs font-bold text-emerald-400 mt-0.5">{creator.engagementRate}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase font-semibold">Trust Score</div>
                    <div className="font-mono-numbers text-xs font-bold text-cyan-300 mt-0.5">{creator.trustScore}%</div>
                  </div>
                </div>

                {/* Recent Brand Collabs */}
                <div className="mb-4">
                  <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-1.5">
                    Recent Brand Partners
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {creator.recentBrands.map((brand, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-neutral-300"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-emerald-400 group-hover:bg-emerald-400 hover:text-black group-hover:text-black text-neutral-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 mt-auto">
                  <span>View Verified Media Kit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
