import React,{useState,useEffect} from 'react';
import Timer from './Timer'
function Pomodoro() {
  return (
    <div className="pomodoro-container">
      <Timer/>
    </div>
  );
}

export default Pomodoro;