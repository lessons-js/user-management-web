import React, { useState, useEffect } from "react";
import "./modal.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__background" onClick={() => setActive(false)} />
      <div className="modal__content">{children}</div>
    </div>
  );
};
export default Modal;
