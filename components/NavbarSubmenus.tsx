import Link from "next/link";

import { servicesSubmenuData, casesSubmenuData } from "../utils/navbarSubmenusData";

export function ServicesSubmenu({ handleToggle }) {
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
}

export function CasesSubmenu({ handleToggle }) {
  return (
    <ul className="space-y-2 text-neutral-500">
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
