
import React from 'react';
import { Button } from '@/components/ui/button';
import { Layers, Construction, Database } from 'lucide-react';

const SchedulingSection = () => {
  return (
    <section id="scheduling" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced 4D Scheduling & BIM Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Link your construction schedule with your 3D models for comprehensive 
            visualization and improved project planning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-tech-700 text-white p-4">
                <h3 className="text-xl font-semibold">Project Timeline Visualization</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-tech-100 flex items-center justify-center">
                      <Construction className="h-8 w-8 text-tech-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">BIM Process Monitoring</h4>
                      <p className="text-gray-600">Monitor your BIM processes in real-time and identify bottlenecks before they impact your schedule.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-construct-100 flex items-center justify-center">
                      <Database className="h-8 w-8 text-construct-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Automated Progress Tracking</h4>
                      <p className="text-gray-600">Our system automatically tracks and updates progress against your 4D schedule using data from the field.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <Layers className="h-8 w-8 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Multi-dimensional Analysis</h4>
                      <p className="text-gray-600">Go beyond 4D with cost (5D) and resource (6D) planning fully integrated into your timeline.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-tech-600 hover:bg-tech-700 text-white w-full">
                    Learn More About 4D Scheduling
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="gradient-border">
              <div className="p-1">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                  alt="4D Scheduling Interface" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Our 4D scheduling interface lets you visualize your project timeline alongside your BIM models
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;
