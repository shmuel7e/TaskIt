import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import history from './history';

import {logout} from './actions/UserActions'
import Header from '../src/cmps/header/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import TrelloPage from './pages/TrelloPage';
import AuthPage from './pages/AuthPage';

class App extends Component{
  
  onLogout=()=>{
    this.props.logout()
  }
  render(){
    return (
      <main>
        <Router history={history}>
          <Header
          onLogout={this.onLogout}
           user={this.props.user}></Header>
          <Switch>
            <Route component={HomePage} path="/" exact></Route>
            <Route component={TrelloPage} path="/trello" exact></Route>
            <Route component={AuthPage} path="/auth" exact></Route>
          </Switch>
        </Router>
      </main>
    );
  }
  
}
const mapDispatchToProps = {
  logout
};
const mapStateToProps = state => {
  return {
      user: state.user.loggedInUser
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
