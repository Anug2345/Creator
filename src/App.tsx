import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { HowItWorks } from './components/HowItWorks';
import { LiveCampaignMarketplace } from './components/LiveCampaignMarketplace';
import { CreatorShowcase } from './components/CreatorShowcase';
import { EarningsCalculator } from './components/EarningsCalculator';
import { ProductPreview } from './components/ProductPreview';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { OnboardingModal } from './components/Modals/OnboardingModal';
import { CampaignModal } from './components/Modals/CampaignModal';
import { MediaKitModal } from './components/Modals/MediaKitModal';
import { LivePayoutTicker } from './components/LivePayoutTicker';
import { ParticleBackground } from './components/ParticleBackground';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Campaign, Creator } from './types';

export default function App() {
  useScrollReveal();

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authRole, setAuthRole] = useState<'creator' | 'brand'>('creator');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  const handleOpenAuth = (role: 'creator' | 'brand') => {
    setAuthRole(role);
    setAuthModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06080C] text-neutral-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
      {/* High-Performance Canvas Particle System */}
      <ParticleBackground />

      {/* Fixed Navigation Bar with 3-Zone Contract */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        activeRole={authRole}
        setActiveRole={setAuthRole}
      />

      {/* Main Page Layout */}
      <main>
        {/* Dynamic Asymmetric Hero Section */}
        <Hero
          onOpenAuth={handleOpenAuth}
          onExploreCampaigns={() => handleScrollToSection('campaigns')}
          onExploreCreators={() => handleScrollToSection('creators')}
        />

        {/* Social Proof, Animated Stats & Brand Marquee */}
        <SocialProof />

        {/* 4-Step Interactive Flow */}
        <HowItWorks onGetStarted={() => handleOpenAuth('creator')} />

        {/* Live Active Brand Campaigns Marketplace */}
        <LiveCampaignMarketplace
          onSelectCampaign={(camp) => setSelectedCampaign(camp)}
          onOpenBrandBrief={() => handleOpenAuth('brand')}
        />

        {/* Verified Creator Showcase & Rate Cards */}
        <CreatorShowcase
          onSelectCreator={(creator) => setSelectedCreator(creator)}
          onOpenAuth={handleOpenAuth}
        />

        {/* Interactive Earnings & Rate Card Calculator */}
        <EarningsCalculator onClaimRateCard={() => handleOpenAuth('creator')} />

        {/* Interactive Product Preview & SaaS Operating System */}
        <ProductPreview onGetStarted={() => handleOpenAuth(authRole)} />

        {/* Value Proposition & Structured Benefits */}
        <Benefits onGetStarted={() => handleOpenAuth('creator')} />

        {/* Creator Stories & Verified Testimonials */}
        <Testimonials />

        {/* Smooth Accordion FAQ */}
        <FAQ onContactSupport={() => handleOpenAuth('creator')} />

        {/* High-Impact Atmospheric Climax CTA */}
        <FinalCTA onOpenAuth={handleOpenAuth} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenAuth={handleOpenAuth} />

      {/* Modals & Overlays */}
      <OnboardingModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialRole={authRole}
      />

      <CampaignModal
        campaign={selectedCampaign}
        isOpen={!!selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
      />

      <MediaKitModal
        creator={selectedCreator}
        isOpen={!!selectedCreator}
        onClose={() => setSelectedCreator(null)}
      />

      {/* Live discreet payout notification pill */}
      <LivePayoutTicker />
    </div>
  );
}
