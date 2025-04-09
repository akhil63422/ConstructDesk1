
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import CommandCenter from '@/components/CommandCenter';
import SchedulingSection from '@/components/SchedulingSection';
import AISection from '@/components/AISection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureSection />
      <CommandCenter />
      <SchedulingSection />
      <AISection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
