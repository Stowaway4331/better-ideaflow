import React, { useEffect } from "react";
import { motion } from "framer-motion";

const NotesLinks = () => {
  const linkText = ["Try Ideaflow Notes", "iOS", "Guide", "Twitter", "Newsletter"];

  useEffect(() => {

    const activeColor = window.innerWidth > 768 ? "black" : "white"

    const blob = document.querySelector(".blob");

    const notesLinks = document.querySelectorAll(".noteslink");

    colorAll(0);

    notesLinks.forEach((link, index) => {
      link.addEventListener("mouseenter", () => {
        blob.style.transform = `translateX(${
          link.getBoundingClientRect().width * index
        }px)`;

        link.querySelector("span").style.color = activeColor;

        colorAll(index)
      });
    });

    notesLinks.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        blob.style.transform = "translateX(0px)";

        colorAll(0)
      });

      // if(index !== 0) link.querySelector('span').style.color = '#00c8ce';
      // else link.querySelector('span').style.color = 'white';
    });

    function colorAll(flag) {
      notesLinks.forEach((link, index) => {
        link.querySelector("span").style.color = "#00c8ce";
        if(index === flag) 
        link.querySelector("span").style.color = activeColor;
      })
    }
  }, []);

  return (
    <div className="w-full md:flex md:justify-between md:items-center mb-4">
      {linkText.map((ele, k) => {
        return (
          <motion.div
            className="w-full"
            href="#"
            key={k}
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.2 * k + 0.5,
            }}
          >
            <a
              className="noteslink relative w-full py-2 flex justify-center items-center rounded-sm /bg-[#00c8ce]"
              href="#"
            >
              {k === 0 && (
                <div className="hidden md:block blob bg-[#00c8ce] rounded-md absolute w-full h-full -z-10 transition-transform duration-500"></div>
              )}
              <span className={`text-[${k === 0 ? "black" : "#00c8ce"}] transition-colors duration-500 font-[600]`}>{ele}</span>
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default NotesLinks;
