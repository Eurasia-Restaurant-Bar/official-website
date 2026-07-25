"use client";

import { useState } from "react";
import AppBar from "./AppBar";
import TabBar, { type MobileScreen } from "./TabBar";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";
import ReviewsScreen from "./ReviewsScreen";
import VisitScreen from "./VisitScreen";
import ReservationSheet from "./ReservationSheet";
import type { MenuCategoryVM, MenuItemVM } from "../MenuSection";
import type { GooglePlaceData } from "@/lib/google-places";

export default function MobileApp({
  categories,
  items,
  googlePlace,
}: {
  categories: MenuCategoryVM[];
  items: MenuItemVM[];
  googlePlace: GooglePlaceData | null;
}) {
  const [screen, setScreen] = useState<MobileScreen>("home");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetResetKey, setSheetResetKey] = useState(0);

  function openSheet() {
    setSheetOpen(true);
  }

  function closeSheet() {
    setSheetOpen(false);
    // Let the slide-down transition finish before resetting the sheet's contents for next time.
    setTimeout(() => setSheetResetKey((k) => k + 1), 350);
  }

  return (
    <div className="mobile-app-shell">
      <AppBar onHero={screen === "home"} onBookClick={openSheet} />

      <div className="screens">
        <div className={`screen${screen === "home" ? " active" : ""}`}>
          <HomeScreen onBookClick={openSheet} onNavigate={setScreen} />
        </div>
        <div className={`screen${screen === "menu" ? " active" : ""}`}>
          <MenuScreen categories={categories} items={items} />
        </div>
        <div className={`screen${screen === "reviews" ? " active" : ""}`}>
          <ReviewsScreen googlePlace={googlePlace} />
        </div>
        <div className={`screen${screen === "visit" ? " active" : ""}`}>
          <VisitScreen />
        </div>
      </div>

      <TabBar active={screen} onNavigate={setScreen} onBookClick={openSheet} />

      <ReservationSheet key={sheetResetKey} open={sheetOpen} onClose={closeSheet} />
    </div>
  );
}
