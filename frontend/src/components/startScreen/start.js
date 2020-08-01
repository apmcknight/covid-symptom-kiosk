import React from 'react';
import {Route, Router} from 'react-router'
import maskIcon from '../../assets/icons/mask.svg'
import './startScreen.css';
import '../../App.css';

const StartScreen = () => {
    return(
        <div>
            <img src={maskIcon} alt=""/>
            <h1>
                Good Morning!
                {/* TODO: Add dynamic statement to say; Good morning if morning, Good Evening, if evening, etc. */}
            </h1>
            <p>To get started, click the start button below.</p>
                <button className="PrimaryBtn">
                    Start Check
                </button>
        </div>
    )
}

export default StartScreen;
