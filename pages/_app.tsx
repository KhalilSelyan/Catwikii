import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col font-montserrat">
      <Head>
        <title>CatWiki</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/catLogox.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
