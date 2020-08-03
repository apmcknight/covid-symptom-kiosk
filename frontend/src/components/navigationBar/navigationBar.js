import React from 'react';
import '../../App.css';
import './navigationBar.css';
import RestartIcon from '../../assets/icons/restart.svg';
import HelpIcon from '../../assets/icons/help.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import {Link, Route, Switch} from 'react-router-dom';
import RestartConfirm from '../restartConfirm/restartConfirm';
import Help from '../help/help';
import Menu from '../menu/menu';


const NavigationBar = () => {
    return(
        <div className="navigation">
            <h3>COVID SYMPTOM KIOSK &mdash; ALPHA 0.0</h3>

            <Link to="/restart" className="restartBtn">
                <img src={RestartIcon} alt="Restart"/>
            </Link>
            
            <Link to="/menu" className="menuBtn" >
                <img src={MenuIcon} alt="Menu"/>
            </Link>
            <Link to="/help" className="helpBtn">
                <img src={HelpIcon} alt="Help"/>
            </Link>

            <Switch>
                <Route component={RestartConfirm} path="/restart"/>
                <Route component={Help} path="/help"/>
                <Route component={Menu} path="/menu"/>
            </Switch>
        </div>
    )
}

export default NavigationBar;