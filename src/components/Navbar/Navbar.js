import React from 'react'
import '../../public/css/navbar.css'
import { IsMobile } from '../../helpers/window'
import Alarm from './Navbar.Alarm'
import Stopwatch from './Navbar.Stopwatch'
import Timer from './Navbar.Timer'
import Clock from './Navbar.Clock'

const NavbarApp = () => {
    
    return (
        <div id="navbar" className={(IsMobile() ? "mobile-version" : "")}>
            <div className="navbar-logo float-left" title="Clock app" onClick={() => { window.location.href = "/" }}>
                <span>Clock App</span>
            </div>
            <Alarm></Alarm>
            <Clock></Clock>
            <Stopwatch></Stopwatch>
            <Timer></Timer>
        </div>
    );
}

export default NavbarApp;