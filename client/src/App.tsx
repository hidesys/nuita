import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './common/Header';

import Landing from './landing/Landing';
import SignIn from './registrations/SignIn';
import SignUp from './registrations/SignUp';

import './App.scss';

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/users/sign_up">
          <SignUp></SignUp>
        </Route>
        <Route path="/users/sign_in">
          <SignIn></SignIn>
        </Route>
        <Route path="/">
          <Landing></Landing>
        </Route>
      </Switch>
    </Router>
  );
}
