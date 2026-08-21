import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TitleCard from "./TitleCard";

import PropTypes from "prop-types";

const FounderCard = ({ className, img, name, credentials = "", quote = "" }) => {
  credentials = credentials.replace("|", "\n");

  quote = quote.trim();
  if (!quote.endsWith(".")) quote = quote.concat(".");

  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`relative overflow-hidden rounded-xl border border-ink-border bg-ink-card px-6 py-8 h-full ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(500px circle at ${spot.x}% ${spot.y}%, rgba(0, 200, 206, 0.12), transparent 60%)`,
        }}
      ></div>

      <div className="relative flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-6">
        <img
          src={img}
          alt={name}
          className="h-20 w-20 rounded-full object-cover ring-1 ring-white/10"
        />
        <div>
          <TitleCard animation={false} title={name} titleSize="xl" titleWeight="600">
            <p className="text-sm text-white/50 whitespace-pre-line font-light">
              {credentials}
            </p>
          </TitleCard>
        </div>
      </div>
      <div className="relative pt-8 pb-2">
        <p className="text-center md:text-left leading-6 font-[350] text-white/80">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </motion.div>
  );
};

FounderCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  credentials: PropTypes.string,
  quote: PropTypes.string,
};

export default FounderCard;
