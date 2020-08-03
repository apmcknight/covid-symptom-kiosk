import React from 'react';
import {Link} from 'react-router-dom'
import './screeningQuestions.css'
import '../../App.css';

const QuestionThree = () =>{
    return(
        <div>
            <div className="questionContainer">
                <h1>Question 3</h1>
                <p>Do you or have you had a sudden loss of taste or vision in the past 14 days?</p>
            </div>
            <Link to="/positive" className="PrimaryBtn ScreeningMarginRight" >Yes</Link>
            <Link to="/question-four" className="PrimaryBtn">No</Link>
        </div>
    )
}
 
export default QuestionThree;
