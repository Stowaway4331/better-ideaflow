import React from "react";
import FounderCard from "../controllers/FounderCard";
import Reveal from "../controllers/Reveal";

import MartyWeiner from "../assets/marty_weiner.png";
import JohnDevadoss from "../assets/john_devadoss.png";
import TimDraper from "../assets/tim_draper.png";

// import { MouseContext } from "../controllers/MouseContext";

const Founders = () => {
  // const mouseX = useRef(0);
  // const mouseY = useRef(0);

  // useEffect(() => {
  //   const handleOnMouseMove = (e) => {
  //     console.log("called");
  //     const { currentTarget: target } = e;
  //     // const spotlight = target.querySelector('.spotlight')

  //     const rect = target.getBoundingClientRect(),
  //       x = e.clientX - rect.left,
  //       y = e.clientY - rect.top;

  //     // target.style.setProperty('--mouse-x', `${x}`)
  //     // target.style.setProperty('--mouse-y', `${y}`)

  //     mouseX.current = x;
  //     mouseY.current = y;
  //   };

  //   for (const card of document.querySelectorAll(".founder-card")) {
  //     card.onmousemove = (e) => handleOnMouseMove(e);
  //   }
  // }, []);

  return (
    <Reveal>
      <div className="grid sm:grid-cols-3 auto-cols-fr auto-rows-fr gap-2 relative">
        {/* <MouseContext.Provider> */}
          <FounderCard
            className="founder-card"
            img={MartyWeiner}
            name={`Marty Weiner`}
            credentials={`Former CTO, Reddit|Ideaflow Advisor`}
            quote={`A key step to realizing the potential of the Web as a medium for collective intelligence.`}
          />
          <FounderCard
            className="founder-card"
            img={JohnDevadoss}
            name={`John Devadoss`}
            credentials={`Founding Director, Microsoft Digital Consulting`}
            quote={`Ideaflow is the force multiplier for business productivity in this new normal.`}
          />
          <FounderCard
            className="founder-card"
            img={TimDraper}
            name={`Tim Draper`}
            credentials={`Founder, DFJ|Ideaflow Investor`}
            quote={`The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I'm very excited for what Ideaflow is building. `}
          />
        {/* </MouseContext.Provider> */}
      </div>
    </Reveal>
  );
};

export default Founders;
