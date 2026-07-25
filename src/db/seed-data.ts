export type SeedCategory = {
  slug: string;
  nameEn: string;
  namePt: string;
  sortOrder: number;
};

export type SeedItem = {
  categorySlug: string;
  name: string;
  descriptionEn: string;
  descriptionPt: string;
  priceEuros: string;
  isVeg: boolean;
  isSpicy: boolean;
  sortOrder: number;
};

export const seedCategories: SeedCategory[] = [
  { slug: "momo", nameEn: "Momo", namePt: "Momo", sortOrder: 0 },
  { slug: "grill", nameEn: "Grill & Sekuwa", namePt: "Grelhados & Sekuwa", sortOrder: 1 },
  { slug: "curry", nameEn: "Curries & Dal", namePt: "Caris & Dal", sortOrder: 2 },
  { slug: "sides", nameEn: "Noodles & Sides", namePt: "Noodles & Acompanhamentos", sortOrder: 3 },
  { slug: "drinks", nameEn: "Drinks", namePt: "Bebidas", sortOrder: 4 },
];

export const seedItems: SeedItem[] = [
  // Momo
  { categorySlug: "momo", name: "Chicken Momo", descriptionEn: "Steamed or fried · 10 pcs", descriptionPt: "Ao vapor ou frito · 10 un", priceEuros: "8.50", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "momo", name: "Buff Momo", descriptionEn: "Water-buffalo, the Nepali way · 10 pcs", descriptionPt: "Búfalo, à moda nepalesa · 10 un", priceEuros: "9.00", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "momo", name: "Veg Momo", descriptionEn: "Cabbage, carrot, paneer · 10 pcs", descriptionPt: "Couve, cenoura, paneer · 10 un", priceEuros: "7.50", isVeg: true, isSpicy: false, sortOrder: 2 },
  { categorySlug: "momo", name: "Jhol Momo", descriptionEn: "In warm sesame-tomato broth", descriptionPt: "Em caldo de sésamo e tomate", priceEuros: "10.00", isVeg: false, isSpicy: true, sortOrder: 3 },
  { categorySlug: "momo", name: "C. Momo (Chilli)", descriptionEn: "Tossed in garlic-chilli sauce", descriptionPt: "Salteado em molho de alho e malagueta", priceEuros: "10.50", isVeg: false, isSpicy: false, sortOrder: 4 },
  { categorySlug: "momo", name: "Kothey Momo", descriptionEn: "Pan-seared half-moon dumplings", descriptionPt: "Dumplings meia-lua salteados", priceEuros: "9.50", isVeg: false, isSpicy: false, sortOrder: 5 },
  // Grill
  { categorySlug: "grill", name: "Chicken Sekuwa", descriptionEn: "Charcoal-grilled, timur pepper", descriptionPt: "Grelhado no carvão, pimenta timur", priceEuros: "13.00", isVeg: false, isSpicy: true, sortOrder: 0 },
  { categorySlug: "grill", name: "Lamb Sekuwa", descriptionEn: "Marinated lamb skewers", descriptionPt: "Espetadas de borrego marinado", priceEuros: "15.50", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "grill", name: "Sukuti Sadeko", descriptionEn: "Dried spiced meat, onion, chilli", descriptionPt: "Carne seca picante, cebola, malagueta", priceEuros: "11.00", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "grill", name: "Chicken Choila", descriptionEn: "Newari smoked chicken, mustard oil", descriptionPt: "Frango fumado newari, óleo de mostarda", priceEuros: "9.50", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "grill", name: "Tandoori Chicken", descriptionEn: "Half bird, clay-oven roasted", descriptionPt: "Meio frango, assado em forno de barro", priceEuros: "12.50", isVeg: false, isSpicy: false, sortOrder: 4 },
  { categorySlug: "grill", name: "Paneer Tikka", descriptionEn: "Chargrilled cottage cheese", descriptionPt: "Queijo fresco grelhado", priceEuros: "10.50", isVeg: true, isSpicy: false, sortOrder: 5 },
  // Curry
  { categorySlug: "curry", name: "Thakali Thali", descriptionEn: "Rice, dal, curry, greens, pickle", descriptionPt: "Arroz, dal, caril, verduras, pickle", priceEuros: "14.50", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "curry", name: "Dal Bhat", descriptionEn: "Lentil soup, rice, seasonal veg", descriptionPt: "Sopa de lentilhas, arroz, legumes", priceEuros: "12.00", isVeg: true, isSpicy: false, sortOrder: 1 },
  { categorySlug: "curry", name: "Goat Curry", descriptionEn: "Bone-in, slow-cooked Himalayan style", descriptionPt: "Com osso, cozinhado lento à himalaia", priceEuros: "15.00", isVeg: false, isSpicy: true, sortOrder: 2 },
  { categorySlug: "curry", name: "Chicken Curry", descriptionEn: "Home-style masala gravy", descriptionPt: "Molho masala caseiro", priceEuros: "12.00", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "curry", name: "Paneer Butter Masala", descriptionEn: "Creamy tomato & cashew", descriptionPt: "Tomate cremoso & caju", priceEuros: "11.50", isVeg: true, isSpicy: false, sortOrder: 4 },
  { categorySlug: "curry", name: "Aloo Tama", descriptionEn: "Bamboo shoot, potato, black-eyed pea", descriptionPt: "Broto de bambu, batata, feijão frade", priceEuros: "10.50", isVeg: true, isSpicy: false, sortOrder: 5 },
  // Sides
  { categorySlug: "sides", name: "Chicken Chowmein", descriptionEn: "Wok noodles, Nepali spices", descriptionPt: "Noodles de wok, especiarias nepalesas", priceEuros: "9.00", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "sides", name: "Veg Thukpa", descriptionEn: "Himalayan noodle soup", descriptionPt: "Sopa de noodles himalaia", priceEuros: "8.50", isVeg: true, isSpicy: false, sortOrder: 1 },
  { categorySlug: "sides", name: "Sel Roti", descriptionEn: "Sweet ring-shaped rice bread · 2 pcs", descriptionPt: "Pão de arroz doce em anel · 2 un", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "sides", name: "Garlic Naan", descriptionEn: "Clay-oven flatbread", descriptionPt: "Pão do forno de barro", priceEuros: "3.50", isVeg: true, isSpicy: false, sortOrder: 3 },
  { categorySlug: "sides", name: "Aloo Achar", descriptionEn: "Spiced potato & sesame salad", descriptionPt: "Salada de batata & sésamo picante", priceEuros: "5.00", isVeg: true, isSpicy: false, sortOrder: 4 },
  { categorySlug: "sides", name: "Juju Dhau", descriptionEn: "\"King curd\" — Bhaktapur yoghurt", descriptionPt: "\"Iogurte-rei\" — de Bhaktapur", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 5 },
  // Drinks
  { categorySlug: "drinks", name: "Masala Chai", descriptionEn: "Spiced Himalayan milk tea", descriptionPt: "Chá de leite himalaio especiado", priceEuros: "3.00", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "drinks", name: "Sweet / Mango Lassi", descriptionEn: "Whipped yoghurt drink", descriptionPt: "Bebida de iogurte batido", priceEuros: "4.00", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "drinks", name: "Super Bock / Sagres", descriptionEn: "Portuguese lager · 33cl", descriptionPt: "Cerveja portuguesa · 33cl", priceEuros: "2.50", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "drinks", name: "Gorkha Beer", descriptionEn: "Nepali lager · 33cl", descriptionPt: "Cerveja nepalesa · 33cl", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "drinks", name: "Vinho da Casa", descriptionEn: "House red / white · glass", descriptionPt: "Tinto / branco da casa · copo", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 4 },
  { categorySlug: "drinks", name: "Tongba", descriptionEn: "Warm millet drink (seasonal)", descriptionPt: "Bebida quente de painço (sazonal)", priceEuros: "6.00", isVeg: false, isSpicy: false, sortOrder: 5 },
];
