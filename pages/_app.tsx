// Framework imports
import Head from "next/head";
import type { AppProps } from "next/app";

// Dependency imports
import "tailwindcss/tailwind.css";
import "remixicon/fonts/remixicon.css";

// Component imports
import Layout from "../components/layout";

// Style imports
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

// Framework imports
// Dependency imports
// Type + Interface imports
// Context + Store imports
// Hook imports
// Util imports
// Data imports
// Component imports
// Asset imports
// Style imports
