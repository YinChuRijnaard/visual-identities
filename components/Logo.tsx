// Framework imports
import Link from "next/link";

const Logo = () => {
  return (
    <h1 className="select-none bg-blue-1 p-2 text-center text-xl font-bold tracking-widest text-neutral-100">
      <Link href="/">
        <a>visual identities</a>
      </Link>
    </h1>
  );
};

export default Logo;
