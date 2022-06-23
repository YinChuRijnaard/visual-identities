import Head from "next/head";

import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
