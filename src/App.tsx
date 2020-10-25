import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import List from './pages/List';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
