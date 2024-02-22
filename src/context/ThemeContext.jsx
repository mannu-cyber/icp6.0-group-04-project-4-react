import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeStyles = {
    dark: {
      backgroundColor: "#333",
      color: "#fff",
      border:'1px solid #fff'
    },
    light: {
      backgroundColor: "#fff",
      color: "#333",
      border:'1px solid #333'
    },
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div style={isDarkTheme ? themeStyles.dark : themeStyles.light} className="w-[500px] min-h-screen-600px">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
