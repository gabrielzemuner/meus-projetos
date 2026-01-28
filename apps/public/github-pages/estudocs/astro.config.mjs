// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://gabrielzemuner.github.io",
  base: "/estudocs/",

  integrations: [
    starlight({
      title: "EstuDocs",
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],

      // 👇 isso habilita a sidebar “dinâmica” por rota
      routeMiddleware: "./src/routeData.ts",

      // 👇 aqui ficam os “guias” (cada um puxa sua própria pasta)
      sidebar: [
        {
          label: "JS antes do React",
          autogenerate: { directory: "js-antes-do-react" },
        },
        { label: "TypeScript", autogenerate: { directory: "typescript" } },
        {
          label: "Essencial CSS",
          autogenerate: { directory: "essencial-css" },
        },
      ],
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
