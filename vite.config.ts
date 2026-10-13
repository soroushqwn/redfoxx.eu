import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";
import { ALL_ROUTES, buildSitemap } from "./src/seo/site";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && !isSsrBuild && componentTagger()].filter(Boolean),
  ssgOptions: {
    dirStyle: "nested",
    // "/privacy" is a hidden draft: pre-rendered (noindex) but deliberately not in ALL_ROUTES / sitemap.
    includedRoutes: () => [...ALL_ROUTES.map((r) => r.path), "/privacy", "/404"],
    onFinished: (dir: string) => {
      const nested = path.join(dir, "404", "index.html");
      if (fs.existsSync(nested)) {
        fs.copyFileSync(nested, path.join(dir, "404.html"));
        fs.rmSync(path.join(dir, "404"), { recursive: true, force: true });
      }
      fs.writeFileSync(path.join(dir, "sitemap.xml"), buildSitemap(new Date().toISOString().slice(0, 10)));
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
