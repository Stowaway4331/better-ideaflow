import { useState } from "react";
import { motion } from "framer-motion";

const linkText = ["Try Ideaflow Notes", "iOS", "Guide", "Twitter", "Newsletter"];

const NotesLinks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap md:justify-between md:items-center gap-2 mb-4">
      {linkText.map((label, index) => {
        const isActive = index === activeIndex;
        return (
          <motion.a
            key={label}
            href="#"
            className="relative w-full py-2.5 flex justify-center items-center rounded-full"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index + 0.4, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            {isActive && (
              <motion.span
                layoutId="notes-blob"
                className="hidden md:block absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 font-semibold text-sm transition-colors duration-300 ${
                isActive ? "text-white md:text-black" : "text-accent"
              }`}
            >
              {label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
};

export default NotesLinks;
