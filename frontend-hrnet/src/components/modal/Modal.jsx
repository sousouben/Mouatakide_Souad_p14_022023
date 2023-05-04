import React from "react";
import "./modal.css";

function Modal({ closeModal, message }) {
  return (
    <>
      <div className="bcgModal">
        <div className="modal-wrapper">
          <div className="modal">
            <button
              type="button"
              className="modal-close-button"
              onClick={() => closeModal(false)}
            >
              {" "}
              X{" "}
            </button>

            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
