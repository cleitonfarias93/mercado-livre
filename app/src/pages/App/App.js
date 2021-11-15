import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import SearchBox from 'components/SearchBox/SearchBox';

// Pages
import SearchResult from 'pages/SearchResult/SearchResult';
import ItemDetail from 'pages/ItemDetail';
import NotFoundItem from 'pages/NotFoundItem';

// Styles
import './App.scss';

const App = () => (
  <Switch>
    <div className="App">
      <SearchBox />
      <div className="App__content">
        <Route exact path="/items" component={SearchResult} />
        <Route exact path="/items/:id" component={ItemDetail} />
        <Route exact path="/not-found" component={NotFoundItem} />
      </div>
    </div>
  </Switch>
);

export default App;
