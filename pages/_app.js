import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Layout from "../components/layout";

/**TODO
 * Reevaluate all padding/margin/spacings
 * Organise imports
 * Adjust every page for desktop
 */

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
