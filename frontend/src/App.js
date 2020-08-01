import React from 'react';
import './App.css';
import Navigation from './components/navigationBar/navigationBar';
import Start from './components/startScreen/start'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Start/>
    </div>
  );
}

export default App;
