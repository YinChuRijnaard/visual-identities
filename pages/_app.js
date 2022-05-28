import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Layout from "../components/layout";

/**TODO
 * Fix viewport issue with nav menu (scrollling, should be fixed)
 * Fix positioning of arrow down/up in nav menu
 * Fix positioning of footer (always at the bottom (maybe visible when nav menu is opened))
 * Fix positioning of menu items (should be dead centered underneath each other)
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
