
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Leaf, Building, TreeDeciduous, SolarPanel } from "lucide-react";
import { mockMaterials } from "@/lib/mockData";
import MaterialCard from "@/components/materials/MaterialCard";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  // Get 3 featured materials with high sustainability scores
  const featuredMaterials = mockMaterials
    .filter((m) => m.sustainability.score >= 90)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eco-green-dark to-eco-green-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Build a Sustainable Future
              </h1>
              <p className="text-lg mb-6">
                Discover eco-friendly construction materials through AI-powered
                recommendations tailored to your specific project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/recommend")}
                  className="bg-white text-eco-green-dark hover:bg-eco-neutral-light"
                  size="lg"
                >
                  Get Recommendations
                </Button>
                <Button
                  onClick={() => navigate("/materials")}
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  size="lg"
                >
                  Explore Materials
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-tl-3xl rounded-br-3xl">
                  <Leaf className="h-12 w-12 text-white mb-2" />
                  <h3 className="font-semibold text-lg">Sustainable</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-tr-3xl rounded-bl-3xl">
                  <Building className="h-12 w-12 text-white mb-2" />
                  <h3 className="font-semibold text-lg">Durable</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-tl-3xl rounded-br-3xl">
                  <TreeDeciduous className="h-12 w-12 text-white mb-2" />
                  <h3 className="font-semibold text-lg">Renewable</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-tr-3xl rounded-bl-3xl">
                  <SolarPanel className="h-12 w-12 text-white mb-2" />
                  <h3 className="font-semibold text-lg">Efficient</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-eco-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-eco-green-dark">
            Why Choose EcoStruct?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-eco-green-light/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-eco-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-eco-green-dark">
                AI-Powered Recommendations
              </h3>
              <p className="text-gray-600">
                Our intelligent system analyzes your project requirements to recommend
                the most suitable eco-friendly materials.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-eco-green-light/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-eco-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-eco-green-dark">
                Comprehensive Material Database
              </h3>
              <p className="text-gray-600">
                Access detailed information on a wide range of sustainable
                building materials with sustainability scores and properties.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-eco-green-light/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TreeDeciduous className="h-8 w-8 text-eco-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-eco-green-dark">
                Expert Insights
              </h3>
              <p className="text-gray-600">
                Each recommendation comes with detailed explanations on why
                specific materials were selected for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Materials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-eco-green-dark">
              Featured Eco-Materials
            </h2>
            <Button
              onClick={() => navigate("/materials")}
              variant="outline"
              className="border-eco-green-dark text-eco-green-dark hover:bg-eco-green-light hover:text-white"
            >
              View All Materials
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-eco-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Green?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get personalized recommendations for your sustainable construction
            project and start making a positive environmental impact today.
          </p>
          <Button
            onClick={() => navigate("/register")}
            className="bg-white text-eco-blue hover:bg-eco-neutral-light"
            size="lg"
          >
            Create Free Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
