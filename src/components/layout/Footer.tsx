
import React from "react";
import { Link } from "react-router-dom";
import { TreeDeciduous } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-eco-green-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TreeDeciduous className="h-6 w-6" />
              <span className="text-xl font-bold">EcoStruct</span>
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-eco-neutral-light">
              <p>Email: info@ecostruct.example</p>
              <p>Phone: (123) 456-7890</p>
              <p>123 Eco Street</p>
              <p>Green City, EC 12345</p>
            </address>
          </div>
        </div>

        <div className="border-t border-eco-neutral-light mt-8 pt-6 text-sm text-eco-neutral-light">
          <p>© {new Date().getFullYear()} EcoStruct. All rights reserved.</p>
          <p className="mt-2">
            This is a demo application for eco-friendly construction materials.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
