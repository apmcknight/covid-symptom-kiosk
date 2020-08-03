import React from 'react';
import {Link} from 'react-router-dom'
import './menu.css'
import '../../App.css';

const StartScreen = () => {
    return(
        <div className="menuContainer">
            <Link to="/">Home</Link>
            <Link to="/help">Get Help</Link>
            <a href="https://www.github.com/apmcknight/covid-symptom-kiosk">Report a Bug</a>
            <Link to="/config">Configure</Link>

        </div>
    )
}

export default StartScreen;
