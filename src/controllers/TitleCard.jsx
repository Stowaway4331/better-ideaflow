import { motion } from "framer-motion";

import PropTypes from "prop-types";

const SIZE_CLASSES = {
  "7xl": "text-5xl md:text-7xl",
  "6xl": "text-4xl md:text-6xl",
  "5xl": "text-4xl md:text-5xl",
  "4xl": "text-3xl md:text-4xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  md: "text-base",
};

const TitleCard = ({
  animation = true,
  title,
  titleWeight = "normal",
  titleSize = "6xl",
  gradient = false,
  children,
}) => {
  return (
    <div>
      <h1
        className={`${SIZE_CLASSES[titleSize] ?? "text-4xl"} text-left whitespace-pre-line leading-tight ${
          gradient ? "text-gradient" : ""
        }`}
        style={{ fontWeight: `${titleWeight}` }}
      >
        {title}
      </h1>
      {animation && (
        <motion.div
          className="my-8 h-px rounded-full bg-gradient-to-r from-accent via-accent/40 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
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
  gradient: PropTypes.bool,
  children: PropTypes.node,
};

export default TitleCard;
