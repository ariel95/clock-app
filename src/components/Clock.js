import React from 'react'
import '../public/css/clock.css'
import {ClockFill} from 'react-bootstrap-icons'
const Clock = (props) => {

   
    
    const getdate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        let dateObj = new Date();
        let month = monthNames[dateObj.getMonth()];
        let day = String(dateObj.getDate()).padStart(2, '0');
        let year = dateObj.getFullYear();
        return month  + '\n'+ day  + ', ' + year;

    }

    const getTime = () => {
        let dateObj = new Date();
        let hour = String(dateObj.getHours()).padStart(2, '0');
        let minutes = String(dateObj.getMinutes()).padStart(2, '0');
        let seconds = String(dateObj.getSeconds()).padStart(2, '0');
        return hour + ':' + minutes + ':' +seconds;
    }


    setInterval(() => {
        document.querySelector('.date span').textContent = getdate();
        document.querySelector('.time span').textContent = getTime();
    }, 1000);
    
    return(
        <div id="clock">
            <h1>Clock</h1>
            <ClockFill className="icon"></ClockFill>
            <div className="date">
                <span>{getdate()}</span>
            </div>
            <div className="time">
                <span>{getTime()}</span>
            </div>

        </div>
    );
}

export default Clock;