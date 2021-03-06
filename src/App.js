import React,{useState,useEffect} from 'react';
import Pomodoro from './components/Pomodoro';
import Modal from './components/Modal';
import ToggleSwitch from './components/ToggleSwitch';
import './App.scss';
//IMPORT COMPONENTS
function App() {
  const [showModal,setShowModal] = useState(false);
  const [isReset,setIsReset] = useState(false);
  return (
    <>
      <ToggleSwitch showModal={showModal} setShowModal={setShowModal}/>
      <header>
          <h1 className="title">Pomodoro</h1>
          <h2 className="title">Work Time</h2>
      </header>
      
      <Pomodoro showModal = {showModal} setShowModal={setShowModal} setIsReset={setIsReset} isReset={isReset}/>
      <Modal showModal={showModal} setShowModal={setShowModal} setIsReset={setIsReset} isReset={isReset}/>
    </>
  );
}

export default App;
