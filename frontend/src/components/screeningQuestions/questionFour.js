import React from 'react';
import {Link} from 'react-router-dom'
import './screeningQuestions.css'
import '../../App.css';

const QuestionThree = () =>{
    return(
        <div>
            <div className="questionContainer">
                <h1>Question 4</h1>
                <p>Have you had headaches, bodyaches, or otherwise felt I'll in the past 14 days?</p>
            </div>
            <Link to="/positive" className="PrimaryBtn ScreeningMarginRight" >Yes</Link>
            <Link to="/clear-screening" className="PrimaryBtn">No</Link>
        </div>
    )
}
 
export default QuestionThree;
