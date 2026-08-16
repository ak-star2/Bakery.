export type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  ingredients: string;
  price: string;
  image: string;
};

export const productsData: Product[] = [
  {
    id: "p1",
    category: "Viennoiserie",
    name: "Classic Croissant",
    description:
      "Our signature croissant, featuring 27 distinct layers of European butter and cold-fermented dough for unparalleled shatter and flavor.",
    ingredients:
      "Organic AP Flour, Isigny Ste Mère Butter, Filtered Water, Levain, Sea Salt, Sugar, Yeast.",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f40ce8877?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p2",
    category: "Pâtisserie",
    name: "Framboise Tart",
    description:
      "A delicate vanilla sweet tart shell filled with whipped pistachio ganache and crowned with fresh, hand-selected raspberries.",
    ingredients:
      "Almond Flour, Butter, Sugar, Eggs, Pistachio Paste, White Chocolate, Fresh Raspberries.",
    price: "$8.00",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p3",
    category: "Sourdough",
    name: "Country Loaf",
    description:
      "Our daily sourdough. Naturally leavened, highly hydrated, and baked dark for a deeply caramelized crust and an open, creamy crumb.",
    ingredients:
      "Organic Bread Flour, Organic Whole Wheat Flour, Filtered Water, Levain, Fine Sea Salt.",
    price: "$12.00",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p4",
    category: "Pâtisserie",
    name: "Vanilla Bean Éclair",
    description:
      "Crisp choux pastry filled with a silky Madagascar vanilla bean diplomat cream, finished with a crisp white chocolate craquelin.",
    ingredients:
      "Water, Butter, Flour, Eggs, Milk, Sugar, Madagascar Vanilla Bean, White Chocolate.",
    price: "$7.50",
    image:
      "https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p5",
    category: "Sourdough",
    name: "Olive & Thyme",
    description:
      "A savory variation of our country sourdough, studded with Kalamata olives and fresh organic thyme.",
    ingredients:
      "Organic Bread Flour, Water, Levain, Kalamata Olives, Fresh Thyme, Sea Salt.",
    price: "$14.00",
    image:
      "https://images.unsplash.com/photo-1509365465994-3e5369870711?q=80&w=1000&auto=format&fit=crop",
  },
];
