import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
interface props {
  children: JSX.Element | JSX.Element[];
}

const StoreProvider = ({ children }: props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default StoreProvider;
