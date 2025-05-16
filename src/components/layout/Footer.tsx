
import React from "react";
import { Link } from "react-router-dom";
import { TreeDeciduous } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-eco-green-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/487b1f29-ebaf-43e3-a3e4-0eb944e34bee.png" 
                alt="Eco-Construction Logo" 
                className="h-12 w-12 rounded-full"
              />
              <span className="text-xl font-bold">Eco-Construction</span>
            </div>
            <p className="text-sm text-eco-neutral-light">
              Empowering sustainable construction through AI-powered material recommendations
              for environmentally conscious builders.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-eco-neutral-light hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/materials" 
                  className="text-sm text-eco-neutral-light hover:text-white transition-colors"
                >
                  Materials
                </Link>
              </li>
              <li>
                <Link 
                  to="/recommend" 
                  className="text-sm text-eco-neutral-light hover:text-white transition-colors"
                >
                  Get Recommendations
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="text-sm text-eco-neutral-light hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
