import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navigation from "./Navigation/Navigation"

import Home from "./Components/Home";
import LoginForm from './Login/Login';
import Dashboard from "./Components/Dashboard";
import Cases from "./CaseInfo/Cases";
import Victims from "./CaseInfo/Victims";
import Volunteer from './Components/Volunteer'
import Speeches from './Components/Speeches';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginForm} />

       
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/volunteer' component={Volunteer} />
        <Route path='/victims' component={Victims} />
        <Route path='/speeches' component={Speeches} />

      </Switch>

    </div>
  );
}

export default App;
