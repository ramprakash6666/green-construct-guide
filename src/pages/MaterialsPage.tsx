
import React, { useState } from "react";
import { mockMaterials } from "@/lib/mockData";
import MaterialList from "@/components/materials/MaterialList";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MaterialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Extract unique categories
  const categories = Array.from(new Set(mockMaterials.map(m => m.category)));

  // Filter materials based on search term and category
  const filteredMaterials = mockMaterials.filter(material => {
    const matchesSearch = searchTerm === "" || 
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "" || 
      material.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Eco-Friendly Materials</h1>
      <p className="text-gray-600 mb-6">
        Explore our curated collection of sustainable building materials
      </p>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="md:w-2/3">
            <Input
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="eco-input"
            />
          </div>
          
          <div className="md:w-1/3 flex gap-2 overflow-x-auto pb-2">
            {selectedCategory ? (
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("")}
                className="shrink-0 border-eco-green-dark text-eco-green-dark hover:bg-eco-green-dark hover:text-white"
              >
                Clear Filter
              </Button>
            ) : null}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer hover:bg-eco-green-dark hover:text-white ${
                selectedCategory === category ? "bg-eco-green-dark text-white" : ""
              }`}
              onClick={() => setSelectedCategory(category === selectedCategory ? "" : category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <Separator className="my-4" />
      </div>
      
      <MaterialList materials={filteredMaterials} />
    </div>
  );
};

export default MaterialsPage;
