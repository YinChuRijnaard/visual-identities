// Component imports
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Style imports
import styles from "../styles/layout.module.css";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Logo />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
