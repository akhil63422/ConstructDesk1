
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Construction with Seamless Integration and AI Insights
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            The ultimate unified platform for Construction Security Operations 
            that brings automated data collection, site awareness, and AI-powered 
            visualization to your construction projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-construct-500 hover:bg-construct-600 text-white text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white text-lg py-6 px-8">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
