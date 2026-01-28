import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // 🔴 expõe na rede local
    port: 5173, // opcional, mas deixa fixo
  },
  base: "/mp-calculadora-imc/", // github pages
});
