import React from 'react'
import {Stopwatch} from 'react-bootstrap-icons'

const NavbarStopwatch = () => {

    const page = window.location.href.split('/').pop();
    
    const IsActive = () => {
        return page === "stopwatch";
    }

    const classContent = IsActive() ? "navbar-stopwatch active" : "navbar-stopwatch";

    return(
        <div className={classContent} title="Stopwatch" onClick={() => {
            window.location.href = "/stopwatch";
        }}>
            <span>Stopwatch</span>
            <Stopwatch className="icon"></Stopwatch>
        </div>
    );
}
export default NavbarStopwatch;