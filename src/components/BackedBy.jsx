import React from "react";
import FirstRoundLogo from "../assets/first round.png";
import EightVCLogo from "../assets/8vc white.png";
import StartXLogo from "../assets/startx.png";
import { cubicBezier, motion } from "framer-motion";

const BackedBy = () => {
  const logos = [FirstRoundLogo, EightVCLogo, StartXLogo, FirstRoundLogo];
  const logosAltText = ["first round", "8vc", "startx", "first round"];
  const opacityValues = [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]];

  const timingFunction = cubicBezier(0.67, 1, 0.33, 1)

  return (
    <div className="flex flex-col items-center relative gap-8">
      <div className="bg-black w-full h-80"></div>
      <h2 className="text-4xl text-center">
        Backed by world-class investors and partners
      </h2>
      <div className="text-4xl flex -z-10 top-16">
        <motion.span
          className="flex flex-col w-48"
          animate={{
            translateY: ["0%", "-25%", "-50%", "-75%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 0.25,
          }}
        >
          {logos.map((logo, index) => {
            return (
              <motion.div
                key={index}
                className="flex justify-center p-4 h-24 bg-black -translate-y-1/4"
                animate={{
                  opacity: opacityValues[index],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 0,
                  ease: timingFunction,
                }}
              >
                <img src={logo} alt={logosAltText[index]} className="h-full" />
              </motion.div>
            );
          })}
        </motion.span>
        <div>+33 more</div>
      </div>
      <div className="bg-black w-full h-80 absolute bottom-0"></div>
    </div>
  );
};

export default BackedBy;
