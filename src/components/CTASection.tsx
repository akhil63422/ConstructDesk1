
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-tech-800 to-tech-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Construction Operations?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join the construction companies already using ConstructDesk to improve 
            efficiency, enhance safety, and deliver projects on time and under budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-construct-500 hover:bg-construct-600 text-white text-lg py-6 px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white hover:bg-white/10 text-white text-lg py-6 px-8">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-construct-300">94%</h3>
              <p className="text-sm opacity-80">Efficiency Increase</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-construct-300">75%</h3>
              <p className="text-sm opacity-80">Fewer Delays</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-construct-300">63%</h3>
              <p className="text-sm opacity-80">Cost Reduction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-construct-300">89%</h3>
              <p className="text-sm opacity-80">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
