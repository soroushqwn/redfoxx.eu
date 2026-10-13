import { Outlet } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { Lang } from "./i18n/translations";
import Index from "./pages/Index";
import { ChatWidget } from "./chat/ChatWidget";
import type { RouteRecord } from "vite-react-ssg";
// Preload the two fonts used above the fold so the headline is not delayed by a CSS -> font request chain.
import spaceGroteskUrl from "@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2?url";
import interUrl from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";

function Layout({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider lang={lang}>
      <Head>
        <link rel="preload" href={spaceGroteskUrl} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={interUrl} as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <MotionConfig reducedMotion="user">
        <Outlet />
        <ChatWidget />
      </MotionConfig>
    </LanguageProvider>
  );
}

// Pages other than the home page are split into their own chunks, so the home page
// does not download the outbound/inbound/jobs code (faster on mobile).
const page = (load: () => Promise<{ default: React.ComponentType }>) => ({
  lazy: async () => ({ Component: (await load()).default }),
});

const localized = (lang: "en" | "fr"): RouteRecord => ({
  path: `/${lang}`,
  element: <Layout lang={lang} />,
  children: [
    { index: true, element: <Index /> },
    { path: "outbound", ...page(() => import("./pages/Outbound")) },
    { path: "inbound", ...page(() => import("./pages/Inbound")) },
    { path: "*", ...page(() => import("./pages/NotFound")) },
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
      { path: "outbound", ...page(() => import("./pages/Outbound")) },
      { path: "inbound", ...page(() => import("./pages/Inbound")) },
      { path: "jobs", ...page(() => import("./pages/Jobs")) },
      { path: "privacy", ...page(() => import("./pages/Privacy")) },
      // Pre-rendered as 404.html (see vite.config.ts onFinished)
      { path: "404", ...page(() => import("./pages/NotFound")) },
      { path: "*", ...page(() => import("./pages/NotFound")) },
    ],
  },
];
