import React from 'react';
import {Link} from 'react-router-dom'
import './resultClear.css';
import '../../App.css';
import ClearIcon from '../../assets/icons/clear.svg'

const ClearScreening = () =>{
    return(
        <div>
            <div className="clearContainer">
                <img src={ClearIcon} alt="Clear"/>
                <h1>You're probably Not Sick</h1>
                <p>
                    Based off of the questions, you're likely not sick.
                    If you do feel like you're getting sick, please leave and follow the 
                    cdc.gov guidelines!
                </p>
                <h2>Please, aknoledge that you will leave if you feel ill...</h2>
            </div>
            <Link to="/" className="PrimaryBtn ScreeningMarginRight">CONFIRM</Link>
        </div>
    )
}
 
export default ClearScreening;
