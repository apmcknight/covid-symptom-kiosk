import React from 'react';
import {Link} from 'react-router-dom';
import Greeting from '../Greeting';
import './disclaimer.css';
import '../../App.css';

const Disclaimer = () => {
    return(
        <div>
            <h1>Disclaimers</h1>
            <p>
                <ol>
                    <li>This project uses open-source software tools, like: ReactJS, and NodeJS</li>
                    <li>
                        The end-user understands that this tool is not 100% accurate in determining if an individual has Coronavirus.
                    </li>
                    <li>The software is provided "AS IS" without WARRANTY</li>
                    <li>The software does not obtain and store personal identifiable information.</li>
                    <li>Adam McKnight, @apmcknight; IS NOT responsible for software modifications beyond source</li>
                    <li>This project is not funded, and is free, and open-source</li>
                    <li>This project is not affiliated with a health, or government organization</li>
                </ol>
            </p>
        </div>
    )
}

export default Disclaimer;
