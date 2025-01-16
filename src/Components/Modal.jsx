// Modal.js
import React from "react";
import "../Css/Modal.css";

const Modal = ({ message, isLoading, isConfirmation, onConfirm, onClose }) => {
  const className = message.title
    ? message.title.toLowerCase() + "-message"
    : "default";

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {isLoading ? (
          <h3>Sending...</h3>
        ) : isConfirmation ? (
          <div className="confirm">
            <h3>Confirmation</h3>
            <p>{message}</p>
            <div className="option-btn">
              <button onClick={onConfirm}>Yes</button>
              <button onClick={onClose}>No</button>
            </div>
          </div>
        ) : (
          <>
            <h3 className={className}>{message.title}</h3>
            <p className={className}>{message.body}</p>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
