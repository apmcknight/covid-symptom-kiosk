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
import ScreeningQuestions from '../screeningQuestions/screeningQuestions';
import PositiveResult from '../resultSick/resultSick';
import QuestionTwo from '../screeningQuestions/questionTwo';
import QuestionThree from '../screeningQuestions/questionThree';
import QuestionFour from '../screeningQuestions/questionFour';
import ClearScreening from '../resultClear/resultClear';
import SickFinished from '../SickFinished/SickFinished';


const NavigationBar = () => {
    return(
        <div className="navigation">
            <Link to="/">
                <h3>COVID SYMPTOM KIOSK &mdash; ALPHA 0.0</h3>
            </Link>

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
                <Route component={ScreeningQuestions} path="/screening-questions"/>
                <Route component={PositiveResult} path="/positive"/>
                <Route component={QuestionTwo} path="/question-two"/>
                <Route component={QuestionThree} path="/question-three"/>
                <Route component={QuestionFour} path="/question-four"/>
                <Route component={ClearScreening} path="/clear-screening"/>
                <Route component={SickFinished} path="/finished"/>
            </Switch>
        </div>
    )
}

export default NavigationBar;