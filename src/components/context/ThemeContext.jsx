// src/components/context/ThemeContext.jsx 
import React, { createContext, useState, useEffect } from "react";
import { FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      <FluentProvider theme={theme === "light" ? webLightTheme : webDarkTheme}>
        {children}
      </FluentProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
