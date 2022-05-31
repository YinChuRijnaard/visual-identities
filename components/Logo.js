import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="select-none bg-blue-1 p-2 text-center text-xl font-bold tracking-widest text-neutral-100">
      <Link href="/">visual identities</Link>
    </h1>
  );
}
