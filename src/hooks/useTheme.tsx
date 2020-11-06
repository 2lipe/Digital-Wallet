import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ThemeContextProps = {
  toggleTheme(): void;
  theme: ThemeProps;
};

type ThemeProps = {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider = () => {};
