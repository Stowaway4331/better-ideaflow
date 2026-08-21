import Reveal from "../controllers/Reveal";
import Button from "../controllers/Button";
import Blob from "../controllers/Blob";

const Hiring = () => {
  return (
    <Reveal>
      <div className="relative w-full rounded-3xl border border-ink-border overflow-hidden py-28 md:py-36">
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-5 px-6">
          <h1 className="capitalize text-3xl md:text-5xl font-bold text-white">
            We&apos;re hiring key roles
          </h1>
          <p className="text-white/60 text-lg">Help us extend the human mind.</p>
          <div className="mt-2">
            <Button bgColor="#ffffff">
              <span className="text-black">Join us or refer someone</span>
            </Button>
          </div>
        </div>
        <Blob duration={9000} color={"white"} className={`absolute w-2/3 h-2/3 top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 inset-0 -z-10 opacity-[0.07]`} />
        <Blob duration={11000} color={"#00c8ce"} className={`absolute w-2/3 h-2/3 top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 inset-0 -z-10 rotate-180 opacity-30`} />
      </div>
    </Reveal>
  );
};

export default Hiring;
