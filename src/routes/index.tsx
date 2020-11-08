import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  return (
    <Router>
      {/* <AppRoutes /> */}
      <AuthRoutes />
    </Router>
  );
};

export default Routes;
