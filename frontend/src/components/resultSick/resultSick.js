import React from 'react';
import {Link} from 'react-router-dom'
import './resultSick.css';
import '../../App.css';
import SickIcon from '../../assets/icons/sick.svg'

const ResultSick = () =>{
    return(
        <div>
            <div className="sickContainer">
                <img src={SickIcon} alt="Sick Icon"/>
                <h1>You May be Sick</h1>
                <p>
                    Please go home, and follow the CDC guidelines. Limit contact with others, wash your hands, and monitor your tempature. For more information, please visit cdc.gov on your mobile phone!
                </p>
            </div>
            <Link to="/finished" className="PrimaryBtn">I'm Leaving</Link>
        </div>
        
    )
}
 
export default ResultSick;
