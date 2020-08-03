import React from 'react';
import {Route, Router} from 'react-router'
import Greeting from '../Greeting';
import maskIcon from '../../assets/icons/mask.svg'
import './startScreen.css';
import '../../App.css';

const StartScreen = () => {
    return(
        <div>
            <img src={maskIcon} alt=""/>
            <Greeting/>
            <p>To get started, click the start button below.</p>
                <button className="PrimaryBtn">
                    Start Check
                </button>
        </div>
    )
}

export default StartScreen;
