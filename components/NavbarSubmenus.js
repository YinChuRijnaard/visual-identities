import Link from "next/link";

import { servicesSubmenuData, casesSubmenuData } from "../utils/navbarSubmenusData";

export function ServicesSubmenu({ handleToggle }) {
  return (
    <ul className="mt-2 space-y-2 font-normal text-neutral-400">
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
    <ul className="mt-2 space-y-2 font-normal text-neutral-400">
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
