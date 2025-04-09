
import React from 'react';
import { Monitor, FileText, Construction } from 'lucide-react';

const CommandCenter = () => {
  return (
    <section id="command-center" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Visual Command Center
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our integrated command center gives you complete visibility and control over your construction projects. Monitor multiple sites simultaneously with real-time data visualization and analytics.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-tech-50 p-3 rounded-lg">
                  <Monitor className="h-6 w-6 text-tech-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Real-time Monitoring</h3>
                  <p className="text-gray-600">View live feeds, sensor data, and progress updates from anywhere with our secure cloud platform.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-construct-50 p-3 rounded-lg">
                  <Construction className="h-6 w-6 text-construct-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Clash Detection</h3>
                  <p className="text-gray-600">Identify potential conflicts early using our IoT and computer vision technology to save time and resources.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Deviation Reporting</h3>
                  <p className="text-gray-600">Automatically detect and report deviations from the plan with detailed analytics and recommended actions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-tech-100 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-construct-100 rounded-lg"></div>
              <div className="relative bg-white p-3 rounded-lg shadow-xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
                  alt="Command Center Interface" 
                  className="rounded-lg shadow-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenter;
