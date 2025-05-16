
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockMaterials } from "@/lib/mockData";
import MaterialsTable from "@/components/admin/MaterialsTable";
import MaterialForm from "@/components/admin/MaterialForm";
import { Material } from "@/lib/types";
import { toast } from "sonner";

const AdminPage: React.FC = () => {
  const [materials, setMaterials] = useState(mockMaterials);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleEditMaterial = (material: Material) => {
    setSelectedMaterial(material);
  };

  const handleDeleteMaterial = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this material? This action cannot be undone."
    );

    if (confirmDelete) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        const updatedMaterials = materials.filter((m) => m.id !== id);
        setMaterials(updatedMaterials);
        setIsLoading(false);
        toast.success("Material deleted successfully!");
      }, 1000);
    }
  };

  const handleSubmitMaterial = (materialData: Partial<Material>) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (materialData.id) {
        // Update existing material
        const updatedMaterials = materials.map((m) =>
          m.id === materialData.id ? { ...m, ...materialData } : m
        );
        setMaterials(updatedMaterials);
        toast.success("Material updated successfully!");
      } else {
        // Add new material
        const newMaterial = {
          ...materialData,
          id: `new-${Date.now()}`,
        } as Material;
        setMaterials([...materials, newMaterial]);
        toast.success("Material added successfully!");
      }

      // Reset form
      setSelectedMaterial(undefined);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Tabs defaultValue="materials" className="space-y-4">
        <TabsList>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="add">Add Material</TabsTrigger>
          {selectedMaterial && (
            <TabsTrigger value="edit">Edit Material</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="materials" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Materials Management</h2>
          </div>
          <MaterialsTable
            materials={materials}
            onEdit={handleEditMaterial}
            onDelete={handleDeleteMaterial}
          />
        </TabsContent>

        <TabsContent value="add">
          <h2 className="text-xl font-semibold mb-4">Add New Material</h2>
          <MaterialForm
            onSubmit={handleSubmitMaterial}
            isLoading={isLoading}
          />
        </TabsContent>

        {selectedMaterial && (
          <TabsContent value="edit">
            <h2 className="text-xl font-semibold mb-4">
              Edit Material: {selectedMaterial.name}
            </h2>
            <MaterialForm
              material={selectedMaterial}
              onSubmit={handleSubmitMaterial}
              isLoading={isLoading}
            />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default AdminPage;
