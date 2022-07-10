// Framework imports
import Link from "next/link";
import type { NextPage } from "next";

// Component imports
import Divider from "../components/Divider";
import PlusSign from "../components/PlusSign";
import ButtonWhite from "../components/ButtonWhite";

// Data imports
import cardsData from "../data/cardsData";

// Discord link to discussion: https://discord.com/channels/102860784329052160/105765765117935616/981510345594114138

// Dark text: neutral-900
// Light text: neutral-100

// TODO
// - Close nav menu when clicking logo to go home
// - Change Cases sub menu to just one page and delete JZ Service component
// Make sure nav URL etc auto-hide when scrolling
// Fix alignment of cards and its data/content

const Home: NextPage = () => {
  return (
    <main className="mx-4 h-full lg:mx-48">
      <div className="h-64 w-full bg-blue-1 text-center font-bold text-neutral-100">visualising your identity</div>

      <Divider />

      <div className="grid grid-cols-2 place-items-center gap-2 lg:grid-cols-3">
        {cardsData.map((item, index) => {
          return (
            <div
              className="flex h-40 w-40 flex-col items-center justify-between bg-blue-1 fill-neutral-100 text-neutral-100 lg:h-48 lg:w-48"
              key={index}>
              <span>{item.icon}</span>
              <span className="w-full cursor-pointer p-1">
                <Link href={item.link}>
                  <span className="flex items-center justify-between">
                    <p className="font-bold">{item.text}</p>
                    <PlusSign />
                  </span>
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
};

export default Home;
