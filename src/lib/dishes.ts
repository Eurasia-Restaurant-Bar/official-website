export type DishVM = {
  label: string;
  photo: string;
  nameEn: string;
  namePt: string;
  price: string;
  descEn: string;
  descPt: string;
  tagEn: string;
  tagPt: string;
};

export const CHEFS_PICKS: DishVM[] = [
  {
    label: "Chef's signature",
    photo: "/photos/eurasia-special-platter.png",
    nameEn: "Eurasia Signature Platter",
    namePt: "Prato Assinatura Eurasia",
    price: "€12,50",
    descEn: "Crispy fried chicken, steamed rice, fresh green salad and golden potato fries, served with soft drinks.",
    descPt: "Frango frito crocante, arroz branco, salada verde fresca e batatas fritas douradas, servido com refrigerante.",
    tagEn: "Chef's signature",
    tagPt: "Assinatura do chef",
  },
  {
    label: "Nepali thali",
    photo: "/photos/nepali-thali-set.png",
    nameEn: "Nepali Thali Set",
    namePt: "Conjunto Thali Nepali",
    price: "€11,99",
    descEn: "Original Nepali Thali Set for 5 or more persons (advance booking of minimum 3 hours).",
    descPt: "Conjunto Thali Nepali original para 5 ou mais pessoas (reserva com um mínimo de 3 horas de antecedência).",
    tagEn: "Traditional set",
    tagPt: "Conjunto tradicional",
  },
  {
    label: "Steamed momo",
    photo: "/photos/hero-momo.jpg",
    nameEn: "Chicken MoMo",
    namePt: "MoMo de Frango",
    price: "€7,99",
    descEn: "Steamed dumplings filled with chicken.",
    descPt: "Dumplings cozidos com recheio de frango.",
    tagEn: "House favourite",
    tagPt: "Favorito da casa",
  },
  {
    label: "Rice plate",
    photo: "/photos/rice-and-chicken.png",
    nameEn: "Rice & Chicken",
    namePt: "Arroz & Frango",
    price: "€9,00",
    descEn: "Served with plain rice, fried chicken, and fresh salad.",
    descPt: "Servido com arroz branco, frango frito e salada fresca.",
    tagEn: "Hearty plate",
    tagPt: "Prato substancial",
  },
  {
    label: "Wok noodles",
    photo: "/photos/gallery-chowmein.jpg",
    nameEn: "Chicken Chowmein",
    namePt: "Chowmein de Frango",
    price: "€7,99",
    descEn: "Stir-fried noodles with chicken and a mix of fresh vegetables.",
    descPt: "Noodles fritos com frango e uma mistura de vegetais frescos.",
    tagEn: "Customer favourite",
    tagPt: "Favorito dos clientes",
  },
  {
    label: "Portuguese classic",
    photo: "/photos/bifana--set.png",
    nameEn: "Bifana Set",
    namePt: "Conjunto Bifana",
    price: "€6,50",
    descEn: "Bifana with drink and fries.",
    descPt: "Bifana com bebida e batatas fritas.",
    tagEn: "Portuguese classic",
    tagPt: "Clássico português",
  },
];
