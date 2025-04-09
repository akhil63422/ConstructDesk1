
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-tech-700">
            Construct<span className="text-construct-500">Desk</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-tech-700 transition-colors">Features</a>
          <a href="#command-center" className="text-gray-700 hover:text-tech-700 transition-colors">Command Center</a>
          <a href="#scheduling" className="text-gray-700 hover:text-tech-700 transition-colors">4D Scheduling</a>
          <a href="#contact" className="text-gray-700 hover:text-tech-700 transition-colors">Contact</a>
          <Button className="bg-construct-500 hover:bg-construct-600 text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-4 py-4">
            <a href="#features" className="text-gray-700 hover:text-tech-700 transition-colors py-2">Features</a>
            <a href="#command-center" className="text-gray-700 hover:text-tech-700 transition-colors py-2">Command Center</a>
            <a href="#scheduling" className="text-gray-700 hover:text-tech-700 transition-colors py-2">4D Scheduling</a>
            <a href="#contact" className="text-gray-700 hover:text-tech-700 transition-colors py-2">Contact</a>
            <Button className="bg-construct-500 hover:bg-construct-600 text-white w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
