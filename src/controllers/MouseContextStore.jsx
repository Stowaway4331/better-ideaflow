import { createContext, createRef, useContext } from "react";

const MouseContext = createContext(null);
const ref = createRef();

// eslint-disable-next-line react/prop-types
export const MouseContextStore = ({ children }) => {
  return <MouseContext.Provider value={ref}>{children}</MouseContext.Provider>;
};

export const useMouseContext = () => useContext(MouseContext)
