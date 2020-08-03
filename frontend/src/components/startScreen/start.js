import React from 'react';
import {Link} from 'react-router-dom';
import Greeting from '../Greeting';
import maskIcon from '../../assets/icons/mask.svg'
import './startScreen.css';
import '../../App.css';

const StartScreen = () => {
    return(
        <div>
            <img src={maskIcon} alt="Mask Icon"/>
            <Greeting/>
            <p>To get started, click the start button below.</p>
            <Link to="/screening-questions" className="PrimaryBtn">Start Check</Link>
        </div>
    )
}

export default StartScreen;
