import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <>
    //   <Head>
    //     <title>NextJS TailwindCSS TypeScript Starter</title>
    //     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //   </Head>
    //   <Component {...pageProps} />
    // </>
    <Component {...pageProps} />
  );
}

export default MyApp;
