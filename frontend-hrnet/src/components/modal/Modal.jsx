import React from "react";
import "./modal.css";

function Modal({ closeModal, message }) {
  return (
    <>
      <div className="bcgModal">
        <button className="close" onClick={() => closeModal(false)}>
          {" "}
          X{" "}
        </button>

        <p>{message}</p>
      </div>
    </>
  );
}

export default Modal;
