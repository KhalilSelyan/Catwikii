import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col font-montserrat">
      <Header />
      <Component {...pageProps} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
