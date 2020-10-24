import React from 'react';
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';

import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
