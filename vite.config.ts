import type { UserConfig } from "vite";

const config: UserConfig = {};

export default {
  plugins: [],
  ...config,
  optimizeDeps: {
    include: [
      "zone.js/dist/zone",
      "@angular/common",
      "@angular/compiler",
      "@angular/core",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/router",
    ],
    exclude: ["rxjs"],
  },
};
