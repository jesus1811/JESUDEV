import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { initialState } from "./ThemeState";
interface props {
  children: JSX.Element | JSX.Element[];
}
const ThemeProvider = ({ children }: props) => {
  const [theme, setTheme] = useState(initialState);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
