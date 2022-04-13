import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
const Timer = ({showModal,setShowModal}) => {
  const [seconds, setSeconds] = useState('03');
  const [minutes,setMinutes] = useState('00');
  const [isActive, setIsActive] = useState(false);
  //functions
  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds('00');
    setMinutes('25');
    setIsActive(false);
  }
  function minusOne(){
    if(!isActive)
    {
      if(minutes > '00')
      {
        setMinutes(minutes => minutes - 1);
        if(minutes <= '10')
        {
          setMinutes(minutes => '0' + minutes)
        }
      }
    }
  }
  function plusOne(){
    if(!isActive)
    {
      if(minutes < '60')
      {
        setMinutes(minutes => parseInt(minutes) + 1);
        if(minutes <= '10')
        {
          setMinutes(minutes => '0' + minutes)
        }
        if(minutes == '09')
        {
          setMinutes('10');
        }
      }
    }
  }
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if(seconds != '00')
        {
          setSeconds(seconds => seconds - 1);
        }
        if(seconds <= '10'&& seconds != '00')
        {
          setSeconds(seconds => '0' + seconds);
        } 
        if (seconds == '00') {

          if(minutes != '00')
          {
            setMinutes(minutes => minutes - 1); 
            if(minutes <= '10')
            {
              setMinutes(minutes => '0' + minutes)
            }
            setSeconds('59');
          }
          else
          {
            setShowModal(true);
            clearInterval(interval);
          }
        }       
        
      }, 1000);
    } else if (!isActive || (seconds == '00' && minutes == '00')) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds,minutes]);
  return (
    <div className="app">
      <div className="time-container">
        <div className="time">{minutes} : {seconds}</div>
      </div>
      <div className="row-container">
        <div className="row">
          <button className="minus" onClick={minusOne}><FontAwesomeIcon icon={faMinus}/></button>
          <button className={`button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>{isActive ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>} </button>
          <button className="button-secondary" onClick={reset}> <FontAwesomeIcon icon={faArrowRotateLeft}/> </button>
          <button className="add" onClick={plusOne}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
      </div>
    </div>
  );
};

export default Timer;