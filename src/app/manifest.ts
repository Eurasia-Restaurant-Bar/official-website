import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eurasia Restaurant & Bar",
    short_name: "Eurasia",
    description:
      "Family recipes from the foothills of Nepal — order, browse the menu, and book a table.",
    start_url: "/",
    display: "standalone",
    background_color: "#140e0c",
    theme_color: "#d00016",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
