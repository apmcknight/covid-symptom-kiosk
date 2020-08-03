import React from 'react';
import {Link} from 'react-router-dom'
import './screeningQuestions.css'
import '../../App.css';

const QuestionOne = () =>{
    return(
        <div>
            <div className="questionContainer">
                <h1>Question 2</h1>
                <p>Do or Have you had a feaver of 98.5 degrees F in the past ten days?</p>
            </div>
            <Link to="/positive" className="PrimaryBtn ScreeningMarginRight" >Yes</Link>
            <Link to="/question-three" className="PrimaryBtn">No</Link>
        </div>
    )
}
 
export default QuestionOne;
