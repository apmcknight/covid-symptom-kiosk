import React from 'react';
import '../../App.css';
import './restartConfirm.css';
import restartIcon from '../../assets/icons/restart.svg';
import {Link} from 'react-router-dom';

const restartConfirm = () => {
    return(
        <div className="App restartContainer">
            <img src={restartIcon} alt="Restart Icon"/>
            <h1>Are you sure you want to restart?</h1>
            <p>Any progress will be lost, and you'll have to retake the exam to finish the check-up.</p>
            <Link to="/">
            <button className="PrimaryBtn">Yes, Cancel</button>
            </Link>
            {/* TODO: Link the button(s) to their respective actions. */}
            <Link to="/" className="PrimaryBtn" style={{margin: 25}}>Continue</Link>
        </div>
       
    
    )
}

export default restartConfirm;