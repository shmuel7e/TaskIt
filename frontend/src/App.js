import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';

import Header from '../src/cmps/header/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import TopicPage from './pages/TopicPage';
import AuthPage from './pages/AuthPage';



function App() {
  return (
    <main>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route component={HomePage} path="/" exact></Route>
          <Route component={TopicPage} path="/topic"></Route>
          <Route component={AuthPage} path="/auth" exact></Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
