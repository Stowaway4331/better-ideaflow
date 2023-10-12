import React from "react";
import Lottie from "lottie-react";
import ani1 from "../assets/animation1.mp4.lottie.json";
import ani2 from "../assets/animation2.mp4.lottie.json";
import Reveal from "../controllers/Reveal";
import TitleCard from "../controllers/TitleCard";
import Button from "../controllers/Button";

const Hero2 = () => {
  return (
    <div className="flex flex-col items-center gap-24">
      <div className="flex items-center">
        <div className="grid md:grid-cols-2 md:grid-rows-1 items-center">
          <Reveal>
            <div className="p-12 ">
              <TitleCard
                title="Connecting people with matching puzzle pieces"
                titleWeight={`500`}
                titleSize="4xl"
              >
                <div className="text-xl font-light">
                  <p className="leading-6 italic">
                    There are millions of scientists trying to cure the likes of
                    AIDS and Alzheimer&apos;s. Maybe the cure is currently
                    separated in different people&apos;s heads. How can we
                    design the web so that these half-formed solutions can come
                    together?
                  </p>
                  <p className="italic leading-6 mt-4">
                    - Sir Tim Berners-Lee,
                    <br /> Creator of the Web
                  </p>
                </div>
              </TitleCard>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-full aspect-square ">
              <Lottie className="h-full" animationData={ani1} loop={true} />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col flex-col-reverse md:grid md:grid-cols-2 md:grid-rows-1 items-center">
          <Reveal>
            <div className="w-full aspect-square ">
              <Lottie animationData={ani2} loop={true} />
            </div>
          </Reveal>
          <Reveal>
            {/* <h1 className="text-6xl text-left font-bold whitespace-pre-line">
            The Intelligence Amplification Company
          </h1> */}
            <div className="p-12 ">
              <TitleCard
                title="The auto-suggest layer for human thinking"
                titleWeight={`500`}
                titleSize="4xl"
              >
                <div className="text-xl leading-6 font-light">
                  <p className="mb-4">
                    Connect fragments of information from siloed sources faster
                    than ever before.
                  </p>
                  <p className="mb-8">
                    Your organization&apos;s collective memory at your
                    fingertips.
                  </p>
                  <Button bgColor={`#00c8ce`}>Learn More</Button>
                </div>
              </TitleCard>
            </div>
          </Reveal>
        </div>
      </div>

      {/* <Lottie animationData={ani1} loop={true} />
      <Lottie animationData={ani2} loop={true} /> */}
    </div>
  );
};

export default Hero2;
