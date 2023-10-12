import React from "react";
import Logo from "../assets/logo.png";
import TitleCard from "../controllers/TitleCard";

const Footer = () => {
  return (
    <div className="grid grid-flow-row md:grid-flow-col w-full max-w-7xl p-12 gap-4">
      <div className="">
        <img src={Logo} alt="logo" className="h-16 w-full md:w-max object-contain" />
      </div>
      <div className="flex w-full justify-between flex-wrap">
        <TitleCard
          animation={false}
          title="#rabbithole"
          titleSize="md"
          titleWeight="600"
        >
          <p className="mt-4 mb-2 hover:underline font-light">
            <a href="#">Memex</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Niklas Luhmann&apos;s Zettelkasten</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Collective IQ</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Intelligence amplification</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Tim Berners-Lee&apos;s Giant Global Graph</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Polymath Project</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Category Theory for Scientists</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Ideaflowplan.jacobcole.net</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Privacy Policy</a>
          </p>
        </TitleCard>
        <TitleCard
          animation={false}
          title="Latest Updates"
          titleSize="md"
          titleWeight="600"
        >
          <p className="mb-2 hover:underline font-light mt-4">
            <a href="#">Blog</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Funding</a>
          </p>
          <p className="mb-2 hover:underline font-light">
            <a href="#">Bullet View Video</a>
          </p>
        </TitleCard>
        <TitleCard
          animation={false}
          title="Contact"
          titleSize="md"
          titleWeight="600"
        >
          <p className="mb-2 hover:underline font-light mt-4"><a href="#">Email</a></p>
          <p className="mb-2 hover:underline font-light"><a href="#">LinkedIn</a></p>
          <p className="mb-2 hover:underline font-light"><a href="#">Facebook</a></p>
          <p className="mb-2 hover:underline font-light"><a href="#">Twitter</a></p>
        </TitleCard>
      </div>
    </div>
  );
};

export default Footer;
