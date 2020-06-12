import React, { useEffect, useState } from 'react'
import { StopFill, PauseFill, PlayFill } from 'react-bootstrap-icons'
import '../public/css/stopwatch.css'

const Stopwatch = (props) => {

    const [_stopwatch, setStopwatch] = useState(document.getElementById('stopwatch-number'));
    const [_play, setPlay] = useState(document.getElementById('play'));
    const [_stop, setStop] = useState(document.getElementById('stop'));
    const [_pause, setPause] = useState(document.getElementById('pause'));
    const [_time, setTime] = useState(new Date(0, 0, 0));
    let playInterval = 0;

    useEffect(() => {
        setStopwatch(document.getElementById('stopwatch-number'));
        setPlay(document.getElementById('play'));
        setStop(document.getElementById('stop'));
        setPause(document.getElementById('pause'));
    }, [])

    const getTime = (time) => {
        let dateObj = time || new Date();
        let hour = String(dateObj.getHours()).padStart(2, '0');
        let minutes = String(dateObj.getMinutes()).padStart(2, '0');
        let seconds = String(dateObj.getSeconds()).padStart(2, '0');
        return hour + ':' + minutes + ':' + seconds;
    }

    function play(params) {
        playInterval = setInterval(() => {
            _time.setSeconds(_time.getSeconds() + 1)
            _stopwatch.innerHTML = getTime(_time);
        }, 1000);
        _play.classList.add('ocultar');
        _stop.classList.remove('ocultar');
        _pause.classList.remove('ocultar');
    }

    function pause(params) {
        clearInterval(playInterval);
        _play.classList.remove('ocultar');
        _pause.classList.add('ocultar');
    }

    async function stop(params) {
        clearInterval(playInterval);
        setTime(new Date(0, 0, 0));
        _stopwatch.innerHTML = getTime(new Date(0, 0, 0));
        _play.classList.remove('ocultar');
        _stop.classList.add('ocultar');
        _pause.classList.add('ocultar');
    }

    return (
        <div id="stopwatch">
            <h1>Stopwatch</h1>
            <div className="time">
                <span id="stopwatch-number">00:00:00</span>
            </div>
            <div className="actions">
                <button id="play" onClick={() => play()}><div><PlayFill></PlayFill></div></button>
                <button id="pause" className="ocultar" onClick={() => pause()}><div><PauseFill></PauseFill></div></button>
                <button id="stop" className="ocultar" onClick={() => stop()}><div><StopFill></StopFill></div></button>

            </div>
        </div>
    );
}
export default Stopwatch;