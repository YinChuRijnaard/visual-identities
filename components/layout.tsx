// Component imports
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Logo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
