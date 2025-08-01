import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/?source=manifest",
    name: "InboxQualify",
    short_name: "InboxQualify",
    description: "Your Cold Email Co-pilot",
    start_url: "/",
    scope: "/",
    lang: "en",
    display: "standalone",
    background_color: "#252525",
    theme_color: "#252525",
    icons: [
      {
        src: "/logo-192.png",
        sizes: "64x64",
        type: "image/x-icon",
      },
      {
        src: "/logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo-192.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo-192.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    dir: "ltr",
    orientation: "portrait-primary",
    display_override: [
      "standalone",
      "fullscreen",
      "window-controls-overlay",
      "minimal-ui",
      "browser",
    ],
    categories: ["business", "productivity", "marketing"],
    launch_handler: {
      client_mode: "navigate-existing",
    },
    screenshots: [
      {
        src: "/dashboard-desktop-dark.png",
        platform: "windows",
        form_factor: "wide",
        type: "image/png",
        sizes: "1920x1080",
        label: "Main dashboard",
      },
      {
        src: "/dashboard-desktop-light.png",
        platform: "windows",
        form_factor: "wide",
        type: "image/png",
        sizes: "1920x1080",
        label: "Main dashboard",
      },
      {
        src: "/dashboard-desktop-dark.png",
        platform: "macos",
        type: "image/png",
        sizes: "1920x1080",
        label: "Main dashboard",
      },
      {
        src: "/dashboard-desktop-light.png",
        platform: "macos",
        type: "image/png",
        sizes: "1920x1080",
        label: "Main dashboard",
      },
      {
        src: "/dashboard-mobile-dark.png",
        platform: "android",
        type: "image/png",
        sizes: "850x1572",
        label: "Main dashboard",
      },
      {
        src: "/dashboard-mobile-dark.png",
        platform: "ios",
        type: "image/png",
        sizes: "850x1572",
        label: "Main dashboard",
      },
    ],
  };
}
