import { useState } from "react";
import Link from "next/link";

import { ServicesSubmenu, CasesSubmenu } from "./NavbarSubmenus";

export default function NavbarMenu({ handleToggle }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [casesOpen, setCasesOpen] = useState(false);

  const handleServicesSubmenu = () => setServicesOpen(!servicesOpen);
  const handleCasesSubmenu = () => setCasesOpen(!casesOpen);

  return (
    <div className="h-screen text-center text-xl font-bold">
      <ul className="mt-8 space-y-8">
        <li>
          <Link href="/">
            <a onClick={handleToggle}>home</a>
          </Link>
        </li>

        <li>
          <a className="m-auto flex w-min cursor-pointer items-center" onClick={handleServicesSubmenu}>
            services
            {servicesOpen ? <i className="ri-arrow-up-s-line ml-2"></i> : <i className="ri-arrow-down-s-line ml-2"></i>}
          </a>
          {servicesOpen ? <ServicesSubmenu handleToggle={handleToggle} /> : null}
        </li>

        <li>
          <a className="m-auto flex w-min cursor-pointer items-center" onClick={handleCasesSubmenu}>
            cases
            {casesOpen ? <i className="ri-arrow-up-s-line ml-2"></i> : <i className="ri-arrow-down-s-line ml-2"></i>}
          </a>
          {casesOpen ? <CasesSubmenu handleToggle={handleToggle} /> : null}
        </li>

        <li>
          <Link href="/about">
            <a onClick={handleToggle}>about</a>
          </Link>
        </li>

        <li>
          <Link href="/partners">
            <a onClick={handleToggle}>partners</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a onClick={handleToggle}>contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
