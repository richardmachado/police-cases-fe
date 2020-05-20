import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import Navigation from "./Navigation/Navigation"

import Home from "./Components/Home";
import LoginForm from './Login/Login';
import Dashboard from "./Components/Dashboard";
import Cases from "./CaseInfo/Cases";
import Victims from "./CaseInfo/Victims";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>

        <Route exact path='/' component={LoginForm} />
        <Route path='/home' component={Home} />

        //privateroutes
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/cases' component={Cases} />
        <Route path='/victims' component={Victims} />

      </Switch>

    </div>
  );
}

export default App;
