// Framework imports
import Link from "next/link";
import type { NextPage } from "next";

// Component imports
import Divider from "../components/Divider";
import ButtonWhite from "../components/buttons/ButtonWhite";
import Cards from "../components/pages/home/Cards";

// Discord link to discussion: https://discord.com/channels/102860784329052160/105765765117935616/981510345594114138

const Home: NextPage = () => {
  return (
    <main className="mx-4 h-full space-y-8">
      <div className="h-64 w-full rounded bg-red-300 text-center font-bold">visualising your identity</div>

      <Cards />

      <Divider />

      <div className="w-full space-y-4 rounded bg-neutral-200 p-10 leading-relaxed">
        <p className="text-3xl font-bold">our mission.</p>
        <p className="text-neutral-900/80">
          Our mission is to make a suitable visual product for our customers. We believe that a good identity is, as it
          were, a mirror of an organisation. This product should mirror the visual identity so that it is consistent and
          fits the story. We do this by building up close collaboration with specialized creatives, each of whom has his
          or her own expertise.
        </p>
        <p className="text-right text-2xl font-bold text-blue-1">
          &ldquo;a good identity is, as it were, a mirror of an organisation.&rdquo;
        </p>
      </div>

      <div className="w-full space-y-4 rounded bg-blue-1 p-10 leading-relaxed text-neutral-100">
        <p className="text-3xl font-bold">brand identities.</p>
        <p className="text-neutral-100/80">
          A brand identity reflects what an organization contains, what its main activities are and what it stands for.
          A tailor-made visual brand identity communicates through a striking logo, a good corporate identity, and
          through consistent use of this in printed and digital materials. Visual Identities has years of experience in
          designing and developing brand identities for various organizations.
        </p>
        <p className="text-right text-2xl font-bold">&ldquo;a tailor-made visual brand identity.&rdquo;</p>
      </div>

      {/* <span className="flex justify-center">
        <ButtonWhite href="tel:+31636439554" text="contact us now" />
      </span> */}
    </main>
  );
};

export default Home;

// Styling === basis for other pages!

/*
Pages: 
Navbar: 
*/
