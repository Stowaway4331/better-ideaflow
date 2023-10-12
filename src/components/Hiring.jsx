import React from "react";
import Reveal from "../controllers/Reveal";
import Button from "../controllers/Button";
import Blob from "../controllers/Blob";

const Hiring = () => {
  return (
    <Reveal>
      <div className="aspect-square text-black p-12 relative">
        <div className="flex flex-col items-center justify-center h-full gap-4 mix-blend-multiply">
          <h1 className="capitalize text-4xl font-bold">
            we&apos;re hiring key roles
          </h1>
          <p>Help us extend the human mind.</p>
          <Button bgColor="black"><span className="text-white">Join us or refer someone</span></Button>
        </div>
        <Blob color={'white'} className={`absolute w-2/3 h-2/3 top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 inset-0 -z-10`} />
        <Blob color={'#00c8ce'} className={`absolute w-2/3 h-2/3 top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 inset-0 -z-10 rotate-180`} />
      </div>
    </Reveal>
  );
};

export default Hiring;
