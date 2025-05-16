
import React, { useState } from "react";
import RecommendationForm from "@/components/materials/RecommendationForm";
import MaterialList from "@/components/materials/MaterialList";
import { RecommendationRequest, RecommendationResponse } from "@/lib/types";
import { getRecommendations } from "@/lib/mockData";
import { Separator } from "@/components/ui/separator";
import { Building } from "lucide-react";

const RecommendationPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<RecommendationResponse | null>(null);

  const handleGetRecommendations = async (request: RecommendationRequest) => {
    setIsLoading(true);
    
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Get recommendations based on the request
      const recommendations = getRecommendations(request);
      setResults(recommendations);
    } catch (error) {
      console.error("Error getting recommendations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Building className="mx-auto h-12 w-12 text-eco-green-dark mb-2" />
        <h1 className="text-3xl font-bold mb-2">AI Material Recommendations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Answer a few questions about your project, and our AI will suggest the most
          eco-friendly materials tailored to your specific needs.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-10">
        <RecommendationForm
          onSubmit={handleGetRecommendations}
          isLoading={isLoading}
        />
      </div>

      {results && (
        <>
          <Separator className="my-8" />
          <div>
            <h2 className="text-2xl font-bold mb-6 text-eco-green-dark">
              Recommended Materials for Your Project
            </h2>
            <MaterialList
              materials={results.materials}
              reasonings={results.reasonings}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendationPage;
