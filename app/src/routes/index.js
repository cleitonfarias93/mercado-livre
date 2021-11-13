import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Features
import App from 'pages/App';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
