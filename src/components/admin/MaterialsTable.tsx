
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Material } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface MaterialsTableProps {
  materials: Material[];
  onEdit: (material: Material) => void;
  onDelete: (id: string) => void;
}

const MaterialsTable: React.FC<MaterialsTableProps> = ({
  materials,
  onEdit,
  onDelete,
}) => {
  // Function to determine the color of the sustainability badge
  const getSustainabilityBadgeColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800";
    if (score >= 70) return "bg-green-50 text-green-600";
    if (score >= 50) return "bg-yellow-50 text-yellow-600";
    return "bg-red-50 text-red-600";
  };

  // Function to determine the badge style based on category
  const getCategoryBadgeStyle = (category: string) => {
    const categoryStyles: Record<string, string> = {
      "Flooring": "bg-blue-50 text-blue-700 border-blue-200",
      "Wall": "bg-purple-50 text-purple-700 border-purple-200",
      "Structural": "bg-slate-50 text-slate-700 border-slate-200",
      "Insulation": "bg-orange-50 text-orange-700 border-orange-200",
      "Roofing": "bg-red-50 text-red-700 border-red-200",
      "Finish": "bg-pink-50 text-pink-700 border-pink-200",
      "Countertop": "bg-indigo-50 text-indigo-700 border-indigo-200",
      "Concrete": "bg-gray-50 text-gray-700 border-gray-200",
      "Metal": "bg-zinc-50 text-zinc-700 border-zinc-200",
      "Wood": "bg-amber-50 text-amber-700 border-amber-200",
      "Brick": "bg-rose-50 text-rose-700 border-rose-200",
      "Glass": "bg-sky-50 text-sky-700 border-sky-200",
      "Stone": "bg-emerald-50 text-emerald-700 border-emerald-200",
      "Plumbing": "bg-cyan-50 text-cyan-700 border-cyan-200",
      "Electrical": "bg-teal-50 text-teal-700 border-teal-200",
      "Hardware": "bg-lime-50 text-lime-700 border-lime-200",
    };
    
    return categoryStyles[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-center">Sustainability</TableHead>
            <TableHead className="text-center">Durability</TableHead>
            <TableHead className="text-center">Carbon Footprint</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materials.map((material) => (
            <TableRow key={material.id}>
              <TableCell className="font-medium">{material.name}</TableCell>
              <TableCell>
                <Badge 
                  variant="outline" 
                  className={getCategoryBadgeStyle(material.category)}
                >
                  {material.category}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center">
                  <span
                    className={`inline-block w-8 h-8 rounded-full flex items-center justify-center font-medium ${getSustainabilityBadgeColor(material.sustainability.score)}`}
                  >
                    {material.sustainability.score}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                {material.properties.durability}/10
              </TableCell>
              <TableCell className="text-center">
                {material.sustainability.carbonFootprint}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(material)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(material.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {materials.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No materials found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MaterialsTable;
