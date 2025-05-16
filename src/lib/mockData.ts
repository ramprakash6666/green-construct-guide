
import { Material } from "./types";

export const mockMaterials: Material[] = [
  {
    id: "1",
    name: "Bamboo Flooring",
    category: "Flooring",
    description: "Bamboo is a highly sustainable and rapidly renewable resource that makes excellent flooring material. It grows to maturity in 3-5 years, compared to hardwoods which can take 20+ years.",
    sustainability: {
      score: 92,
      carbonFootprint: "Low",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 8,
      insulation: 6,
      fireResistance: 4,
      moistureResistance: 5,
      costEfficiency: 7,
    },
    applications: ["Residential flooring", "Commercial spaces", "Furniture"],
    imageUrl: "/bamboo-flooring.jpg",
    pros: [
      "Rapidly renewable",
      "Durable",
      "Attractive appearance",
      "Available in many styles",
      "Comparable price to hardwood"
    ],
    cons: [
      "Can be damaged by excessive moisture",
      "Quality varies by manufacturer",
      "Some products contain adhesives with VOCs"
    ]
  },
  {
    id: "2",
    name: "Recycled Steel Framing",
    category: "Structural",
    description: "Steel with recycled content reduces the energy needed for production by up to 75% compared to virgin steel and diverts waste from landfills.",
    sustainability: {
      score: 85,
      carbonFootprint: "Medium-Low",
      recyclable: true,
      renewable: false,
    },
    properties: {
      durability: 10,
      insulation: 2,
      fireResistance: 9,
      moistureResistance: 9,
      costEfficiency: 6,
    },
    applications: ["Structural framing", "Beams", "Columns", "Roofing"],
    imageUrl: "/recycled-steel.jpg",
    pros: [
      "Extremely strong and durable",
      "100% recyclable",
      "Resistant to pests, rot, and fire",
      "Reduces wood use",
      "Precise dimensions"
    ],
    cons: [
      "Higher initial cost than wood",
      "Requires specialized tools and skills",
      "Poor thermal insulation without additional materials"
    ]
  },
  {
    id: "3",
    name: "Hempcrete",
    category: "Insulation/Wall",
    description: "A biocomposite made from hemp hurds and lime that creates a lightweight, insulating material with excellent moisture management properties.",
    sustainability: {
      score: 95,
      carbonFootprint: "Negative (carbon sequestering)",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 7,
      insulation: 9,
      fireResistance: 8,
      moistureResistance: 8,
      costEfficiency: 5,
    },
    applications: ["Wall construction", "Insulation", "Non-load bearing walls"],
    imageUrl: "/hempcrete.jpg",
    pros: [
      "Carbon negative",
      "Excellent thermal and acoustic insulation",
      "Regulates humidity",
      "Breathable and prevents mold",
      "Fire resistant"
    ],
    cons: [
      "Not as widely available",
      "Higher cost than conventional materials",
      "Not suitable for load-bearing walls",
      "Requires skilled installation"
    ]
  },
  {
    id: "4",
    name: "Reclaimed Wood",
    category: "Multiple",
    description: "Wood salvaged from old structures, giving new life to existing materials and avoiding the environmental impact of harvesting new timber.",
    sustainability: {
      score: 90,
      carbonFootprint: "Very Low",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 9,
      insulation: 7,
      fireResistance: 3,
      moistureResistance: 6,
      costEfficiency: 6,
    },
    applications: ["Flooring", "Beams", "Furniture", "Accent walls", "Siding"],
    imageUrl: "/reclaimed-wood.jpg",
    pros: [
      "Unique character and appearance",
      "Prevents waste",
      "Often stronger than new wood (old-growth timber)",
      "No new trees harvested",
      "Often chemical-free"
    ],
    cons: [
      "Limited availability",
      "Can be more expensive than new wood",
      "May contain nails or other metals",
      "May require more labor to prepare"
    ]
  },
  {
    id: "5",
    name: "Cork Flooring",
    category: "Flooring/Insulation",
    description: "Harvested from cork oak trees without cutting them down, providing a sustainable, comfortable flooring option with natural insulation properties.",
    sustainability: {
      score: 88,
      carbonFootprint: "Low",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 6,
      insulation: 8,
      fireResistance: 5,
      moistureResistance: 7,
      costEfficiency: 6,
    },
    applications: ["Flooring", "Wall tiles", "Underlayment", "Acoustic insulation"],
    imageUrl: "/cork-flooring.jpg",
    pros: [
      "Harvested without harming trees",
      "Soft and comfortable underfoot",
      "Natural insulation properties",
      "Hypoallergenic and antimicrobial",
      "Sound absorbing"
    ],
    cons: [
      "Can be damaged by heavy furniture",
      "Susceptible to fading in direct sunlight",
      "May require periodic resealing",
      "Not suitable for wet areas without proper sealing"
    ]
  },
  {
    id: "6",
    name: "Straw Bale Construction",
    category: "Wall",
    description: "Using compressed straw bales as building blocks for walls, providing excellent insulation with an agricultural byproduct.",
    sustainability: {
      score: 93,
      carbonFootprint: "Negative (carbon sequestering)",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 7,
      insulation: 10,
      fireResistance: 7,
      moistureResistance: 4,
      costEfficiency: 9,
    },
    applications: ["Exterior walls", "Load-bearing walls (in some designs)"],
    imageUrl: "/straw-bale.jpg",
    pros: [
      "Exceptional insulation (R-30 to R-50)",
      "Uses agricultural waste product",
      "Low cost material",
      "Carbon sequestering",
      "Creates thick, solid-feeling walls"
    ],
    cons: [
      "Requires protection from moisture",
      "Specialized knowledge for construction",
      "Thicker walls reduce interior space",
      "Not suitable for all climates without proper detailing"
    ]
  },
  {
    id: "7",
    name: "Rammed Earth",
    category: "Wall",
    description: "An ancient technique using compressed earth mixtures to create solid, durable walls with excellent thermal mass.",
    sustainability: {
      score: 89,
      carbonFootprint: "Very Low",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 9,
      insulation: 7,
      fireResistance: 10,
      moistureResistance: 7,
      costEfficiency: 8,
    },
    applications: ["Exterior walls", "Interior feature walls", "Thermal mass"],
    imageUrl: "/rammed-earth.jpg",
    pros: [
      "Extremely durable (can last centuries)",
      "Excellent thermal mass",
      "Non-toxic and chemical-free",
      "Fire resistant",
      "Local materials reduce transportation emissions"
    ],
    cons: [
      "Labor intensive",
      "Requires proper design for seismic regions",
      "Needs proper foundation and roof detailing",
      "May need additional insulation in cold climates"
    ]
  },
  {
    id: "8",
    name: "Sheep's Wool Insulation",
    category: "Insulation",
    description: "Natural insulation material made from sheep's wool, offering excellent thermal and acoustic properties without harmful chemicals.",
    sustainability: {
      score: 91,
      carbonFootprint: "Low",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 8,
      insulation: 9,
      fireResistance: 6,
      moistureResistance: 8,
      costEfficiency: 5,
    },
    applications: ["Wall insulation", "Attic insulation", "Acoustic treatment"],
    imageUrl: "/wool-insulation.jpg",
    pros: [
      "Excellent thermal and acoustic insulation",
      "Natural moisture regulation",
      "Can absorb and neutralize indoor air pollutants",
      "Safe to handle without protective gear",
      "Renewable resource"
    ],
    cons: [
      "More expensive than conventional insulation",
      "Limited availability in some regions",
      "May require treatment against moths",
      "Higher transportation emissions if not locally sourced"
    ]
  },
  {
    id: "9",
    name: "Clay Plaster",
    category: "Finish",
    description: "A natural wall finish made from clay, sand, and fibers that provides a beautiful, breathable surface with no VOCs.",
    sustainability: {
      score: 94,
      carbonFootprint: "Very Low",
      recyclable: true,
      renewable: true,
    },
    properties: {
      durability: 6,
      insulation: 5,
      fireResistance: 7,
      moistureResistance: 5,
      costEfficiency: 8,
    },
    applications: ["Interior wall finish", "Decorative finish", "Moisture regulation"],
    imageUrl: "/clay-plaster.jpg",
    pros: [
      "Zero VOCs and non-toxic",
      "Regulates indoor humidity",
      "Can be locally sourced",
      "Beautiful natural appearance",
      "Can be repaired easily"
    ],
    cons: [
      "Less durable than some conventional finishes",
      "Not suitable for wet areas",
      "Requires more maintenance",
      "Labor intensive application"
    ]
  },
  {
    id: "10",
    name: "Recycled Glass Countertops",
    category: "Countertop",
    description: "Countertops made from crushed recycled glass embedded in cement or resin, creating a durable and attractive surface.",
    sustainability: {
      score: 86,
      carbonFootprint: "Medium-Low",
      recyclable: true,
      renewable: false,
    },
    properties: {
      durability: 8,
      insulation: 3,
      fireResistance: 8,
      moistureResistance: 9,
      costEfficiency: 6,
    },
    applications: ["Kitchen countertops", "Bathroom vanities", "Tables", "Bars"],
    imageUrl: "/recycled-glass-countertop.jpg",
    pros: [
      "Diverts glass from landfills",
      "Durable and long-lasting",
      "Resistant to heat and scratches",
      "Available in many colors and styles",
      "Low maintenance"
    ],
    cons: [
      "Can be expensive",
      "Heavy - requires strong cabinet support",
      "Some types require periodic sealing",
      "Cement-based options can crack if not properly supported"
    ]
  }
];

