
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Material } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MaterialCardProps {
  material: Material;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  const navigate = useNavigate();
  
  const viewDetails = () => {
    navigate(`/materials/${material.id}`);
  };
  
  return (
    <Card className="material-item overflow-hidden flex flex-col h-full animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-eco-green-dark">
            {material.name}
          </CardTitle>
          <Badge 
            variant={material.sustainability.score > 90 ? "default" : "outline"}
            className={material.sustainability.score > 90 ? "bg-eco-green-dark" : ""}
          >
            {material.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Sustainability Score</span>
            <span className="text-sm font-bold">{material.sustainability.score}%</span>
          </div>
          <Progress value={material.sustainability.score} className="h-2" />
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-medium">Carbon Footprint:</p>
              <p>{material.sustainability.carbonFootprint}</p>
            </div>
            <div>
              <p className="font-medium">Recyclable:</p>
              <p>{material.sustainability.recyclable ? "Yes" : "No"}</p>
            </div>
          </div>
          
          <div className="mt-2">
            <p className="font-medium text-sm mb-1">Applications:</p>
            <div className="flex flex-wrap gap-1">
              {material.applications.slice(0, 2).map((app, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {app}
                </Badge>
              ))}
              {material.applications.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{material.applications.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          onClick={viewDetails}
          variant="outline" 
          className="w-full border-eco-green-dark text-eco-green-dark hover:bg-eco-green-dark hover:text-white"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MaterialCard;
