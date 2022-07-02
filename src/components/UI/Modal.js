import React from "react";
import './Modal.css'
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className="backdrop"/>;
};

const rootElements=document.getElementById('overlay')
const Modal = (props) => {
  return <div>
    {ReactDOM.createPortal(<BackDrop/>, rootElements)}
   
  </div>;
};

export default Modal;
