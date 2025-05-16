
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Tree } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-neutral-light/50">
      <div className="text-center p-6">
        <Tree className="h-16 w-16 text-eco-green-dark mx-auto mb-4" />
        <h1 className="text-6xl font-bold mb-4 text-eco-green-dark">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! This page seems to have grown in a different forest.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-eco-green-dark hover:bg-eco-green-light text-white"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
