import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import PropTypes from "prop-types";

const TitleCard = ({
  animation = true,
  title,
  titleWeight = "normal",
  titleSize = "6xl",
  children,
}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})

  const mainControlls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControlls.start("final")
    }
  })

  return (
    <div className="">
      <h1
        className={`text-${titleSize} text-left whitespace-pre-line`}
        style={{ fontWeight: `${titleWeight}` }}
      >
        {title}
      </h1>
      {animation && (
        <motion.div
          ref={ref}
          className="my-8 border-b-[1px] rounded-full"
          variants={{
            initial: { width: "0%" },
            final: { width: "100%" },
          }}
          initial="initial"
          animate={mainControlls}
          transition={{
            duration: 1,
            delay: 0.5
          }}
        ></motion.div>
      )}
      <div>{children}</div>
    </div>
  );
};

TitleCard.propTypes = {
  animation: PropTypes.bool,
  title: PropTypes.string.isRequired,
  titleWeight: PropTypes.string,
  titleSize: PropTypes.string,
  children: PropTypes.node,
};

export default TitleCard;
