import { motion } from "framer-motion";

import PropTypes from 'prop-types';

const Button = ({ bgColor = "#00c8ce", children }) => {
  return (
    <motion.button
      style={{ backgroundColor: bgColor }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px -6px rgba(0, 200, 206, 0.6)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="min-w-20 w-max px-6 py-3 rounded-full text-sm font-bold cursor-pointer text-black"
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
