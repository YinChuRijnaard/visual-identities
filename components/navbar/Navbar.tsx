// Framework imports
import { useState } from "react";

// Dependency imports
import { Cross as Hamburger } from "hamburger-react";

// Component imports
import ButtonWhite from "../buttons/ButtonWhite";
import NavbarMenu from "./Menu";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 w-screen select-none bg-blue-1 px-4 py-2 text-neutral-100">
      <div className="flex items-center justify-between">
        <ButtonWhite href="tel:+31636439554" text="call us" />
        <Hamburger toggled={isOpen} toggle={handleToggle} label="Show menu" rounded />
      </div>

      {isOpen ? <NavbarMenu handleToggle={handleToggle} /> : null}
    </nav>
  );
};

// bg-blue-1 line 17 causes uncollapsed menu to have a blue background as well...

export default Navbar;
