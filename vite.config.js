import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-pnpm/", //This is the base url of your website
});
