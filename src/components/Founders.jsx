import FounderCard from "../controllers/FounderCard";
import Reveal from "../controllers/Reveal";

import MartyWeiner from "../assets/marty_weiner.png";
import JohnDevadoss from "../assets/john_devadoss.png";
import TimDraper from "../assets/tim_draper.png";

const founders = [
  {
    img: MartyWeiner,
    name: `Marty Weiner`,
    credentials: `Former CTO, Reddit|Ideaflow Advisor`,
    quote: `A key step to realizing the potential of the Web as a medium for collective intelligence.`,
  },
  {
    img: JohnDevadoss,
    name: `John Devadoss`,
    credentials: `Founding Director, Microsoft Digital Consulting`,
    quote: `Ideaflow is the force multiplier for business productivity in this new normal.`,
  },
  {
    img: TimDraper,
    name: `Tim Draper`,
    credentials: `Founder, DFJ|Ideaflow Investor`,
    quote: `The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I'm very excited for what Ideaflow is building. `,
  },
];

const Founders = () => {
  return (
    <div className="grid sm:grid-cols-3 auto-cols-fr auto-rows-fr gap-4 relative w-full">
      {founders.map((founder, index) => (
        <Reveal key={founder.name} delay={index * 0.1}>
          <FounderCard
            img={founder.img}
            name={founder.name}
            credentials={founder.credentials}
            quote={founder.quote}
          />
        </Reveal>
      ))}
    </div>
  );
};

export default Founders;
