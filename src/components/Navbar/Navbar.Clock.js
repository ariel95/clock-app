import React from 'react'
import {Clock} from 'react-bootstrap-icons'

const NavbarClock = (props) => {
    const page = window.location.href.split('/').pop();
    
    const IsActive = () => {
        return page === "clock";
    }

    const classContent = IsActive() ? "navbar-clock active" : "navbar-clock";

    return(
        <div className={classContent} title="Clock" onClick={() => {
            window.location.href = "/clock";
        }}>
            
            <Clock className="icon"></Clock>
            <span>Clock</span>
        </div>
    );
}

export default NavbarClock;