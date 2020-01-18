import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';

import Header from './cmps/Header.jsx'
import HomePage from './pages/HomePage.jsx';
import TrelloPage from './pages/TrelloPage';


function App() {
  return (
    <main>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route component={HomePage} path="/" exact></Route>
          <Route component={TrelloPage} path="/trello" exact></Route>
          {/* <Route component={ToyDetails} path="/toys/:_id" exact></Route>
          <Route component={ToyEdit} path="/toys/edit/:_id" exact></Route>
          <Route component={ToyEdit} path="/toys/edit" exact></Route>
          <Route component={NotFound} path="/"></Route> */}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
