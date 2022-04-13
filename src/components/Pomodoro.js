import React,{useState,useEffect} from 'react';
import Timer from './Timer'
function Pomodoro({showModal,setShowModal}) {
  return (
    <div className="pomodoro-container">
      <Timer showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Pomodoro;