// Framework imports
import Link from "next/link";

const Logo = () => {
  return (
    <h1 className="select-none px-2 py-1 text-center tracking-widest text-neutral-900">
      <Link href="/">
        <a>visual identities</a>
      </Link>
    </h1>
  );
};

export default Logo;
