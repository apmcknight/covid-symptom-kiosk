import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Greeting from '../Greeting';
import maskIcon from '../../assets/icons/mask.svg'
import './startScreen.css';
import '../../App.css';
import ScreeningQuestions from '../screeningQuestions/screeningQuestions';

const StartScreen = () => {
    return(
        <div>
            <img src={maskIcon} alt=""/>
            <Greeting/>
            <p>To get started, click the start button below.</p>
                <Link to="screening-questions" className="PrimaryBtn">
                    Start Check
                </Link>
        
            <Switch>
                <Route component={ScreeningQuestions} path="/screening-questions"/>
            </Switch>
        </div>
    )
}

export default StartScreen;
