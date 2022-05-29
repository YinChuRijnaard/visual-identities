import Link from "next/link";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

import ButtonSmall from "./ButtonSmall";
import NavbarMenu from "./NavbarMenu";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-screen select-none bg-blue-700 text-neutral-100">
      {/* <h1 className="bg-neutral-100 p-2 text-center font-bold tracking-widest text-black">visual identities</h1> */}

      <div className="flex items-center justify-between px-4">
        {/* <ButtonSmall href="tel:+31636439554" text="call us" /> */}
        <h1 className="text-xl font-bold tracking-widest">
          <Link href="/">visual identities</Link>
        </h1>
        <Hamburger toggled={isOpen} toggle={handleToggle} label="Show menu" />
      </div>

      {isOpen ? <NavbarMenu handleToggle={handleToggle} /> : null}
    </nav>
  );
}
