import Link from "next/link";

import { servicesSubmenuData } from "../../data/navbarSubmenusData";

const ServicesSubmenu = ({ handleToggle }) => {
  return (
    <ul className="space-y-2 text-neutral-500">
      {servicesSubmenuData.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href}>
              <a onClick={handleToggle}>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesSubmenu;
