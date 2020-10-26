import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
