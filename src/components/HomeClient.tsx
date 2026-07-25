"use client";

import { LangProvider } from "@/lib/lang-context";
import type { GooglePlaceData } from "@/lib/google-places";
import Nav from "./Nav";
import Hero from "./Hero";
import Story from "./Story";
import Highlights from "./Highlights";
import MenuSection, { type MenuCategoryVM, type MenuItemVM } from "./MenuSection";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Visit from "./Visit";
import Footer from "./Footer";
import MobileApp from "./mobile/MobileApp";

export default function HomeClient({
  categories,
  items,
  googlePlace,
}: {
  categories: MenuCategoryVM[];
  items: MenuItemVM[];
  googlePlace: GooglePlaceData | null;
}) {
  return (
    <LangProvider>
      <div className="desktop-shell">
        <Nav />
        <a id="top"></a>
        <Hero />
        <Story />
        <Highlights />
        <MenuSection categories={categories} items={items} />
        <Gallery />
        <Reviews googlePlace={googlePlace} />
        <Visit />
        <Footer />
      </div>
      <MobileApp categories={categories} items={items} googlePlace={googlePlace} />
    </LangProvider>
  );
}
