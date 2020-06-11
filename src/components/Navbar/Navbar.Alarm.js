import React from 'react'
import { Alarm } from 'react-bootstrap-icons'

const NavbarAlarm = (props) => {
    const page = window.location.href.split('/').pop();
    
    const IsActive = () => {
        return page === "alarm";
    }

    const classContent = IsActive() ? "navbar-alarm active" : "navbar-alarm";

    return (
        <div className={classContent} title="Alarm" onClick={() => {
            window.location.href = "/alarm";
        }}>
            
            <Alarm className="icon"></Alarm>
            <span>Alarm</span>
        </div>
    );

}

export default NavbarAlarm;