export const getRecommendations = (request: { 
  projectType: string; 
  climate: string; 
  budget: string; 
  priority: string;
  application: string;
}) => {
  // This would normally be handled by an AI model
  // For this demo, we'll use a simple filtering approach

  let filteredMaterials = [...mockMaterials];
  const reasonings: string[] = [];

  // Apply filters based on project type
  if (request.projectType === "residential") {
    // Prioritize comfortable, health-focused materials
    filteredMaterials = filteredMaterials.filter(m => 
      m.sustainability.score > 75
    );
    reasonings.push("Selected materials with high sustainability scores suitable for residential use.");
  } else if (request.projectType === "commercial") {
    // Prioritize durability
    filteredMaterials = filteredMaterials.filter(m => 
      m.properties.durability >= 8
    );
    reasonings.push("Selected materials with excellent durability for commercial applications.");
  }

  // Apply climate considerations
  if (request.climate === "cold") {
    // Prioritize insulation
    filteredMaterials.sort((a, b) => b.properties.insulation - a.properties.insulation);
    reasonings.push("Prioritized materials with better insulation properties for cold climates.");
  } else if (request.climate === "hot") {
    // Prioritize heat resistance
    filteredMaterials.sort((a, b) => b.properties.fireResistance - a.properties.fireResistance);
    reasonings.push("Prioritized materials with better heat resistance for hot climates.");
  } else if (request.climate === "humid") {
    // Prioritize moisture resistance
    filteredMaterials.sort((a, b) => b.properties.moistureResistance - a.properties.moistureResistance);
    reasonings.push("Prioritized materials with better moisture resistance for humid climates.");
  }

  // Apply budget filter
  if (request.budget === "low") {
    filteredMaterials = filteredMaterials.filter(m => m.properties.costEfficiency >= 7);
    reasonings.push("Selected cost-effective materials to match your budget constraints.");
  } else if (request.budget === "high") {
    // For high budget, don't filter, but maybe prioritize premium options
    filteredMaterials.sort((a, b) => b.sustainability.score - a.sustainability.score);
    reasonings.push("Since budget is not a major constraint, prioritized materials with the highest sustainability scores.");
  }

  // Apply priority filter
  if (request.priority === "sustainability") {
    filteredMaterials.sort((a, b) => b.sustainability.score - a.sustainability.score);
    reasonings.push("Prioritized materials with the highest sustainability ratings.");
  } else if (request.priority === "durability") {
    filteredMaterials.sort((a, b) => b.properties.durability - a.properties.durability);
    reasonings.push("Prioritized materials with the highest durability ratings.");
  } else if (request.priority === "cost") {
    filteredMaterials.sort((a, b) => b.properties.costEfficiency - a.properties.costEfficiency);
    reasonings.push("Prioritized materials based on cost efficiency.");
  }

  // Filter by application if specific
  if (request.application && request.application !== "all") {
    filteredMaterials = filteredMaterials.filter(m => 
      m.category.toLowerCase().includes(request.application.toLowerCase()) || 
      m.applications.some(a => a.toLowerCase().includes(request.application.toLowerCase()))
    );
    reasonings.push(`Filtered materials suitable for ${request.application} applications.`);
  }

  // Return top results (maximum 5)
  return {
    materials: filteredMaterials.slice(0, 5),
    reasonings
  };
};
