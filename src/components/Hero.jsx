import React from "react";
import BlueFace from "../assets/blue face-800.png";

import Reveal from "../controllers/Reveal";
import TitleCard from "../controllers/TitleCard";

const Hero = () => {
  return (
    <div className="flex items-center mb-20">
      <div className="grid md:grid-cols-3 md:grid-rows-1 items-center">
        <Reveal>
          {/* <h1 className="text-6xl text-left font-bold whitespace-pre-line">
            The Intelligence Amplification Company
          </h1> */}
          <TitleCard
            title="The Intelligence Amplification Company"
            titleWeight={`700`}
          >
            <p className="text-xl font-light leading-6">
              We&apos;re creating an ecosystem for humans and machines to work
              together to solve the world&apos;s most important problems - starting
              with a notebook that augments your intelligence.
            </p>
          </TitleCard>
        </Reveal>
        <div className="h-full w bg-transparent">
          <div className="h-full w-[1px] border-r-[1px] mx-auto"></div>
        </div>
        <Reveal>
          <div className="w-80 mx-auto md:max-w-full md:w-full aspect-square">
            <img src={BlueFace} alt="blue-face-800.png" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
