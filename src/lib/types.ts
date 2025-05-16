
export interface Material {
  id: string;
  name: string;
  category: string;
  description: string;
  sustainability: {
    score: number; // 1-100
    carbonFootprint: string;
    recyclable: boolean;
    renewable: boolean;
  };
  properties: {
    durability: number; // 1-10
    insulation: number; // 1-10
    fireResistance: number; // 1-10
    moistureResistance: number; // 1-10
    costEfficiency: number; // 1-10
  };
  applications: string[];
  imageUrl: string;
  pros: string[];
  cons: string[];
}

export interface RecommendationRequest {
  projectType: string;
  climate: string;
  budget: string;
  priority: string;
  application: string;
}

export interface RecommendationResponse {
  materials: Material[];
  reasonings: string[];
}
