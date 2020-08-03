import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/navigationBar/navigationBar';
import Start from './components/startScreen/start';



function App() {
  return (
    
      <div className="App">
        <Navigation/>

        <Switch>
          <Route component={Start} exact path="/"/>
        </Switch>

      </div>
  );
}

export default App;
