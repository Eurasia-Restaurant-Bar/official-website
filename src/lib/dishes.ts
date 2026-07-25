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
    label: "Steamed momo",
    photo: "/photos/dish-jhol-momo.jpg",
    nameEn: "Jhol MoMo",
    namePt: "Jhol MoMo",
    price: "€8,99",
    descEn: "Steamed dumplings served in a spicy, citric soup. Chicken or veg.",
    descPt: "Dumplings cozidos servidos numa sopa picante e levemente cítrica. Frango ou legumes.",
    tagEn: "House favourite",
    tagPt: "Favorito da casa",
  },
  {
    label: "Chef's signature",
    photo: "/photos/dish-chicken-sekuwa.jpg",
    nameEn: "Eurasia Signature Platter",
    namePt: "Prato Assinatura Eurasia",
    price: "€12,50",
    descEn: "Crispy fried chicken, steamed rice, fresh green salad and golden potato fries, served with soft drinks.",
    descPt: "Frango frito crocante, arroz branco, salada verde fresca e batatas fritas douradas, servido com refrigerante.",
    tagEn: "Chef's signature",
    tagPt: "Assinatura do chef",
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
];
