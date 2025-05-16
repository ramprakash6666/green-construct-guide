import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TreeDeciduous } from "lucide-react";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome back, {user?.name}!</CardTitle>
            <CardDescription>
              Your personal dashboard for eco-friendly construction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Account Type: <span className="font-medium">{user?.role === "admin" ? "Administrator" : "Core User"}</span>
            </p>
            <p>
              Email: <span className="font-medium">{user?.email}</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Explore eco-friendly materials or get AI recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                className="bg-eco-green-dark hover:bg-eco-green-light text-white"
                onClick={() => navigate("/materials")}
              >
                Browse Materials
              </Button>
              <Button 
                className="bg-eco-green-dark hover:bg-eco-green-light text-white"
                onClick={() => navigate("/recommend")}
              >
                Get Recommendations
              </Button>
            </div>
            {user?.role === "admin" && (
              <Button 
                variant="outline" 
                className="w-full border-eco-green-dark text-eco-green-dark hover:bg-eco-green-dark hover:text-white"
                onClick={() => navigate("/admin")}
              >
                Go to Admin Panel
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardContent className="py-8">
            <div className="flex flex-col items-center justify-center text-center">
              <TreeDeciduous className="h-12 w-12 text-eco-green-dark mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Make a Difference</h2>
              <p className="mb-6 max-w-lg">
                By choosing sustainable construction materials, you're helping to reduce 
                environmental impact and create healthier living spaces.
              </p>
              <Button 
                className="bg-eco-green-dark hover:bg-eco-green-light"
                onClick={() => navigate("/recommend")}
              >
                Find Sustainable Materials
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
