import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Wallet, 
  Zap, 
  Building2,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: 'creator' | 'brand';
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'creator',
}) => {
  const [role, setRole] = useState<'creator' | 'brand'>(initialRole);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    handle: '',
    niche: 'Lifestyle & Tech',
    bank: 'Access Bank',
    accountNumber: '',
    brandName: '',
    budget: '₦1,000,000 – ₦5,000,000',
  });
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>(['tiktok']);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  if (!isOpen) return null;

  const togglePlatform = (p: string) => {
    setConnectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#00F0FF', '#F59E0B'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#0D1017] border border-white/12 p-5 sm:p-8 shadow-2xl overflow-y-auto max-h-[92dvh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header & Role Switcher */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-black" />
                </div>
                <span className="font-display font-bold text-white text-lg">
                  Creators<span className="text-emerald-400">Rewards</span>
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {role === 'creator' ? 'Start Earning from Your Content' : 'Launch High-Impact Brand Campaigns'}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {role === 'creator'
                  ? 'Connect your channels, unlock verified briefs, and get paid directly to your bank.'
                  : 'Book pre-vetted creators with escrow protection and verified ROI metrics.'}
              </p>

              {/* Role selector tab */}
              <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mt-4">
                <button
                  type="button"
                  onClick={() => setRole('creator')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    role === 'creator'
                      ? 'bg-emerald-400 text-black shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  I'm a Creator
                </button>
                <button
                  type="button"
                  onClick={() => setRole('brand')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    role === 'brand'
                      ? 'bg-emerald-400 text-black shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  I'm a Brand / Agency
                </button>
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleFinish} className="space-y-4">
              {role === 'creator' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Chidera Okafor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="chidera@creators.ng"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Connect Channels */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1.5">
                      Connect Verified Social Channels
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: 'tiktok', label: 'TikTok' },
                        { id: 'instagram', label: 'Instagram' },
                        { id: 'youtube', label: 'YouTube' },
                        { id: 'twitter', label: 'X (Twitter)' },
                      ].map((p) => {
                        const isConnected = connectedPlatforms.includes(p.id);
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => togglePlatform(p.id)}
                            className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                              isConnected
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                : 'bg-white/5 text-neutral-400 border-white/5 hover:border-white/20'
                            }`}
                          >
                            {isConnected ? `✓ ${p.label}` : `+ ${p.label}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Payout Banking Rail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                        Payout Bank (NIBSS)
                      </label>
                      <select
                        value={formData.bank}
                        onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Access Bank">Access Bank</option>
                        <option value="GTBank">GTBank (Guaranty Trust)</option>
                        <option value="Zenith Bank">Zenith Bank</option>
                        <option value="Kuda Bank">Kuda Microfinance Bank</option>
                        <option value="United Bank for Africa (UBA)">UBA</option>
                        <option value="USDT TRC20 Wallet">USDT Crypto Wallet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                        Account / Wallet Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="0123456789"
                        value={formData.accountNumber}
                        onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kuda Technologies or My Brand"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marketing@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                      Estimated Campaign Reward Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-400"
                    >
                      <option value="₦500,000 – ₦2,000,000">₦500,000 – ₦2,000,000</option>
                      <option value="₦2,000,000 – ₦10,000,000">₦2,000,000 – ₦10,000,000</option>
                      <option value="₦10,000,000+ Enterprise">₦10,000,000+ Enterprise</option>
                    </select>
                  </div>
                </>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-black font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  <span>{role === 'creator' ? 'Complete Profile & Unlock Campaigns' : 'Create Brand Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NDPR & Bank-grade AES-256 encrypted security</span>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl animate-bounce">
              ✓
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Welcome to Creators Rewards!
              </h3>
              <p className="text-sm text-neutral-300 mt-2 max-w-sm mx-auto">
                {role === 'creator'
                  ? 'Your channels have been connected. Your initial Trust Score is 99.2%. You can now claim open brand briefs.'
                  : 'Your brand workspace is ready. You can now launch UGC briefs and fund escrow pools.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/8 text-xs text-left max-w-xs mx-auto space-y-1.5">
              <div className="flex justify-between text-neutral-400">
                <span>Account Status:</span>
                <span className="text-emerald-400 font-bold">Active & Verified</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Payout Guarantee:</span>
                <span className="text-white font-bold">100% Escrow</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs transition-colors"
            >
              Enter Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
