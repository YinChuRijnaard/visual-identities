import Link from "next/link";

import Divider from "../components/Divider";

import { cardsData } from "../utils/cardsData";
import ButtonWhite from "../components/ButtonWhite";

export default function Home() {
  return (
    <main className="mx-4 h-full lg:mx-48">
      <div className="h-64 w-full bg-blue-1 text-center font-bold text-neutral-100">visualising your identity</div>

      <Divider />

      <div className="grid grid-cols-2 place-items-center gap-2 lg:grid-cols-3">
        {cardsData.map((item, index) => {
          return (
            <div
              className="flex h-40 w-40 flex-col items-center justify-between bg-blue-1 text-neutral-100 lg:h-48 lg:w-48"
              key={index}>
              <i className={item.icon}></i>
              <span className="flex w-full items-center justify-between px-4">
                <p className="text-lg font-bold">{item.text}</p>
                <Link href={item.link}>
                  <i className="ri-arrow-right-line ri-2x cursor-pointer"></i>
                </Link>
              </span>
            </div>
          );
        })}
      </div>

      <Divider />

      <div className="lg: w-full space-y-2 border-1 border-blue-1 p-4 lg:w-3/4">
        <p className="text-3xl font-bold">our mission.</p>
        <p>
          Our mission is to make a suitable visual product for our customers. We believe that a good identity is, as it
          were, a mirror of an organisation. This product should mirror the visual identity so that it is consistent and
          fits the story. We do this by building up close collaboration with specialized creatives, each of whom has his
          or her own expertise.
        </p>
        <span className="flex justify-end">
          <hr className="my-2 w-1/2 border-blue-1" />
        </span>
        <p className="text-right text-3xl font-bold text-blue-1">
          &ldquo;a good identity is, as it were, a mirror of an organisation.&rdquo;
        </p>
      </div>

      <Divider />

      <div className="ml-auto w-full space-y-2 bg-blue-1 p-4 text-neutral-100 lg:w-3/4">
        <p className="text-3xl font-bold">brand identities.</p>
        <p>
          A brand identity reflects what an organization contains, what its main activities are and what it stands for.
          A tailor-made visual brand identity communicates through a striking logo, a good corporate identity, and
          through consistent use of this in printed and digital materials. Visual Identities has years of experience in
          designing and developing brand identities for various organizations.
        </p>
        <span className="flex justify-end">
          <hr className="my-2 w-1/2 border-neutral-100" />
        </span>
        <p className="text-right text-3xl font-bold">&ldquo;a tailor-made visual brand identity.&rdquo;</p>
      </div>

      <Divider />

      <span className="flex justify-center">
        <ButtonWhite href="tel:+31636439554" text="contact us now" />
      </span>
    </main>
  );
}
