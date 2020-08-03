import React from 'react';
import '../../App.css';
import './help.css';
import HelpIcon from '../../assets/icons/help.svg';

// import {
//     BrowserRouter as Router,
//     Link,
//     Route
// } from 'react-router-dom';


const helpScreen = () => {
    return(
        <div className="helpContainer">
            <img src={HelpIcon} alt="Help Icon"/>
            <h1>How can we help you?</h1>
            {/* TODO: Add route funcitonality to go to respective routes; when button is clicked upon. */}
            <div className="HelpButtons">
                <button class="PrimaryBtn">Techincal Issue</button>
                <button class="PrimaryBtn">Request Accessibility Assistance</button>
                <button className="PrimaryBtn">Something Else</button>
            </div>
        </div>
    )
}

export default helpScreen;