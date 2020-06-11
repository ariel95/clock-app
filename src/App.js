import React, {useEffect,useState} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom' //history
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound'
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'
import Clock from './components/Clock'
import Alarm from './components/Alarm'

function App() {

  const [orientation, setOrientation] = useState(window.screen.orientation.angle);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    setOrientation(window.screen.orientation.angle);
  }, [orientation]);

  window.addEventListener("orientationchange", function () {
    setOrientation(window.screen.orientation.angle);
  });
  window.addEventListener("resize", function () {
    setOrientation(window.screen.orientation.angle);
  });

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/"
              render={(props) => 
                  <Clock {...props} orientation={orientation} ></Clock>
          }/>
          <Route exact path="/clock"
              render={(props) => 
                  <Clock {...props} orientation={orientation} ></Clock>
          }/>
          <Route exact path="/alarm"
              render={(props) => 
                  <Alarm {...props} orientation={orientation} ></Alarm>
          }/>
          <Route exact path="/timer"
              render={(props) => 
                  <Timer {...props} orientation={orientation} ></Timer>
          }/>
          <Route exact path="/stopwatch"
              render={(props) => 
                  <Stopwatch {...props} orientation={orientation} ></Stopwatch>
          }/>
          <Route exact path="*" component={NotFound}></Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
