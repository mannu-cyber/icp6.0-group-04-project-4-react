import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-3  ">
<img src='theme.png' alt="" />
    </button>
  );
};

export default ThemeToggle;
