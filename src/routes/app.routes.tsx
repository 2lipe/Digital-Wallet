import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import List from '../pages/List';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/list/:type" component={List} />
      </Switch>
    </Layout>
  );
};

export default AppRoutes;
