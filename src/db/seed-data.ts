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
  { slug: "starters", nameEn: "Starters", namePt: "Entradas", sortOrder: 0 },
  { slug: "burgers-bread", nameEn: "Burgers & Bread", namePt: "Hambúrgueres & Pão", sortOrder: 1 },
  { slug: "nepali-food", nameEn: "Nepali Food", namePt: "Comida Nepali", sortOrder: 2 },
  { slug: "special-sets", nameEn: "Special Sets", namePt: "Conjuntos Especiais", sortOrder: 3 },
  { slug: "salads", nameEn: "Salads", namePt: "Saladas", sortOrder: 4 },
  { slug: "pasta", nameEn: "Pasta", namePt: "Massas", sortOrder: 5 },
  { slug: "beer", nameEn: "Beer", namePt: "Cerveja", sortOrder: 6 },
  { slug: "whiskey", nameEn: "Whiskey", namePt: "Whisky", sortOrder: 7 },
  { slug: "gin", nameEn: "Gin", namePt: "Gin", sortOrder: 8 },
  { slug: "liqueurs", nameEn: "Liqueurs", namePt: "Licores", sortOrder: 9 },
  { slug: "wine", nameEn: "Wine", namePt: "Vinhos", sortOrder: 10 },
  { slug: "vodka-tequila", nameEn: "Vodka & Tequila", namePt: "Vodka & Tequila", sortOrder: 11 },
  { slug: "sangria", nameEn: "Sangria", namePt: "Sangria", sortOrder: 12 },
];

