import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "aashishlabs",
    short_name: "aashishlabs",
    description: "A digital growth studio for websites, apps, SEO and performance marketing.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1628",
    theme_color: "#0B1628",
    icons: [
      {
        src: "/brand/aashishlabs-favicon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/brand/aashishlabs-app-icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
