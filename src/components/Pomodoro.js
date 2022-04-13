import React,{useState,useEffect} from 'react';
import Timer from './Timer'
function Pomodoro({showModal,setShowModal,isReset,setIsReset}) {
  return (
    <div className="pomodoro-container">
      <Timer showModal={showModal} setShowModal={setShowModal} setIsReset={setIsReset} isReset={isReset}/>
    </div>
  );
}

export default Pomodoro;