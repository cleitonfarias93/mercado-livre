import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import SearchBox from 'components/SearchBox/SearchBox';

// Pages
import SearchResult from 'pages/SearchResult/SearchResult';

// Styles
import './App.scss';

const App = () => (
  <Switch>
    <div className="App">
      <SearchBox />
      <Route exact path="/items" component={SearchResult} />
    </div>
  </Switch>
);

export default App;
