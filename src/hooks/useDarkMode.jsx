import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.theme : "dark");

  const colorTheme = theme === "dark" ? "dark" : "light";

  useEffect(() => {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", colorTheme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", colorTheme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
};
