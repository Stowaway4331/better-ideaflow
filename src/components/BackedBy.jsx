import React from "react";
import FirstRoundLogo from "../assets/first round.png";
import EightVCLogo from "../assets/8vc white.png";
import StartXLogo from "../assets/startx.png";
import { motion } from "framer-motion";

const BackedBy = () => {
  // const logos = [FirstRoundLogo, EightVCLogo, StartXLogo, FirstRoundLogo];
  const logosAltText = ["first round", "8vc", "startx"];

  const logos = [FirstRoundLogo, EightVCLogo, StartXLogo];

  return (
    <div className="flex flex-col items-center relative gap-8">
      <h2 className="text-4xl text-center">
        Backed by world-class investors and partners
      </h2>
      <div className="flex items-center justify-center">
        <div className="top-16 -z-10 grid text-4xl">
          {logos.map((logo, index) => {
            return (
              <motion.div
                key={index}
                className="col-start-1 row-start-1 w-64 justify-center"
                initial={{ opacity: 0, translateY: "75%" }}
                animate={{
                  opacity: [null, 1, 0],
                  translateY: [null, "0%", "-75%"],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: index * 1.5,
                  repeatDelay: logos.length * 1.5 - 3, // `total delay - duration` (the time the first item should return back to initial style)
                }}
              >
                <div
                  className="h-20 flex justify-center"
                  style={{ backgroundColor: logo }}
                >
                  <img src={logo} alt={logosAltText[index]} />
                </div>
              </motion.div>
            );
          })}
        </div>
        <span className="text-4xl text-center">+33 more</span>
      </div>
    </div>
  );
};

export default BackedBy;
