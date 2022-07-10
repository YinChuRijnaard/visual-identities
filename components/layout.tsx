import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "../styles/layout.module.css";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Logo />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
