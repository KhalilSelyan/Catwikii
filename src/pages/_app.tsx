import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "../components/footer";
import Header from "../components/header";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Component {...pageProps} />
      <div className="flex-grow" />
      <Footer />
    </div>
  );
};

export default MyApp;
