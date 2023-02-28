import React, { useState, useEffect } from "react";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {
  function handleClick(event) {
    event.stopPropagation();
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
