import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { Lang } from "./i18n/translations";
import Index from "./pages/Index";
import Outbound from "./pages/Outbound";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import type { RouteRecord } from "vite-react-ssg";

const queryClient = new QueryClient();

function Layout({ lang }: { lang: Lang }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider lang={lang}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

const localized = (lang: "en" | "fr"): RouteRecord => ({
  path: `/${lang}`,
  element: <Layout lang={lang} />,
  children: [
    { index: true, element: <Index /> },
    { path: "outbound", element: <Outbound /> },
    { path: "*", element: <NotFound /> },
  ],
});

export const routes: RouteRecord[] = [
  localized("en"),
  localized("fr"),
  {
    path: "/",
    element: <Layout lang="nl" />,
    children: [
      { index: true, element: <Index /> },
      { path: "outbound", element: <Outbound /> },
      { path: "jobs", element: <Jobs /> },
      // Pre-rendered as 404.html (see vite.config.ts onFinished)
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
