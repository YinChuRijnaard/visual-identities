// Framework imports
import { useState } from "react";
import Link from "next/link";

// Component imports
import Submenu from "./Submenu";

// Data imports
import { menuData } from "../../data/menuData";

type MenuProps = {
  handleToggle: () => void;
};

const Menu = ({ handleToggle }: MenuProps) => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  return (
    <div className="mx-4 h-screen">
      <ul className="mt-8 space-y-4">
        <li>
          <Link href="/">
            <a onClick={handleToggle}>home</a>
          </Link>
        </li>

        <li>
          <a
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setServicesOpen(!servicesOpen)}>
            services
            {servicesOpen ? <i className="ri-arrow-up-s-line ml-2"></i> : <i className="ri-arrow-down-s-line ml-2"></i>}
          </a>
          {servicesOpen ? <Submenu handleToggle={handleToggle} /> : null}
        </li>

        {menuData.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href}>
                <a onClick={handleToggle}>{item.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
