// Framework imports
import { useState } from "react";

// Dependency imports
import { Cross as Hamburger } from "hamburger-react";

// Component imports
import ButtonBlue from "../buttons/ButtonBlue";
import NavbarMenu from "./Menu";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 w-screen select-none bg-neutral-100 px-4 py-2 lg:px-48">
      <div className="flex items-center justify-between">
        <ButtonBlue href="tel:+31636439554" text="call us" />
        <Hamburger toggled={isOpen} toggle={handleToggle} label="Show menu" />
      </div>

      {isOpen ? <NavbarMenu handleToggle={handleToggle} /> : null}
    </nav>
  );
};

export default Navbar;
