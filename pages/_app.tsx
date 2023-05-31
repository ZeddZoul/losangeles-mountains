import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Oswald, Lato } from "next/font/google";

const oswald = Oswald({ subsets: ["cyrillic"], weight: ["400"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --main-font: ${lato.style.fontFamily};
            --other-font: ${oswald.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
