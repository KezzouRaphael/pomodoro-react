import React,{useState,useEffect} from 'react';
import Pomodoro from './components/Pomodoro'
import './App.scss';
//IMPORT COMPONENTS
function App() {
  return (
    <>
      <header>
          <h1 className="title">Pomodoro</h1>
      </header>
      <Pomodoro/>
    </>
  );
}

export default App;
