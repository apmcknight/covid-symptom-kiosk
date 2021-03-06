import React from 'react';
import {Link} from 'react-router-dom'
import './screeningQuestions.css'
import '../../App.css';

const ScreeningQuestions = () =>{
    return(
        <div>
            <div className="questionContainer">
                <h1>Question 1</h1>
                <p>Have you been around others or in large crowds?</p>
            </div>
            <Link to="/positive" className="PrimaryBtn ScreeningMarginRight" >Yes</Link>
            <Link to="/question-two" className="PrimaryBtn">No</Link>
        </div>
    )
}
 
export default ScreeningQuestions;
