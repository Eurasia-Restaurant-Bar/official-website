"use client";

import Image from "next/image";
import { useT } from "@/lib/lang-context";

const TILES = [
  { label: "Plating up in the kitchen", photo: "/photos/gallery-team-plating.jpg", className: "g-tall" },
  { label: "Our storefront", photo: "/photos/gallery-storefront.jpg", className: "g-wide" },
  { label: "Chicken fried rice", photo: "/photos/gallery-fried-rice.jpg", className: "" },
  { label: "Chowmein noodles", photo: "/photos/gallery-chowmein.jpg", className: "" },
  { label: "Evenings on the terrace", photo: "/photos/gallery-guests-evening.jpg", className: "g-wide" },
  { label: "Good times at Eurasia", photo: "/photos/gallery-guests-momos.jpg", className: "" },
];

export default function Gallery() {
  const t = useT();

  return (
    <section id="gallery">
      <div className="wrap">
        <span className="eyebrow">{t("Gallery", "Galeria")}</span>
        <h2 style={{ marginBottom: 36 }}>{t("A table full of warmth.", "Uma mesa cheia de calor.")}</h2>
        <div className="gal">
          {TILES.map((tile) => (
            <div className={`ph-img ${tile.className}`} data-label={tile.label} key={tile.label}>
              <Image
                src={tile.photo}
                alt={tile.label}
                fill
                sizes="(max-width: 1000px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
