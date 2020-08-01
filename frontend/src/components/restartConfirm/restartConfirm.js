import React from 'react';
import '../../App.css';
import './restartConfirm.css';
import restartIcon from '../../assets/icons/restart.svg';
// import {
//     BrowswerRouter as Route,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

const restartConfirm = () => {
    return(
        <div className="App">
            <img src={restartIcon} alt="Restart Icon"/>
            <h1>Are you sure you want to restart?</h1>
            <p>Any progress will be lost, and you'll have to retake the exam to finish the check-up.</p>
            <button className="PrimaryBtn">Yes, Cancel</button>
            {/* TODO: Link the button(s) to their respective actions. */}
            <button className="PrimaryBtn" style={{margin: 25}}>Continue</button>
        </div>
       
    
    )
}

export default restartConfirm;