export const seedItems: SeedItem[] = [
  // Starters / Entradas
  { categorySlug: "starters", name: "Aalu Jeera", descriptionEn: "Potato with cumin", descriptionPt: "Batata com cominho", priceEuros: "3.50", isVeg: true, isSpicy: false, sortOrder: 0 },
  { categorySlug: "starters", name: "Chicken Samosa (2 Pcs)", descriptionEn: "Crispy pastry filled with spiced chicken", descriptionPt: "Chamuça de frango, massa crocante com temperos", priceEuros: "2.99", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "starters", name: "Samosa Veg (2 Pcs)", descriptionEn: "Crispy pastry with spiced vegetables", descriptionPt: "Chamuça de legumes, massa crocante com temperos", priceEuros: "2.50", isVeg: true, isSpicy: false, sortOrder: 2 },
  { categorySlug: "starters", name: "French Fries", descriptionEn: "Golden crispy potato fries", descriptionPt: "Batatas fritas", priceEuros: "3.50", isVeg: true, isSpicy: false, sortOrder: 3 },
  { categorySlug: "starters", name: "Chatpate", descriptionEn: "Spicy puffed rice with vegetables", descriptionPt: "Arroz tufado com legumes e especiarias", priceEuros: "4.00", isVeg: true, isSpicy: true, sortOrder: 4 },
  { categorySlug: "starters", name: "Gilo Chatpate", descriptionEn: "Spicy puffed rice with vegetables", descriptionPt: "Arroz tufado com legumes e especiarias", priceEuros: "4.00", isVeg: true, isSpicy: true, sortOrder: 5 },
  { categorySlug: "starters", name: "Panipuri", descriptionEn: "Crispy balls with spiced water", descriptionPt: "Bolinhas crocantes com água temperada", priceEuros: "4.99", isVeg: true, isSpicy: false, sortOrder: 6 },
  { categorySlug: "starters", name: "Wai Wai Sadheko", descriptionEn: "Stir-fried instant noodles with spices", descriptionPt: "Macarrão instantâneo salteado com especiarias", priceEuros: "3.99", isVeg: true, isSpicy: false, sortOrder: 7 },
  { categorySlug: "starters", name: "Chicken Sadheko", descriptionEn: "Spicy marinated chicken salad", descriptionPt: "Salada de frango picante e temperada", priceEuros: "6.50", isVeg: false, isSpicy: true, sortOrder: 8 },
  { categorySlug: "starters", name: "Soybean Chhoila", descriptionEn: "Marinated soy chunks, Nepali style", descriptionPt: "Pedaços de soja marinados ao estilo do Nepal", priceEuros: "4.99", isVeg: true, isSpicy: false, sortOrder: 9 },
  { categorySlug: "starters", name: "Chicken Nuggets (6 pcs)", descriptionEn: "Chicken nuggets", descriptionPt: "Nuggets de frango", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 10 },
  { categorySlug: "starters", name: "Chilly Chicken", descriptionEn: "Spicy chicken, Nepali style", descriptionPt: "Frango picante, ao estilo nepalês", priceEuros: "7.99", isVeg: false, isSpicy: true, sortOrder: 11 },
  { categorySlug: "starters", name: "Kathi Rolls (Veg/Chicken/Egg)", descriptionEn: "Soft flatbread rolled with filling", descriptionPt: "Pão macio enrolado com recheio", priceEuros: "4.00", isVeg: false, isSpicy: false, sortOrder: 12 },
  { categorySlug: "starters", name: "Bhatmas Sadheko", descriptionEn: "Spicy roasted soybeans", descriptionPt: "Soja torrada e picante", priceEuros: "3.50", isVeg: true, isSpicy: true, sortOrder: 13 },
  { categorySlug: "starters", name: "Chicken Wrap", descriptionEn: "Soft tortilla with grilled chicken, fresh vegetables and sauce", descriptionPt: "Tortilha com frango grelhado, vegetais frescos e molho", priceEuros: "4.99", isVeg: false, isSpicy: false, sortOrder: 14 },
  { categorySlug: "starters", name: "Sausage Fry (2 Pcs)", descriptionEn: "Fried sausage", descriptionPt: "Salsicha frita", priceEuros: "3.99", isVeg: false, isSpicy: false, sortOrder: 15 },
  { categorySlug: "starters", name: "Khasi Bhutun Fry", descriptionEn: "", descriptionPt: "", priceEuros: "7.50", isVeg: false, isSpicy: false, sortOrder: 16 },
  { categorySlug: "starters", name: "Pork Fry", descriptionEn: "Fried pork", descriptionPt: "Porco frito", priceEuros: "7.00", isVeg: false, isSpicy: false, sortOrder: 17 },
  { categorySlug: "starters", name: "Pangra Fry", descriptionEn: "", descriptionPt: "", priceEuros: "5.99", isVeg: false, isSpicy: false, sortOrder: 18 },

  // Burgers & Bread / Hambúrgueres & Pão
  { categorySlug: "burgers-bread", name: "Veg Burger", descriptionEn: "Vegetarian burger combo", descriptionPt: "Combo de hambúrguer vegetariano", priceEuros: "6.99", isVeg: true, isSpicy: false, sortOrder: 0 },
  { categorySlug: "burgers-bread", name: "Chicken Burger Set", descriptionEn: "Chicken burger combo", descriptionPt: "Combo de hambúrguer de frango", priceEuros: "6.99", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "burgers-bread", name: "Hamburger Set", descriptionEn: "Beef burger combo", descriptionPt: "Combo hambúrguer de carne bovina", priceEuros: "7.99", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "burgers-bread", name: "Double Hamburger Set", descriptionEn: "Double burger combo", descriptionPt: "Combo de hambúrguer duplo", priceEuros: "8.99", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "burgers-bread", name: "Bifana", descriptionEn: "Traditional Portuguese pork sandwich", descriptionPt: "Sanduíche tradicional português de porco", priceEuros: "3.99", isVeg: false, isSpicy: false, sortOrder: 4 },
  { categorySlug: "burgers-bread", name: "Bifana Set", descriptionEn: "Bifana with drink and fries", descriptionPt: "Bifana com bebida e batatas fritas", priceEuros: "6.50", isVeg: false, isSpicy: false, sortOrder: 5 },
  { categorySlug: "burgers-bread", name: "Tortilla Sandwich", descriptionEn: "Tortilla sandwich", descriptionPt: "Sanduíche tortilha", priceEuros: "6.99", isVeg: false, isSpicy: false, sortOrder: 6 },
  { categorySlug: "burgers-bread", name: "Tortilla Roll with Espresso", descriptionEn: "Tortilla roll with an espresso", descriptionPt: "Rolo de tortilha com espresso", priceEuros: "5.99", isVeg: false, isSpicy: false, sortOrder: 7 },
  { categorySlug: "burgers-bread", name: "Egg Sandwich", descriptionEn: "Egg sandwich", descriptionPt: "Sanduíche de ovo", priceEuros: "4.99", isVeg: true, isSpicy: false, sortOrder: 8 },
  { categorySlug: "burgers-bread", name: "English Breakfast", descriptionEn: "Served with a cup of coffee", descriptionPt: "Pequeno-almoço inglês servido com café", priceEuros: "7.50", isVeg: false, isSpicy: false, sortOrder: 9 },

  // Nepali Food / Comida Nepali
  { categorySlug: "nepali-food", name: "Veg Chowmein", descriptionEn: "Stir-fried noodles with vegetables", descriptionPt: "Noodles fritos com legumes", priceEuros: "6.99", isVeg: true, isSpicy: false, sortOrder: 0 },
  { categorySlug: "nepali-food", name: "Chicken Chowmein", descriptionEn: "Stir-fried noodles with chicken", descriptionPt: "Noodles fritos com mistura de vegetais e frango", priceEuros: "7.99", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "nepali-food", name: "Pork Chowmein", descriptionEn: "Stir-fried noodles with pork", descriptionPt: "Noodles fritos com porco", priceEuros: "7.99", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "nepali-food", name: "Egg Chowmein", descriptionEn: "Stir-fried noodles with egg", descriptionPt: "Noodles fritos com ovo", priceEuros: "7.50", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "nepali-food", name: "Prawn Chowmein", descriptionEn: "Stir-fried noodles with prawn & vegetables", descriptionPt: "Noodles fritos salteados com camarão e legumes", priceEuros: "8.50", isVeg: false, isSpicy: false, sortOrder: 4 },
  { categorySlug: "nepali-food", name: "Mix Chowmein", descriptionEn: "Stir-fried noodles with chicken, pork, egg & vegetables", descriptionPt: "Noodles fritos com frango, porco, ovo e legumes", priceEuros: "8.99", isVeg: false, isSpicy: false, sortOrder: 5 },
  { categorySlug: "nepali-food", name: "Rice with Chicken Curry", descriptionEn: "", descriptionPt: "", priceEuros: "8.50", isVeg: false, isSpicy: false, sortOrder: 6 },
  { categorySlug: "nepali-food", name: "Rice with Veg Curry", descriptionEn: "", descriptionPt: "", priceEuros: "7.50", isVeg: true, isSpicy: false, sortOrder: 7 },
  { categorySlug: "nepali-food", name: "Rice & Chicken", descriptionEn: "Served with plain rice, fried chicken, and fresh salad", descriptionPt: "Servido com arroz branco, frango frito e salada fresca", priceEuros: "9.00", isVeg: false, isSpicy: false, sortOrder: 8 },
  { categorySlug: "nepali-food", name: "Chicken MoMo", descriptionEn: "Steamed dumplings filled with chicken", descriptionPt: "Dumplings cozidos com recheio de frango", priceEuros: "7.99", isVeg: false, isSpicy: false, sortOrder: 9 },
  { categorySlug: "nepali-food", name: "Veg MoMo", descriptionEn: "Steamed dumplings filled with vegetables", descriptionPt: "Dumplings cozidos com legumes", priceEuros: "6.99", isVeg: true, isSpicy: false, sortOrder: 10 },
  { categorySlug: "nepali-food", name: "Jhol MoMo (Chicken/Veg)", descriptionEn: "Steamed dumplings served in a spicy, citric soup", descriptionPt: "Momo cozidos servidos em uma sopa picante e levemente cítrica", priceEuros: "8.99", isVeg: false, isSpicy: true, sortOrder: 11 },
  { categorySlug: "nepali-food", name: "Chili Momos (Chicken/Veg)", descriptionEn: "Steamed dumplings in spicy chili sauce", descriptionPt: "Dumplings cozidos em molho picante", priceEuros: "8.99", isVeg: false, isSpicy: true, sortOrder: 12 },

  // Special Sets / Conjuntos Especiais
  { categorySlug: "special-sets", name: "Nepali Thali Set", descriptionEn: "Original Nepali Thali Set for 5 or more persons (advance booking of minimum 3 hours)", descriptionPt: "Conjunto Thali Nepali original para 5 ou mais pessoas (reserva com um mínimo de 3 horas de antecedência)", priceEuros: "11.99", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "special-sets", name: "Eurasia Signature Platter", descriptionEn: "A delicious combination of crispy fried chicken, steamed rice, fresh green salad, and golden potato fries, served with soft drinks", descriptionPt: "Uma deliciosa combinação de frango frito crocante, arroz branco, salada verde fresca e batatas fritas douradas, servido com refrigerante", priceEuros: "12.50", isVeg: false, isSpicy: false, sortOrder: 1 },

  // Salads / Saladas
  { categorySlug: "salads", name: "Mix Veg Salad", descriptionEn: "Fresh seasonal vegetables with light dressing", descriptionPt: "Legumes frescos da estação com molho leve", priceEuros: "4.99", isVeg: true, isSpicy: false, sortOrder: 0 },
  { categorySlug: "salads", name: "Apple Salad", descriptionEn: "Apple salad", descriptionPt: "Salada de maçã", priceEuros: "5.50", isVeg: true, isSpicy: false, sortOrder: 1 },
  { categorySlug: "salads", name: "Caprese Salad", descriptionEn: "Fresh mozzarella, tomato, and balsamic", descriptionPt: "Mozzarella fresca, tomate e balsâmico", priceEuros: "5.99", isVeg: true, isSpicy: false, sortOrder: 2 },

  // Pasta / Massas
  { categorySlug: "pasta", name: "Pasta with Mushroom Sauce", descriptionEn: "Pasta with mushroom sauce", descriptionPt: "Massa com molho de cogumelos", priceEuros: "6.99", isVeg: true, isSpicy: false, sortOrder: 0 },
  { categorySlug: "pasta", name: "Spaghetti with Mushroom Sauce", descriptionEn: "Spaghetti with mushroom sauce", descriptionPt: "Esparguete com molho de cogumelos", priceEuros: "6.99", isVeg: true, isSpicy: false, sortOrder: 1 },
  { categorySlug: "pasta", name: "Spaghetti with Mushroom Sauce (Chicken or Pork)", descriptionEn: "Spaghetti with mushroom sauce, chicken or pork", descriptionPt: "Espaguete com molho de cogumelos e frango ou porco", priceEuros: "7.99", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "pasta", name: "Pasta with Mushroom Sauce (Chicken or Pork)", descriptionEn: "Pasta with mushroom sauce, chicken or pork", descriptionPt: "Massa com molho de cogumelos e frango ou porco", priceEuros: "7.99", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "pasta", name: "Ramen Veg", descriptionEn: "Vegetarian ramen with mixed vegetables and noodles", descriptionPt: "Ramen vegetariano — mistura de legumes e macarrão", priceEuros: "6.99", isVeg: true, isSpicy: false, sortOrder: 4 },
  { categorySlug: "pasta", name: "Ramen Egg", descriptionEn: "Ramen with egg, mixed vegetables and noodles", descriptionPt: "Ramen com ovo — mistura de legumes, ovo e macarrão", priceEuros: "7.99", isVeg: false, isSpicy: false, sortOrder: 5 },
  { categorySlug: "pasta", name: "Ramen Chicken or Pork", descriptionEn: "Ramen with mixed vegetables, noodles and pork or chicken", descriptionPt: "Ramen de frango ou porco — mistura de legumes, macarrão e frango ou porco", priceEuros: "9.50", isVeg: false, isSpicy: false, sortOrder: 6 },

  // Beer / Cerveja
  { categorySlug: "beer", name: "Sagres / Super Bock (1L)", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "beer", name: "Sagres / Super Bock (330ml)", descriptionEn: "", descriptionPt: "", priceEuros: "1.50", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "beer", name: "Sagres / Super Bock (220ml)", descriptionEn: "", descriptionPt: "", priceEuros: "1.10", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "beer", name: "Somersby", descriptionEn: "", descriptionPt: "", priceEuros: "2.50", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "beer", name: "Draft Beer", descriptionEn: "", descriptionPt: "", priceEuros: "1.00", isVeg: false, isSpicy: false, sortOrder: 4 },
  { categorySlug: "beer", name: "Pint", descriptionEn: "", descriptionPt: "", priceEuros: "2.50", isVeg: false, isSpicy: false, sortOrder: 5 },

  // Whiskey / Whisky
  { categorySlug: "whiskey", name: "Jameson Select", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "whiskey", name: "Jack Daniel's", descriptionEn: "", descriptionPt: "", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "whiskey", name: "Black Label", descriptionEn: "", descriptionPt: "", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "whiskey", name: "Red Label", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "whiskey", name: "Famous Grouse", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 4 },
  { categorySlug: "whiskey", name: "Grant's", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 5 },
  { categorySlug: "whiskey", name: "Ballantines", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 6 },

  // Gin
  { categorySlug: "gin", name: "Beefeater Dry", descriptionEn: "", descriptionPt: "", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "gin", name: "Bombay Dry", descriptionEn: "", descriptionPt: "", priceEuros: "4.50", isVeg: false, isSpicy: false, sortOrder: 1 },

  // Liqueurs / Licores
  { categorySlug: "liqueurs", name: "Ginjinha", descriptionEn: "", descriptionPt: "", priceEuros: "2.50", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "liqueurs", name: "Amarguinha", descriptionEn: "", descriptionPt: "", priceEuros: "2.50", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "liqueurs", name: "Baileys", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "liqueurs", name: "Licor Beirão", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 3 },
  { categorySlug: "liqueurs", name: "Macieira", descriptionEn: "", descriptionPt: "", priceEuros: "3.00", isVeg: false, isSpicy: false, sortOrder: 4 },

  // Wine / Vinhos
  { categorySlug: "wine", name: "Porto Tawny", descriptionEn: "", descriptionPt: "", priceEuros: "4.00", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "wine", name: "Porto White", descriptionEn: "", descriptionPt: "", priceEuros: "4.00", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "wine", name: "Monte Velho Red", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 2 },
  { categorySlug: "wine", name: "Monte Velho White", descriptionEn: "", descriptionPt: "", priceEuros: "3.50", isVeg: false, isSpicy: false, sortOrder: 3 },

  // Vodka & Tequila
  { categorySlug: "vodka-tequila", name: "Eristoff", descriptionEn: "", descriptionPt: "", priceEuros: "4.00", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "vodka-tequila", name: "Absolut", descriptionEn: "", descriptionPt: "", priceEuros: "4.00", isVeg: false, isSpicy: false, sortOrder: 1 },
  { categorySlug: "vodka-tequila", name: "Tequila (50 ml)", descriptionEn: "", descriptionPt: "", priceEuros: "3.00", isVeg: false, isSpicy: false, sortOrder: 2 },

  // Sangria
  { categorySlug: "sangria", name: "White Sangria", descriptionEn: "Fruity white sangria", descriptionPt: "Sangria branca frutada — Brandy Constantino, Vodka, Moscatel, açúcar mascavado, gasosa, gelo, vinho branco, hortelã, laranja, canela, maçã e limão", priceEuros: "12.00", isVeg: false, isSpicy: false, sortOrder: 0 },
  { categorySlug: "sangria", name: "Red Sangria", descriptionEn: "Fruity red sangria", descriptionPt: "Sangria tinta frutada — Brandy Constantino, Vodka, Moscatel, açúcar mascavado, gasosa, gelo, vinho branco, hortelã, laranja, canela, maçã e lima", priceEuros: "12.00", isVeg: false, isSpicy: false, sortOrder: 1 },
];
