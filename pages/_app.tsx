import "../styles/global.css";
import "../styles/calendarStyles.css"; // Import calendar styling
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