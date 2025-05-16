
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RecommendationRequest } from "@/lib/types";

interface RecommendationFormProps {
  onSubmit: (request: RecommendationRequest) => void;
  isLoading: boolean;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [formData, setFormData] = useState<RecommendationRequest>({
    projectType: "",
    climate: "",
    budget: "",
    priority: "",
    application: "",
  });

  const handleChange = (field: keyof RecommendationRequest, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = () => {
    return (
      formData.projectType &&
      formData.climate &&
      formData.budget &&
      formData.priority &&
      formData.application
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-eco-green-dark">
          Get AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => handleChange("projectType", value)}
              >
                <SelectTrigger id="projectType" className="eco-input">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="institutional">Institutional</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="climate">Climate Zone</Label>
              <Select
                value={formData.climate}
                onValueChange={(value) => handleChange("climate", value)}
              >
                <SelectTrigger id="climate" className="eco-input">
                  <SelectValue placeholder="Select climate zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cold">Cold</SelectItem>
                  <SelectItem value="temperate">Temperate</SelectItem>
                  <SelectItem value="hot">Hot & Dry</SelectItem>
                  <SelectItem value="humid">Hot & Humid</SelectItem>
                  <SelectItem value="coastal">Coastal</SelectItem>
                  <SelectItem value="tropical">Tropical</SelectItem>
                  <SelectItem value="alpine">Alpine</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleChange("budget", value)}
              >
                <SelectTrigger id="budget" className="eco-input">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Top Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => handleChange("priority", value)}
              >
                <SelectTrigger id="priority" className="eco-input">
                  <SelectValue placeholder="Select top priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sustainability">Sustainability</SelectItem>
                  <SelectItem value="durability">Durability</SelectItem>
                  <SelectItem value="cost">Cost Efficiency</SelectItem>
                  <SelectItem value="energy">Energy Efficiency</SelectItem>
                  <SelectItem value="health">Health & Wellness</SelectItem>
                  <SelectItem value="aesthetics">Aesthetics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="application">Material Application</Label>
              <Select
                value={formData.application}
                onValueChange={(value) => handleChange("application", value)}
              >
                <SelectTrigger id="application" className="eco-input">
                  <SelectValue placeholder="Select material application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="foundation">Foundation</SelectItem>
                  <SelectItem value="framing">Structural Framing</SelectItem>
                  <SelectItem value="exterior">Exterior Walls</SelectItem>
                  <SelectItem value="roofing">Roofing</SelectItem>
                  <SelectItem value="insulation">Insulation</SelectItem>
                  <SelectItem value="flooring">Flooring</SelectItem>
                  <SelectItem value="wall">Wall Construction</SelectItem>
                  <SelectItem value="finish">Interior Finishes</SelectItem>
                  <SelectItem value="countertop">Countertops</SelectItem>
                  <SelectItem value="windows">Windows</SelectItem>
                  <SelectItem value="doors">Doors</SelectItem>
                  <SelectItem value="plumbing">Plumbing Materials</SelectItem>
                  <SelectItem value="electrical">Electrical Systems</SelectItem>
                  <SelectItem value="hvac">HVAC Components</SelectItem>
                  <SelectItem value="landscape">Landscaping</SelectItem>
                  <SelectItem value="paving">Paving & Hardscaping</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-eco-green-dark hover:bg-eco-green-light text-white"
            disabled={isLoading || !isFormValid()}
          >
            {isLoading ? "Getting Recommendations..." : "Get AI Recommendations"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecommendationForm;
