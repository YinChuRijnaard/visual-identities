import Link from "next/link";

import { servicesSubmenuData, casesSubmenuData } from "../utils/navbarSubmenusData";

export function ServicesSubmenu({ handleToggle }) {
  return (
    <ul className="mt-2 space-y-2 font-normal">
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
}

export function CasesSubmenu({ handleToggle }) {
  return (
    <ul className="mt-2 space-y-2 font-normal">
      {casesSubmenuData.map((item, index) => {
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
}
