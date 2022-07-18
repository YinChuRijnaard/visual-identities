// Component imports
import Logo from "./navbar/Logo";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

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
