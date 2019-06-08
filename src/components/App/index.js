import React from 'react';
import ROUTES from '../../constants/routes';
import { setupAuthentication }  from '../Session';

import Navigation from '../Navigation';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "../Landing";
import Dashboard from "../Dashboard";
import Home from "../Home";


const App = () => {
  return (
    <Router>
      <Navigation />

      <Route path={ROUTES.HOME} exact component={Home} />
      <Route path={ROUTES.LANDING} exact component={Landing} />
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
    </Router>
  )
};

export default setupAuthentication(App);
