import React from 'react';
import '../../App.css';
import './navigationBar.css';
import RestartIcon from '../../assets/icons/restart.svg';
import HelpIcon from '../../assets/icons/help.svg';
import MenuIcon from '../../assets/icons/menu.svg';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route
// } from 'react-router-dom';

const NavigationBar = () => {
    return(
       <div className="navigation">
           <h3>COVID SYMPTOM KIOSK &mdash; ALPHA 0.0</h3>
           <a className="restartBtn" href="#">
               <img src={RestartIcon} alt="Restart"/>
           </a>
           <a className="menuBtn" href="#">
               <img src={MenuIcon} alt="Menu"/>
           </a>
           <a className="helpBtn" href="#">
               <img src={HelpIcon} alt="Help"/>
           </a>
       </div>
    )
}

export default NavigationBar;