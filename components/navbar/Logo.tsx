// Framework imports
import Link from "next/link";

const Logo = () => {
  return (
    <h1 className="select-none bg-blue-1 px-2 py-1 text-center tracking-widest text-neutral-100">
      <Link href="/">
        <a>visual identities</a>
      </Link>
    </h1>
  );
};

export default Logo;
