import React from 'react';
import {Link} from 'react-router-dom';

const PageError = () => {
    return(
        <div>
            <h1>Error 404</h1>
            <p>That page wasn't found</p>
            <Link to="/">Go back Home</Link>
        </div>
    )
}

export default PageError;