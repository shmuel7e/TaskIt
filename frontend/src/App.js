import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import history from './history';
import { logout } from './actions/UserActions'

import Header from '../src/cmps/header/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import TopicPage from './pages/TopicPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BoardPage from './pages/BoardPage.jsx';
import MsgModal from './cmps/MsgModal.jsx'

class App extends Component {

  onLogout = () => {
    this.props.logout()
    history.push('/')

  }
  render() {
    return (
      <main>
        <Router history={history}>
          <MsgModal/>
          <Header
            onLogout={this.onLogout}
            user={this.props.user}></Header>
          <Switch>
            <Route component={HomePage} path="/" exact></Route>
            <Route component={TopicPage} path="/topic/:id" ></Route>
            <Route component={AuthPage} path="/auth" exact></Route>
            <Route component={AboutPage} path="/about" exact></Route>
            <Route component={BoardPage} path="/board" exact></Route>
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
