import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Timer from './Timer';
const Modal = ({showModal,setShowModal}) => {
  //functions
  function Close() {
    setShowModal(false);
  }
  function CloseAndPlay(){
    console.log('hello');
  }
  if(!showModal)
  {
    return null;
  }
  return (
    <div className="modal">
      <h2 className='modal-title'>Enjoy your breaktime!</h2>
      <Timer showModal={showModal} setShowModal={setShowModal}/>
      <div className="row-container">
        <div className="row">
          <button className="close" onClick={Close}><FontAwesomeIcon icon={faXmark}/></button>
          <button className="close-and-play" onClick={CloseAndPlay}><FontAwesomeIcon icon={faArrowsRotate}/></button>
        </div>
      </div>
    </div>
  );
};

export default Modal;