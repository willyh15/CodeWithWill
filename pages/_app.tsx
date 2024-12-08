import "../styles/global.css";
import type { AppProps } from "next/app";
import { GlobalStateProvider } from "@/lib/globalState";
import GlobalLayout from "@/components/Layout/GlobalLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </GlobalStateProvider>
  );
}

export default MyApp;
