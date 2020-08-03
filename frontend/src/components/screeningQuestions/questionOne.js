import React from 'react';
import {Link} from 'react-router-dom'
import './screeningQuestions'
import '../../App.css';

const ScreeningQuestions = () =>{
    return(
        <div>
            <h1>Hello</h1>
            <Link to="/positive" className="PrimaryBtn">Positive</Link>
        </div>
    )
}
 
export default ScreeningQuestions;
