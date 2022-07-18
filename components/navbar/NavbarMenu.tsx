// Framework imports
import { useState } from "react";
import Link from "next/link";

// Component imports
import { ServicesSubmenu, CasesSubmenu } from "./NavbarSubmenus";

type NavbarMenuProps = {
  handleToggle: () => void;
};

const NavbarMenu = ({ handleToggle }: NavbarMenuProps) => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [casesOpen, setCasesOpen] = useState<boolean>(false);

  const handleServicesSubmenu = () => setServicesOpen(!servicesOpen);
  const handleCasesSubmenu = () => setCasesOpen(!casesOpen);

  return (
    <div className="mx-4 h-screen">
      <ul className="mt-8 space-y-4">
        <li>
          <Link href="/">
            <a onClick={handleToggle}>home</a>
          </Link>
        </li>

        <hr className="border-neutral-200" />

        <li>
          <a className="flex cursor-pointer items-center justify-between" onClick={handleServicesSubmenu}>
            services
            {servicesOpen ? <i className="ri-arrow-up-s-line ml-2"></i> : <i className="ri-arrow-down-s-line ml-2"></i>}
          </a>
          {servicesOpen ? <ServicesSubmenu handleToggle={handleToggle} /> : null}
        </li>

        <hr className="border-neutral-200" />

        <li>
          <Link href="/cases">
            <a onClick={handleToggle}>cases</a>
          </Link>
        </li>

        <hr className="border-neutral-200" />

        <li>
          <Link href="/about">
            <a onClick={handleToggle}>about</a>
          </Link>
        </li>

        <hr className="border-neutral-200" />

        <li>
          <Link href="/partners">
            <a onClick={handleToggle}>partners</a>
          </Link>
        </li>

        <hr className="border-neutral-200" />

        <li>
          <Link href="/contact">
            <a onClick={handleToggle}>contact</a>
          </Link>
        </li>

        <hr className="border-neutral-200" />
      </ul>
    </div>
  );
};

export default NavbarMenu;
