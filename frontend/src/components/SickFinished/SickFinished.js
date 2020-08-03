import React from 'react';
import {Link, Route, Router} from 'react-router-dom'
import './SickFinished';
import '../../App.css';
import SickIcon from '../../assets/icons/sick.svg'

const ResultSick = () =>{
    return(
        <div>
            <div className="sickContainer">
                <img src={SickIcon} alt="Sick Icon"/>
                <h1>Thanks, feel better!</h1>
            </div>
            <Link to="/" className="PrimaryBtn">Exit</Link>
        </div>
        
    )
}
 
export default ResultSick;
