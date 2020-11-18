import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProps } from '../models/Theme';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ThemeContextProps = {
  toggleTheme(): void;
  theme: ThemeProps;
};

type ContentProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider = ({ children }: ContentProps) => {
  const getThemeInLocalStorage = () => {
    const themeSaved = localStorage.getItem('@digital-wallet:theme');

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  };

  const [theme, setTheme] = useState<ThemeProps>(getThemeInLocalStorage);

  const toggleTheme = () => {
    const isDarkTheme = theme.title === 'dark';

    if (isDarkTheme) {
      setTheme(light);
      localStorage.setItem('@digital-wallet:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@digital-wallet:theme', JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
