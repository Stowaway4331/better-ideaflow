import Lottie from "lottie-react";
import ani1 from "../assets/animation1.mp4.lottie.json";
import ani2 from "../assets/animation2.mp4.lottie.json";
import Reveal from "../controllers/Reveal";
import TitleCard from "../controllers/TitleCard";
import Button from "../controllers/Button";

import ani1_placeholder from "../assets/animation1_placeholder.jpg"
import ani2_placeholder from "../assets/animation2_placeholder.jpg"

const Hero2 = () => {
  return (
    <div className="flex flex-col items-center gap-24 md:gap-32 w-full">
      <div className="flex items-center w-full">
        <div className="grid md:grid-cols-2 md:grid-rows-1 items-center gap-10 w-full">
          <Reveal>
            <div className="p-8 md:p-12 rounded-2xl border border-ink-border bg-white/[0.02]">
              <TitleCard
                title="Connecting people with matching puzzle pieces"
                titleWeight={`600`}
                titleSize="4xl"
              >
                <div className="text-lg font-light text-white/70">
                  <p className="leading-7 italic border-l-2 border-accent/40 pl-4">
                    There are millions of scientists trying to cure the likes of
                    AIDS and Alzheimer&apos;s. Maybe the cure is currently
                    separated in different people&apos;s heads. How can we
                    design the web so that these half-formed solutions can come
                    together?
                  </p>
                  <p className="italic leading-6 mt-4 text-white/50 pl-4">
                    - Sir Tim Berners-Lee,
                    <br /> Creator of the Web
                  </p>
                </div>
              </TitleCard>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-ink-border bg-white/[0.02]">
              <Lottie className="h-full" placeholder={ani1_placeholder} autoplay={true} animationData={ani1} loop={true} />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="flex items-center w-full">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:grid-rows-1 items-center gap-10 w-full">
          <Reveal>
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-ink-border bg-white/[0.02]">
              <Lottie placeholder={ani2_placeholder} animationData={ani2} autoplay={true} loop={true} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="p-8 md:p-12 rounded-2xl border border-ink-border bg-white/[0.02]">
              <TitleCard
                title="The auto-suggest layer for human thinking"
                titleWeight={`600`}
                titleSize="4xl"
              >
                <div className="text-lg leading-7 font-light text-white/70">
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
    </div>
  );
};

export default Hero2;
