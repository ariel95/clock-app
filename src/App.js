import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom' //history
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound'
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'
import Clock from './components/Clock'
import Alarm from './components/Alarm'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Clock}></Route>
          <Route exact path="/clock" component={Clock}></Route>
          <Route exact path="/alarm" component={Alarm}></Route>
          <Route exact path="/timer" component={Timer}></Route>
          <Route exact path="/stopwatch" component={Stopwatch}></Route>
          <Route exact path="*" component={NotFound}></Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
