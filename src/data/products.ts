export interface Product {
  id: string;
  name: string;
  category: 'milk' | 'cheese' | 'butter-ghee' | 'yogurt-cream';
  description: string;
  price: number;
  image: string; // SVG data or path identifier
  specs: string[]; // e.g. ["A2 Premium", "100% Organic", "Grass Fed"]
  volume: string; // e.g. "1 Litre", "500 Grams"
}

export const products: Product[] = [
  {
    id: 'milk-01',
    name: 'Imperial A2 Milk',
    category: 'milk',
    description: 'Bespoke pure cow milk enriched with A2 beta-casein proteins, sourced exclusively from heritage pastures.',
    price: 9.50,
    image: 'milk',
    specs: ['A2 Premium', '100% Organic', 'Non-Homogenized'],
    volume: '1 Litre',
  },
  {
    id: 'milk-02',
    name: 'Golden Cream Whole Milk',
    category: 'milk',
    description: 'High-fat, rich whole milk pasteurized gently to retain natural minerals, sweet flavors, and nutrient profiles.',
    price: 8.00,
    image: 'milk',
    specs: ['Full Cream', 'Pasture Raised', 'Glass Bottle'],
    volume: '1 Litre',
  },
  {
    id: 'cheese-01',
    name: 'Royal Heritage Cheddar',
    category: 'cheese',
    description: 'Aged for 24 months in volcanic caves, this cheddar features sharp crystal deposits and an intense, earthy finish.',
    price: 24.00,
    image: 'cheese',
    specs: ['24-Month Aged', 'Cave Matured', 'Artisanal'],
    volume: '300 Grams',
  },
  {
    id: 'cheese-02',
    name: 'Crown Reserve Blue Cheese',
    category: 'cheese',
    description: 'Ultra-creamy blue-veined cheese crafted with double cream, exhibiting a bold, tangy aroma and velvety mouthfeel.',
    price: 28.50,
    image: 'cheese',
    specs: ['Double Cream', 'Award Winner', 'Bold Profile'],
    volume: '200 Grams',
  },
  {
    id: 'butter-01',
    name: 'Golden Ghee Reserve',
    category: 'butter-ghee',
    description: 'Traditional slow-clarified butter simmered over open fires, yielding a rich, nutty flavor profile and high smoke point.',
    price: 32.00,
    image: 'ghee',
    specs: ['Slow Clarified', 'Grass Fed', 'High Smoke Point'],
    volume: '400 Millilitres',
  },
  {
    id: 'butter-02',
    name: 'Prestige Cultured Butter',
    category: 'butter-ghee',
    description: 'European-style churned butter with active lactic cultures and hand-harvested sea salt crystals.',
    price: 12.50,
    image: 'butter',
    specs: ['84% Butterfat', 'Cultured', 'Fleur de Sel'],
    volume: '250 Grams',
  },
  {
    id: 'yogurt-01',
    name: 'Ambrosia Greek Yogurt',
    category: 'yogurt-cream',
    description: 'Triple-strained, thick, and velvety Greek yogurt, offering clean protein density with zero additives.',
    price: 11.00,
    image: 'yogurt',
    specs: ['Triple Strained', 'Probiotic Rich', 'No Added Sugar'],
    volume: '500 Grams',
  },
  {
    id: 'cream-01',
    name: 'Velvet Fresh Double Cream',
    category: 'yogurt-cream',
    description: 'Luxuriously thick fresh double cream, ideal for pairing with fine desserts or whipping into peak textures.',
    price: 9.00,
    image: 'cream',
    specs: ['48% Butterfat', 'Ultra Thick', 'Gently Sweet'],
    volume: '300 Millilitres',
  },
];
