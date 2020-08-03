import React from 'react';

const Greeting = () =>{
    let day = new Date();
    let hour = day.getHours();

    if (hour >=23 && hour < 11) {
        return(
            <h1>Good Morning!</h1>
        )
    } if (hour >= 12 && hour < 17) {
        return(
            <h1>Good Afternoon!</h1>
        )
    } if (hour >= 18 && hour < 23) {
        return(
            <h1>Good Evening!</h1>
        )
    } else {
        return(
            <h1>Hello, There!</h1>
        )
    }


}

export default Greeting;