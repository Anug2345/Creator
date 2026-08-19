import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  Heart, 
  Play, 
  DollarSign,
  Download
} from 'lucide-react';
import { Creator } from '../../types';
import confetti from 'canvas-confetti';

interface MediaKitModalProps {
  creator: Creator | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MediaKitModal: React.FC<MediaKitModalProps> = ({
  creator,
  isOpen,
  onClose,
}) => {
  const [invited, setInvited] = useState(false);

  if (!isOpen || !creator) return null;

  const handleInvite = () => {
    setInvited(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  const handleResetAndClose = () => {
    setInvited(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#0D1017] border border-white/12 p-5 sm:p-8 shadow-2xl overflow-y-auto max-h-[92dvh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cover & Avatar Header */}
        <div className="relative -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 h-32 bg-neutral-800 overflow-hidden mb-6">
          <img
            src={creator.coverImage}
            alt={creator.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1017] via-transparent to-transparent" />
        </div>

        {/* Creator Info */}
        <div className="flex items-start justify-between gap-4 -mt-14 mb-4 relative z-10">
          <div className="flex items-end gap-3">
            <div className="relative">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-20 h-20 rounded-2xl object-cover ring-4 ring-[#0D1017] shadow-2xl"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-[#0D1017]">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white">{creator.name}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {creator.tier}
                </span>
              </div>
              <p className="text-xs text-neutral-400">{creator.handle} • {creator.category}</p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-neutral-500 uppercase font-semibold">Standard UGC Rate</span>
            <div className="font-mono-numbers text-base font-extrabold text-emerald-400">
              {creator.ratePerVideo}
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
          {creator.bio}
        </p>

        {/* 4 Core Verified Metrics */}
        <div className="grid grid-cols-4 gap-2 p-3.5 rounded-2xl bg-white/[0.03] border border-white/8 text-center mb-6">
          <div>
            <div className="text-[10px] text-neutral-500 uppercase font-semibold">Audience</div>
            <div className="font-mono-numbers text-xs sm:text-sm font-bold text-white mt-0.5">{creator.followers}</div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-500 uppercase font-semibold">Avg Views</div>
            <div className="font-mono-numbers text-xs sm:text-sm font-bold text-cyan-400 mt-0.5">{creator.avgViews}</div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-500 uppercase font-semibold">Engagement</div>
            <div className="font-mono-numbers text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">{creator.engagementRate}</div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-500 uppercase font-semibold">Trust Score</div>
            <div className="font-mono-numbers text-xs sm:text-sm font-bold text-purple-400 mt-0.5">{creator.trustScore}%</div>
          </div>
        </div>

        {/* Sample Deliverable & Recent Brands */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Play className="w-4 h-4 fill-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase font-semibold">Sample UGC Production</span>
                <h4 className="font-bold text-xs text-white">{creator.sampleVideoTitle}</h4>
              </div>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">Verified Proof</span>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase text-neutral-400 block mb-2">
              Recent Brand Partnerships
            </span>
            <div className="flex flex-wrap gap-2">
              {creator.recentBrands.map((b, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 text-xs text-neutral-300">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-white/10 flex items-center gap-3">
          <button
            onClick={handleInvite}
            disabled={invited}
            className={`flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
              invited
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-black shadow-lg shadow-emerald-500/20'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{invited ? '✓ Campaign Invite Dispatched' : `Invite ${creator.name.split(' ')[0]} to Campaign`}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
