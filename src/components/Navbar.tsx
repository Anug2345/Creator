import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Menu, 
  X, 
  Zap, 
  ShieldCheck, 
  Briefcase,
  Users,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (role: 'creator' | 'brand') => void;
  activeRole: 'creator' | 'brand';
  setActiveRole: (role: 'creator' | 'brand') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAuth, 
  activeRole, 
  setActiveRole 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#06080C]/85 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            
            {/* ZONE 1: BRAND TITLE (Wordmark with deliberate accent) */}
            <a 
              href="#" 
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 text-black stroke-[2.5]" />
              </div>
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white flex items-center">
                Creators<span className="text-emerald-400">Rewards</span>
              </span>
            </a>

            {/* ZONE 2: 4-6 NAV LINKS (1-2 word labels, single line) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <a
                href="#how-it-works"
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                How It Works
              </a>
              <a
                href="#campaigns"
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                Campaigns
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </a>
              <a
                href="#creators"
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                Top Creators
              </a>
              <a
                href="#calculator"
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                Earnings
              </a>
              <a
                href="#product-preview"
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                Platform Demo
              </a>
              <a
                href="#faq"
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                FAQ
              </a>
            </nav>

            {/* ZONE 3: 1-2 PRIMARY ACTIONS & ROLE TOGGLE */}
            <div className="flex items-center gap-3">
              {/* Creator / Brand Perspective Switcher */}
              <div className="hidden lg:flex items-center p-0.5 bg-neutral-900/90 border border-white/10 rounded-full text-xs">
                <button
                  onClick={() => setActiveRole('creator')}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    activeRole === 'creator'
                      ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  For Creators
                </button>
                <button
                  onClick={() => setActiveRole('brand')}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    activeRole === 'brand'
                      ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  For Brands
                </button>
              </div>

              {/* Sign In Trigger */}
              <button
                onClick={() => onOpenAuth(activeRole)}
                className="hidden sm:inline-flex px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Sign In
              </button>

              {/* Main High-Contrast CTA */}
              <button
                onClick={() => onOpenAuth(activeRole)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs lg:text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>{activeRole === 'creator' ? 'Start Earning' : 'Launch Campaign'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#0C0E14] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-display text-lg font-bold text-white">
                    Creators<span className="text-emerald-400">Rewards</span>
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Perspective Toggle */}
              <div className="mt-6 flex p-1 bg-white/5 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveRole('creator')}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeRole === 'creator'
                      ? 'bg-emerald-500 text-black shadow'
                      : 'text-neutral-400'
                  }`}
                >
                  I'm a Creator
                </button>
                <button
                  onClick={() => setActiveRole('brand')}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeRole === 'brand'
                      ? 'bg-emerald-500 text-black shadow'
                      : 'text-neutral-400'
                  }`}
                >
                  I'm a Brand
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="mt-6 flex flex-col space-y-3">
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#campaigns"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>Brand Campaigns</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    Live
                  </span>
                </a>
                <a
                  href="#creators"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  Top Creators
                </a>
                <a
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  Earnings Calculator
                </a>
                <a
                  href="#product-preview"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  Platform Demo
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth(activeRole);
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors"
              >
                Sign In to Account
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth(activeRole);
                }}
                className="w-full py-3 text-center text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <span>{activeRole === 'creator' ? 'Join as Creator' : 'Launch Brand Brief'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
