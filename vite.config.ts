import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            shared: path.resolve(__dirname, "./src/shared"),
            utils: path.resolve(__dirname, "./src/utils"),
        },
    },
    plugins: [react(), tailwindcss(), tsconfigPaths()],
});
