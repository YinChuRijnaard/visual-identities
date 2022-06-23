import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Logo />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
