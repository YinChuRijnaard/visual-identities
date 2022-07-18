import Link from "next/link";

import { submenuData } from "../../data/submenuData";

const Submenu = ({ handleToggle }) => {
  return (
    <ul className="space-y-2 text-neutral-500">
      {submenuData.map((item, index) => {
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

export default Submenu;
