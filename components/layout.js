import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Logo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
