import React from "react";
import TitleCard from "./TitleCard";

// import { MouseContext } from "./MouseContext";

import PropTypes from "prop-types";

const FounderCard = ({className, img, name, credentials = "", quote = "" }) => {
  credentials = credentials.replace("|", "\n");

  quote = quote.trim();
  if (!quote.endsWith(".")) quote = quote.concat(".");

  // const { mouseX, mouseY } = useContext(MouseContext)

  return (
    <div className={`relative ${className}`}>
      <div className="px-4 py-8 h-full bg-[#0e0e0e] rounded-md">
        <div className="flex-col md:flex md:flex-row items-center justify-center gap-8">
          <img src={img} alt={name} className="h-20 mx-auto md:mx-initial" />
          <div>
            {/* <p>{name}</p>
            <div>
              {creds.map((cred, key) => (
                <p key={key} className="w-[16ch]">
                  {cred}
                  <br />
                </p>
              ))}
            </div> */}
            <TitleCard
              animation={false}
              title={name}
              titleSize="xl"
              titleWeight="500"
            >
              <div className="font-light">
                <p
                  className="text-sm w-[17ch] line-clamp-2"
                  title={credentials}
                >
                  {credentials}
                </p>
              </div>
            </TitleCard>
          </div>
        </div>
        <div className="pt-8 pb-4">
          <p className="text-center leading-5 font-[350]">&ldquo;{quote}&rdquo;</p>
        </div>
      </div>
      {/* <div
        className="spotlight absolute inset-0 h-full w-full rounded-md z-10"
        style={{
          backgroundImage: `radial-gradient(800px circle at ${mouseX.current}px ${mouseY.current}px, rgba(255, 255, 255, 0.2), transparent 40%)`,
        }}
      ></div> */}
    </div>
  );
};

FounderCard.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  credentials: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default FounderCard;
