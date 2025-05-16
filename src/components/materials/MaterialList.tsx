
import React from "react";
import { Material } from "@/lib/types";
import MaterialCard from "./MaterialCard";

interface MaterialListProps {
  materials: Material[];
  reasonings?: string[];
}

const MaterialList: React.FC<MaterialListProps> = ({ materials, reasonings }) => {
  if (materials.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-lg text-muted-foreground">No materials found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reasonings && reasonings.length > 0 && (
        <div className="bg-eco-neutral-light p-4 rounded-lg mb-4">
          <h3 className="font-medium text-lg mb-2">Why We Recommended These</h3>
          <ul className="list-disc pl-4 space-y-1">
            {reasonings.map((reason, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default MaterialList;
