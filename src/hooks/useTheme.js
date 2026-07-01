import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => useContext(ThemeContext);

export const useThemeClass = (base) => {
  const { isDarkMode } = useTheme();
  return `${base} ${isDarkMode ? "dark" : "light"}`;
};
