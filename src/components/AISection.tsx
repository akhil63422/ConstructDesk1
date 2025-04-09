
import React from 'react';
import { Building, Map, FileText } from 'lucide-react';

const AISection = () => {
  return (
    <section className="py-20 bg-tech-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Construction Insights
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Leverage the power of artificial intelligence to transform raw construction 
            data into actionable insights for better decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-tech-800/50 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-construct-500 text-white p-4 rounded-full mb-6">
              <Building className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Site Awareness</h3>
            <p className="opacity-80">
              AI continuously monitors your site for safety issues, unauthorized access, 
              and equipment utilization, alerting you to potential problems before they escalate.
            </p>
          </div>

          <div className="bg-tech-800/50 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-construct-500 text-white p-4 rounded-full mb-6">
              <Map className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Visualization</h3>
            <p className="opacity-80">
              Transform complex project data into intuitive visualizations that make 
              it easy to understand progress, identify trends, and spot potential issues.
            </p>
          </div>

          <div className="bg-tech-800/50 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-construct-500 text-white p-4 rounded-full mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Deviation Reporting</h3>
            <p className="opacity-80">
              Our AI algorithms automatically detect deviations from plans and specifications, 
              documenting them with precision and suggesting corrective measures.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 p-3 bg-tech-600 rounded-lg animate-pulse">
            <span className="h-3 w-3 bg-green-400 rounded-full"></span>
            <span className="font-medium">AI-driven analysis running continuously</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
