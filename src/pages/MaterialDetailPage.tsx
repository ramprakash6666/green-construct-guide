
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockMaterials } from "@/lib/mockData";
import MaterialDetail from "@/components/materials/MaterialDetail";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const MaterialDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [material, setMaterial] = useState(
    mockMaterials.find((m) => m.id === id)
  );

  useEffect(() => {
    // Find the material based on the ID
    const foundMaterial = mockMaterials.find((m) => m.id === id);
    if (!foundMaterial) {
      // Redirect if the material is not found
      navigate("/materials");
      return;
    }
    
    setMaterial(foundMaterial);
  }, [id, navigate]);

  if (!material) {
    return null; // This will prevent rendering until navigation happens
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-4 pl-0 inline-flex items-center"
        onClick={() => navigate("/materials")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Materials
      </Button>
      
      <MaterialDetail material={material} />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-eco-green-dark">
          Similar Materials
        </h2>
        <Separator className="mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockMaterials
            .filter(
              (m) => m.category === material.category && m.id !== material.id
            )
            .slice(0, 3)
            .map((similarMaterial) => (
              <div key={similarMaterial.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">{similarMaterial.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {similarMaterial.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-eco-green-dark text-eco-green-dark hover:bg-eco-green-dark hover:text-white"
                  onClick={() => navigate(`/materials/${similarMaterial.id}`)}
                >
                  View Details
                </Button>
              </div>
            ))}
          
          {mockMaterials.filter(
            (m) => m.category === material.category && m.id !== material.id
          ).length === 0 && (
            <p className="text-gray-600 col-span-3">
              No similar materials found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialDetailPage;
