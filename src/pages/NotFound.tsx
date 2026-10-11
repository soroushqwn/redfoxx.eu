import { Head } from "vite-react-ssg";
import { useLang } from "@/i18n/LanguageContext";
import { HTML_LANG, pagePath } from "@/seo/site";

const NotFound = () => {
  const { lang } = useLang();
  return (
    <>
      <Head>
        <html lang={HTML_LANG[lang]} />
        <title>Page Not Found — REDFOXX</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to the REDFOXX homepage." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href={pagePath("home", lang)} className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
