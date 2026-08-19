import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign,
  Users,
  Video
} from 'lucide-react';
import { Campaign } from '../../types';
import confetti from 'canvas-confetti';

interface CampaignModalProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({
  campaign,
  isOpen,
  onClose,
}) => {
  const [applied, setApplied] = useState(false);
  const [deliverableLink, setDeliverableLink] = useState('');

  if (!isOpen || !campaign) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#10B981', '#00F0FF', '#F59E0B'],
    });
  };

  const handleResetAndClose = () => {
    setApplied(false);
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
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!applied ? (
          <div>
            {/* Brand Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                {campaign.brandLogo}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base text-white">{campaign.brand}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                    Verified Brand
                  </span>
                </div>
                <p className="text-xs text-neutral-400">{campaign.category} • Pre-Funded Escrow</p>
              </div>
            </div>

            {/* Campaign Title */}
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
              {campaign.title}
            </h2>

            {/* Escrow and Timeline Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/8 mb-6">
              <div>
                <div className="text-[10px] text-neutral-500 uppercase font-semibold">Total Escrow Pool</div>
                <div className="font-mono-numbers text-sm sm:text-base font-extrabold text-white mt-0.5">{campaign.rewardPool}</div>
              </div>
              <div>
                <div className="text-[10px] text-neutral-500 uppercase font-semibold">Per Creator</div>
                <div className="font-mono-numbers text-sm sm:text-base font-extrabold text-emerald-400 mt-0.5">{campaign.payoutPerCreator}</div>
              </div>
              <div>
                <div className="text-[10px] text-neutral-500 uppercase font-semibold">Deadline</div>
                <div className="font-mono-numbers text-sm sm:text-base font-extrabold text-rose-400 mt-0.5">{campaign.deadline}</div>
              </div>
            </div>

            {/* Brief Description */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300 mb-1.5">
                  Campaign Brief & Goal
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {campaign.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300 mb-2">
                  Deliverable Requirements
                </h4>
                <ul className="space-y-2 text-xs text-neutral-400">
                  {campaign.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported Platforms */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300 mb-1.5">
                  Supported Channels
                </h4>
                <div className="flex gap-2">
                  {campaign.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-semibold uppercase text-neutral-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Action */}
            <form onSubmit={handleApply} className="pt-4 border-t border-white/10 space-y-3">
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                  Optional Pitch Note / Portfolio Link
                </label>
                <input
                  type="text"
                  placeholder="e.g. tiktok.com/@yourhandle or a short note on your creative idea"
                  value={deliverableLink}
                  onChange={(e) => setDeliverableLink(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-black font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>Submit 1-Click Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Escrow funds locked by brand • Zero risk of non-payment</span>
              </div>
            </form>
          </div>
        ) : (
          /* APPLIED CONFIRMATION */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl animate-bounce">
              ✓
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white">
              Application Successfully Submitted!
            </h3>
            
            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
              {campaign.brand} has received your profile and deliverable pitch. You will receive an instant notification and escrow lock confirmation in your dashboard.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 text-xs text-left max-w-xs mx-auto space-y-1.5">
              <div className="flex justify-between text-neutral-400">
                <span>Reserved Reward:</span>
                <span className="text-emerald-400 font-bold">{campaign.payoutPerCreator}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Escrow State:</span>
                <span className="text-cyan-400 font-bold">100% Guaranteed</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs transition-colors"
            >
              Back to Campaigns
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
