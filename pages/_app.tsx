import "styles/global.css"; // Global CSS
import "flatpickr/dist/flatpickr.min.css"; // Flatpickr base styles
import "styles/flatpickr-dark.css" // Dark theme customization
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/Layout/GlobalLayout";
import ErrorBoundary from "@/components/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ErrorBoundary>
  );
}

export default MyApp;
