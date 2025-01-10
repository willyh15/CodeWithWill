import "../styles/global.css"; // Global styles
import "../styles/datepicker.css"; // Ensure relative path is correct
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/Layout/GlobalLayout";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("App initialized.");
  }, []);

  return (
    <>
      <Head>
        <title>Code With Will</title>
        <meta name="description" content="Code With Will - A futuristic app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;