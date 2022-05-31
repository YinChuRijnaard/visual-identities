import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

import ButtonBlue from "./ButtonBlue";
import NavbarMenu from "./NavbarMenu";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 w-screen select-none bg-neutral-100 px-4 py-2">
      <div className="flex items-center justify-between">
        <ButtonBlue href="tel:+31636439554" text="call us" />
        <Hamburger toggled={isOpen} toggle={handleToggle} label="Show menu" />
      </div>

      {isOpen ? <NavbarMenu handleToggle={handleToggle} /> : null}
    </nav>
  );
}
