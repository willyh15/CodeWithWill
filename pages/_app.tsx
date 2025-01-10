import "../styles/global.css"; // Global styles
import "../styles/datepicker.css"; // Custom styles for the datepicker
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/Layout/GlobalLayout";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from "next/head"; // For setting metadata
import { useEffect } from "react";

// Error Boundary and Layout Wrapper
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Log when the app loads, or add custom analytics setup here
    console.log("App initialized.");
  }, []);

  return (
    <>
      {/* Metadata for the application */}
      <Head>
        <title>Code With Will</title>
        <meta
          name="description"
          content="Code With Will - A futuristic application built with precision and care."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Error Boundary wraps the layout and pages */}
      <ErrorBoundary>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;