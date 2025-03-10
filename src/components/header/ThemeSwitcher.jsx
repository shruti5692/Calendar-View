// src/components/header/ThemeSwitcher.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"; // Corrected path
import { WeatherSunnyRegular, WeatherMoonRegular } from "@fluentui/react-icons"; 
import { Button } from "@fluentui/react-components"; // Use Fluent UI Button for better UX

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      appearance="subtle"
      aria-label="Toggle Theme"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? <WeatherSunnyRegular fontSize={20} /> : <WeatherMoonRegular fontSize={20} />}
    </Button>
  );
};

export default ThemeSwitcher;
