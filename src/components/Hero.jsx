import { motion } from "framer-motion";
import BlueFace from "../assets/blue face-800.png";

import Reveal from "../controllers/Reveal";
import TitleCard from "../controllers/TitleCard";

const Hero = () => {
  return (
    <div className="flex items-center mb-20">
      <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0">
        <Reveal>
          <TitleCard title="The Intelligence Amplification Company" titleWeight={`700`} gradient>
            <p className="text-xl font-light leading-7 text-white/70 max-w-md">
              We&apos;re creating an ecosystem for humans and machines to work
              together to solve the world&apos;s most important problems - starting
              with a notebook that augments your intelligence.
            </p>
          </TitleCard>
        </Reveal>
        <div className="hidden md:block h-full">
          <motion.div
            className="h-full w-px mx-auto origin-top bg-gradient-to-b from-transparent via-white/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          ></motion.div>
        </div>
        <Reveal delay={0.15}>
          <motion.div
            className="w-64 mx-auto md:max-w-full md:w-full aspect-square"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={BlueFace} alt="blue-face-800.png" className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(0,200,206,0.25)]" />
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
