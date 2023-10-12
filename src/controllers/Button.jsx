import React from "react";

import PropTypes from 'prop-types';

const Button = ({bgColor, children }) => {
  return (
    <button className={`bg-[${bgColor}] bg-${bgColor} min-w-20 w-max px-4 py-2 rounded-md text-[0.75em] font-bold cursor-pointer text-black hover:scale-105 transition-all`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
