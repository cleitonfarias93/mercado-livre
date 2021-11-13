import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import SearchBox from 'components/SearchBox/SearchBox';

// Styles
import './App.scss';

const App = () => (
  <Switch>
    <div className="App">
      <SearchBox />
      <Route exact path="/items" component={() => <span>items</span>} />
    </div>
  </Switch>
);

export default App;
