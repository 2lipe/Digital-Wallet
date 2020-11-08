import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { logged } = useAuth();

  return <Router>{logged ? <AppRoutes /> : <AuthRoutes />}</Router>;
};

export default Routes;
