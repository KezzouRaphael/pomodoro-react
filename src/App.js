import React,{useState,useEffect} from 'react';
import Pomodoro from './components/Pomodoro';
import Modal from './components/Modal';
import './App.scss';
//IMPORT COMPONENTS
function App() {
  const [showModal,setShowModal] = useState(false); 
  return (
    <>
      <header>
          <h1 className="title">Pomodoro</h1>
      </header>
      <Pomodoro showModal = {showModal} setShowModal={setShowModal}/>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default App;
