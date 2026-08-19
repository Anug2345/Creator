import React, { useState, useEffect } from 'react';
import { Sparkles, X, CheckCircle2, Zap } from 'lucide-react';
import { LIVE_ACTIVITIES } from '../data/mockData';

export const LivePayoutTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_ACTIVITIES.length);
        setVisible(true);
      }, 400);
    }, 6000);

    return () => clearInterval(timer);
  }, [dismissed]);

  if (dismissed) return null;

  const current = LIVE_ACTIVITIES[currentIndex];

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 max-w-xs transition-all duration-500 ease-out hidden sm:block ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0F1420]/95 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-black/80">
        <img
          src={current.creatorAvatar}
          alt={current.creatorName}
          className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500/40 shrink-0"
        />

        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
            <Zap className="w-3 h-3 text-emerald-400" />
            <span>Direct Bank Payout</span>
          </div>

          <div className="font-bold text-xs text-white truncate">
            {current.creatorName} received <strong className="font-mono-numbers text-emerald-400">{current.amount}</strong>
          </div>

          <div className="text-[10px] text-neutral-400 truncate">
            {current.brand} • {current.timeAgo}
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-neutral-500 hover:text-neutral-300 rounded-lg"
          aria-label="Dismiss payout alert"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
