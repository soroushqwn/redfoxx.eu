import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Head } from "vite-react-ssg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const url = `https://redfoxx.be${location.pathname}`;

  return (
    <>
      <Head>
        <title>Page Not Found — REDFOXX</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to the REDFOXX homepage." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Page Not Found — REDFOXX" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
        <meta property="og:url" content={url} />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
