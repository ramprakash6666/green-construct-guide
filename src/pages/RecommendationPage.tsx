
import React, { useState } from "react";
import RecommendationForm from "@/components/materials/RecommendationForm";
import MaterialList from "@/components/materials/MaterialList";
import { RecommendationRequest, RecommendationResponse } from "@/lib/types";
import { getRecommendations } from "@/lib/mockData";
import { Separator } from "@/components/ui/separator";
import { Building, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const RecommendationPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<RecommendationResponse | null>(null);
  const [analysisStage, setAnalysisStage] = useState(0);

  const handleGetRecommendations = async (request: RecommendationRequest) => {
    setIsLoading(true);
    setAnalysisStage(0);
    
    try {
      // Simulate AI processing stages
      await simulateAIProcessing();
      
      // Get recommendations based on the request
      const recommendations = getRecommendations(request);
      setResults(recommendations);
    } catch (error) {
      console.error("Error getting recommendations:", error);
    } finally {
      setIsLoading(false);
      setAnalysisStage(0);
    }
  };

  const simulateAIProcessing = async () => {
    for (let i = 1; i <= 5; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setAnalysisStage(i);
    }
  };

  const renderProcessingStage = () => {
    const stages = [
      "Analyzing project requirements...",
      "Evaluating climate conditions...",
      "Calculating sustainability metrics...",
      "Comparing material properties...",
      "Finalizing recommendations..."
    ];

    return (
      <Card className="w-full mb-8">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-5 w-5 text-eco-green-dark animate-pulse" />
            <span className="font-medium">
              {stages[analysisStage - 1]}
            </span>
          </div>
          <Progress value={analysisStage * 20} className="h-2" />
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Building className="h-10 w-10 text-eco-green-dark" />
          <Brain className="h-8 w-8 text-eco-green-dark" />
        </div>
        <h1 className="text-3xl font-bold mb-2">AI Material Recommendations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our advanced AI analyzes your project requirements to suggest the most
          eco-friendly construction materials tailored to your specific needs.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-10">
        <RecommendationForm
          onSubmit={handleGetRecommendations}
          isLoading={isLoading}
        />
      </div>

      {isLoading && analysisStage > 0 && renderProcessingStage()}

      {results && (
        <>
          <Separator className="my-8" />
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="h-6 w-6 text-eco-green-dark" />
              <h2 className="text-2xl font-bold text-eco-green-dark">
                AI Recommended Materials for Your Project
              </h2>
            </div>
            <div className="bg-eco-neutral-light rounded-lg p-5 mb-6">
              <h3 className="font-medium text-lg mb-2">AI Analysis Summary</h3>
              <p className="text-sm text-gray-700 mb-4">
                Based on your {results.reasonings.length > 0 ? results.reasonings[0].toLowerCase() : 'project requirements'}, 
                our AI has determined that the following materials would provide the optimal balance of 
                sustainability, performance, and cost-effectiveness for your specific needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-white rounded-md">
                  <span className="font-medium block">Environmental Impact</span>
                  <span className="text-green-600">Reduced by up to 45%</span>
                </div>
                <div className="p-3 bg-white rounded-md">
                  <span className="font-medium block">Carbon Footprint</span>
                  <span className="text-green-600">Reduced by up to 37%</span>
                </div>
                <div className="p-3 bg-white rounded-md">
                  <span className="font-medium block">Energy Efficiency</span>
                  <span className="text-green-600">Improved by up to 28%</span>
                </div>
              </div>
            </div>
            
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
