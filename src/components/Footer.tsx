import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Mail,
  CheckCircle2
} from 'lucide-react';

export const Footer: React.FC<{ onOpenAuth: (role: 'creator' | 'brand') => void }> = ({
  onOpenAuth,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currency, setCurrency] = useState('NGN');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-[#040508] text-neutral-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Creators<span className="text-emerald-400">Rewards</span>
              </span>
            </div>
            
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              The premier monetization engine for digital creators and brands. Connecting verified content creators with guaranteed escrow campaigns and direct bank payouts.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compliant with Nigeria Data Protection Regulation (NDPR)</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white/[0.02] border border-white/8 p-6">
              <h4 className="font-bold text-sm text-white mb-1">
                Subscribe to the Weekly Creator Brief
              </h4>
              <p className="text-xs text-neutral-400 mb-4">
                Get new high-paying brand campaigns, rate card trends, and monetization tips delivered to your inbox.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You're on the VIP campaign list! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your creator email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* MIDDLE ROW: DETAILED NAVIGATION DIRECTORY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs">
          
          {/* Col 1 */}
          <div>
            <h5 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              For Creators
            </h5>
            <ul className="space-y-2.5">
              <li><a href="#campaigns" className="hover:text-emerald-400 transition-colors">Browse Brand Campaigns</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Rate Card Calculator</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How Escrow Works</a></li>
              <li><a href="#creators" className="hover:text-emerald-400 transition-colors">Creator Leaderboard</a></li>
              <li><button onClick={() => onOpenAuth('creator')} className="hover:text-emerald-400 transition-colors text-left">Claim Verification Badge</button></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h5 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              For Brands
            </h5>
            <ul className="space-y-2.5">
              <li><button onClick={() => onOpenAuth('brand')} className="hover:text-emerald-400 transition-colors text-left">Post a UGC Campaign</button></li>
              <li><a href="#creators" className="hover:text-emerald-400 transition-colors">Talent Directory & Media Kits</a></li>
              <li><a href="#product-preview" className="hover:text-emerald-400 transition-colors">Campaign Management OS</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Escrow Guarantee Details</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Enterprise Brand Solutions</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h5 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Resources
            </h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Creator Academy & Guides</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">2026 African Creator Report</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">UGC Video Blueprint</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Trust Score Guidelines</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Community Discord & Telegram</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h5 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Company & Legal
            </h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Creators Rewards</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">NDPR Data Compliance</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & CURRENCY SELECTOR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p>© {new Date().getFullYear()} Creators Rewards Network Inc. All rights reserved.</p>
            <p className="text-neutral-500 text-[11px] mt-0.5">
              Nigeria • United Kingdom • United States
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-neutral-500">Currency:</span>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-xs">
              {['NGN', 'USD', 'USDT'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded font-medium transition-all ${
                    currency === curr ? 'bg-emerald-400 text-black font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
