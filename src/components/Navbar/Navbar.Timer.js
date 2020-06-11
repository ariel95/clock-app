import React from 'react'
import {Watch} from 'react-bootstrap-icons'

const NavbarTimer = () => {

    const page = window.location.href.split('/').pop();
    
    const IsActive = () => {
        return page === "timer";
    }

    const classContent = IsActive() ? "navbar-timer active" : "navbar-timer";

    return(
        <div className={classContent} title="Timer" onClick={() => {
            window.location.href = "/timer";
        }}>
            <Watch className="icon"></Watch>
            <span>Timer</span>
            
        </div>
    );
}

export default NavbarTimer;


