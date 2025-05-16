
import React from "react";
import { Material } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

interface MaterialDetailProps {
  material: Material;
}

const MaterialDetail: React.FC<MaterialDetailProps> = ({ material }) => {
  return (
    <Card className="bg-white border border-eco-neutral-light shadow-md">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-eco-green-dark">
                {material.name}
              </h1>
              <Badge
                className="bg-eco-green-dark text-white"
                variant="default"
              >
                {material.category}
              </Badge>
            </div>

            <p className="text-gray-600 mb-6">{material.description}</p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Sustainability Profile</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Sustainability Score</span>
                    <span className="font-bold">{material.sustainability.score}%</span>
                  </div>
                  <Progress value={material.sustainability.score} className="h-2" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Carbon Footprint</p>
                      <p className="font-medium">{material.sustainability.carbonFootprint}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Recyclable</p>
                      <p className="font-medium">{material.sustainability.recyclable ? "Yes" : "No"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Renewable</p>
                      <p className="font-medium">{material.sustainability.renewable ? "Yes" : "No"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {material.applications.map((app, i) => (
                    <Badge key={i} variant="outline" className="bg-eco-neutral-light">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Properties</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Durability</span>
                    <span>{material.properties.durability}/10</span>
                  </div>
                  <Progress value={material.properties.durability * 10} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Insulation</span>
                    <span>{material.properties.insulation}/10</span>
                  </div>
                  <Progress value={material.properties.insulation * 10} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Fire Resistance</span>
                    <span>{material.properties.fireResistance}/10</span>
                  </div>
                  <Progress value={material.properties.fireResistance * 10} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Moisture Resistance</span>
                    <span>{material.properties.moistureResistance}/10</span>
                  </div>
                  <Progress value={material.properties.moistureResistance * 10} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Cost Efficiency</span>
                    <span>{material.properties.costEfficiency}/10</span>
                  </div>
                  <Progress value={material.properties.costEfficiency * 10} className="h-2" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-eco-green-dark mb-2">Pros</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {material.pros.map((pro, i) => (
                    <li key={i}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-destructive mb-2">Cons</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {material.cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialDetail;
