import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Timer from './Timer';
const Modal = ({showModal,setShowModal,isReset,setIsReset}) => {
  //functions
  function Close() {
    setShowModal(false);
  }
  function CloseAndPlay(){
    setShowModal(false);
    setIsReset(true);
  }
  if(!showModal)
  {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-container">
        <h2 className='modal-title'>Enjoy your breaktime!</h2>
        <Timer showModal={showModal} setShowModal={setShowModal} setIsReset={setIsReset} isReset={isReset}/>
        <div className="row-container">
          <div className="row">
            <button className="close" onClick={Close}><FontAwesomeIcon icon={faXmark}/></button>
            <button className="close-and-play" onClick={CloseAndPlay}><FontAwesomeIcon icon={faArrowsRotate}/></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal;