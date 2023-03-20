import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
