import "../styles/global.css";
import type { AppProps } from "next/app";
import { GlobalStateProvider } from "@/lib/globalState";
import GlobalLayout from "@/components/Layout/GlobalLayout";
import ErrorBoundary from "@/components/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <ErrorBoundary>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ErrorBoundary>
    </GlobalStateProvider>
  );
}

export default MyApp;
