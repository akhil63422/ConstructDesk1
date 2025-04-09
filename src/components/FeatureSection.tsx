
import React from 'react';
import { 
  Building, 
  Database, 
  Settings, 
  Users, 
  Monitor, 
  FileText, 
  Layers,
  Construction, 
  Map
} from 'lucide-react';

const features = [
  {
    title: "Comprehensive Monitoring",
    description: "Track all aspects of your construction site with integrated sensors and cameras for real-time updates.",
    icon: Monitor,
    color: "bg-blue-50 text-tech-600"
  },
  {
    title: "Remote Access",
    description: "Access your project dashboard from anywhere in the world with secure, cloud-based controls.",
    icon: Map,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Improved Communication",
    description: "Streamline team coordination with integrated messaging and notification systems.",
    icon: Users,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Increased Efficiency",
    description: "Optimize workflows and reduce downtime through data-driven insights and automated scheduling.",
    icon: Settings,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Unified ConSecOps Platform",
    description: "Bring construction, security, and operations into one cohesive system for seamless management.",
    icon: Layers,
    color: "bg-construct-50 text-construct-600"
  },
  {
    title: "Automated Data Collection",
    description: "Leverage IoT devices to gather critical project data without manual intervention.",
    icon: Database,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Site Awareness & AI Visualization",
    description: "Gain complete visibility with AI-enhanced visual representations of your construction site.",
    icon: Building,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Construction Verification",
    description: "Verify construction quality and progress against plans with automated comparison tools.",
    icon: FileText,
    color: "bg-red-50 text-red-600"
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Construction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ConstructDesk combines cutting-edge technology with construction expertise to deliver 
            a platform that enhances every aspect of your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 feature-card-hover"
            >
              <div className={`${feature.color} p-3 rounded-lg inline-block mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
