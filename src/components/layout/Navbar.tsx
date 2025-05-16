
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { Leaf } from "lucide-react";

const Navbar: React.FC = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/487b1f29-ebaf-43e3-a3e4-0eb944e34bee.png" 
            alt="Eco-Construction Logo" 
            className="h-8 w-8 rounded-full"
          />
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-eco-green-dark">Eco-Construction</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-eco-green-dark"
          >
            Home
          </Link>
          <Link 
            to="/materials" 
            className="text-sm font-medium transition-colors hover:text-eco-green-dark"
          >
            Materials
          </Link>
          <Link 
            to="/recommend" 
            className="text-sm font-medium transition-colors hover:text-eco-green-dark"
          >
            AI Recommendations
          </Link>
          {isAdmin && (
            <Link 
              to="/admin" 
              className="text-sm font-medium transition-colors hover:text-eco-green-dark"
            >
              Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {!user ? (
            <>
              <Button 
                variant="outline" 
                onClick={() => navigate("/login")}
                className="hidden md:inline-flex"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate("/register")}
                className="bg-eco-green-dark hover:bg-eco-green-light"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="gap-2 border-eco-green-light"
                >
                  <Leaf className="h-4 w-4" />
                  <span className="hidden md:inline">{user.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => navigate("/admin")}
                  >
                    Admin Panel
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={logout}
                >
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
