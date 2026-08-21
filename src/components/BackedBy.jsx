import FirstRoundLogo from "../assets/first round.png";
import EightVCLogo from "../assets/8vc white.png";
import StartXLogo from "../assets/startx.png";
import Reveal from "../controllers/Reveal";

const BackedBy = () => {
  const logos = [
    { src: FirstRoundLogo, alt: "First Round Capital" },
    { src: EightVCLogo, alt: "8VC" },
    { src: StartXLogo, alt: "StartX" },
  ];

  const track = [...logos, ...logos, ...logos];

  return (
    <Reveal>
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-white/90">
          Backed by world-class investors and partners
        </h2>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="flex items-center gap-20 w-max animate-marquee hover:[animation-play-state:paused]">
            {track.map((logo, index) => (
              <div key={index} className="h-12 flex items-center shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
        <span className="text-lg text-white/40 text-center">+33 more</span>
      </div>
    </Reveal>
  );
};

export default BackedBy;
