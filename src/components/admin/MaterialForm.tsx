
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Material } from "@/lib/types";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface MaterialFormProps {
  material?: Material;
  onSubmit: (material: Partial<Material>) => void;
  isLoading: boolean;
}

const MaterialForm: React.FC<MaterialFormProps> = ({
  material,
  onSubmit,
  isLoading,
}) => {
  const [formData, setFormData] = useState<Partial<Material>>({
    name: "",
    category: "",
    description: "",
    sustainability: {
      score: 50,
      carbonFootprint: "Medium",
      recyclable: false,
      renewable: false,
    },
    properties: {
      durability: 5,
      insulation: 5,
      fireResistance: 5,
      moistureResistance: 5,
      costEfficiency: 5,
    },
    applications: [],
    imageUrl: "",
    pros: [""],
    cons: [""],
  });

  // Initialize form with material data if editing
  useEffect(() => {
    if (material) {
      setFormData(material);
    }
  }, [material]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSustainabilityChange = (
    field: keyof typeof formData.sustainability,
    value: any
  ) => {
    setFormData({
      ...formData,
      sustainability: {
        ...formData.sustainability!,
        [field]: value,
      },
    });
  };

  const handlePropertiesChange = (
    field: keyof typeof formData.properties,
    value: number
  ) => {
    setFormData({
      ...formData,
      properties: {
        ...formData.properties!,
        [field]: value,
      },
    });
  };

  const handleApplicationsChange = (value: string) => {
    const applicationsList = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    setFormData({
      ...formData,
      applications: applicationsList,
    });
  };

  const handleProsChange = (value: string) => {
    const prosList = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    setFormData({
      ...formData,
      pros: prosList,
    });
  };

  const handleConsChange = (value: string) => {
    const consList = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    setFormData({
      ...formData,
      cons: consList,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {material ? "Edit Material" : "Add New Material"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Material Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="eco-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger id="category" className="eco-input">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Flooring">Flooring</SelectItem>
                    <SelectItem value="Wall">Wall</SelectItem>
                    <SelectItem value="Insulation">Insulation</SelectItem>
                    <SelectItem value="Structural">Structural</SelectItem>
                    <SelectItem value="Finish">Finish</SelectItem>
                    <SelectItem value="Countertop">Countertop</SelectItem>
                    <SelectItem value="Multiple">Multiple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="eco-input"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="/image-url.jpg"
                className="eco-input"
              />
            </div>

            <h3 className="text-lg font-medium pt-4">Sustainability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Sustainability Score ({formData.sustainability?.score}%)</Label>
                <Slider
                  value={[formData.sustainability?.score || 50]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) =>
                    handleSustainabilityChange("score", value[0])
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbonFootprint">Carbon Footprint</Label>
                <Select
                  value={formData.sustainability?.carbonFootprint}
                  onValueChange={(value) =>
                    handleSustainabilityChange("carbonFootprint", value)
                  }
                >
                  <SelectTrigger id="carbonFootprint" className="eco-input">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Very Low">Very Low</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium-Low">Medium-Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Medium-High">Medium-High</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Very High">Very High</SelectItem>
                    <SelectItem value="Negative">
                      Negative (Carbon Sequestering)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="recyclable"
                  checked={formData.sustainability?.recyclable}
                  onCheckedChange={(checked) =>
                    handleSustainabilityChange("recyclable", checked)
                  }
                />
                <Label htmlFor="recyclable">Recyclable</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="renewable"
                  checked={formData.sustainability?.renewable}
                  onCheckedChange={(checked) =>
                    handleSustainabilityChange("renewable", checked)
                  }
                />
                <Label htmlFor="renewable">Renewable</Label>
              </div>
            </div>

            <h3 className="text-lg font-medium pt-4">Properties (1-10)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Durability ({formData.properties?.durability})</Label>
                <Slider
                  value={[formData.properties?.durability || 5]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    handlePropertiesChange("durability", value[0])
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Insulation ({formData.properties?.insulation})</Label>
                <Slider
                  value={[formData.properties?.insulation || 5]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    handlePropertiesChange("insulation", value[0])
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Fire Resistance ({formData.properties?.fireResistance})</Label>
                <Slider
                  value={[formData.properties?.fireResistance || 5]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    handlePropertiesChange("fireResistance", value[0])
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>
                  Moisture Resistance ({formData.properties?.moistureResistance})
                </Label>
                <Slider
                  value={[formData.properties?.moistureResistance || 5]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    handlePropertiesChange("moistureResistance", value[0])
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>
                  Cost Efficiency ({formData.properties?.costEfficiency})
                </Label>
                <Slider
                  value={[formData.properties?.costEfficiency || 5]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    handlePropertiesChange("costEfficiency", value[0])
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="applications">
                Applications (comma separated)
              </Label>
              <Textarea
                id="applications"
                value={formData.applications?.join(", ")}
                onChange={(e) => handleApplicationsChange(e.target.value)}
                rows={2}
                className="eco-input"
                placeholder="Residential flooring, Commercial spaces, Furniture"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pros">Pros (comma separated)</Label>
                <Textarea
                  id="pros"
                  value={formData.pros?.join(", ")}
                  onChange={(e) => handleProsChange(e.target.value)}
                  rows={3}
                  className="eco-input"
                  placeholder="Durable, Renewable, Low cost"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cons">Cons (comma separated)</Label>
                <Textarea
                  id="cons"
                  value={formData.cons?.join(", ")}
                  onChange={(e) => handleConsChange(e.target.value)}
                  rows={3}
                  className="eco-input"
                  placeholder="Susceptible to moisture, Limited availability"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              type="submit"
              className="bg-eco-green-dark hover:bg-eco-green-light text-white"
              disabled={isLoading}
            >
              {isLoading
                ? "Saving..."
                : material
                ? "Update Material"
                : "Add Material"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MaterialForm;
