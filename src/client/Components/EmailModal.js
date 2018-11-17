import React, { Component } from "react";
import "../styles/emailmodal.scss";

const EmailModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>hello modal</p>
        <button className="contactButton" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default EmailModal;
