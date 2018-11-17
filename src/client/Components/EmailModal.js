import React, { Component } from "react";
import "../styles/emailmodal.scss";
const emailjs = require("emailjs-com");

//emailjs.sendForm(serviceID, templateID, form, userID);

const EmailModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const sendEmail = query => {
    query.preventDefault();
    console.log(query.target.email.value);
    console.log(query.target.text.value);
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form onSubmit={sendEmail} className="emailForm">
          <label htmlFor="email">Contact Email: </label>
          <input type="email" name="email" size="14" required />

          <label htmlFor="text">Message: </label>
          <input
            type="text"
            name="text"
            minLength="0"
            maxLength="30"
            size="40"
            required
          />
          <input className="contactButton" type="submit" value="Submit" />
          <button className="contactButton" onClick={handleClose}>
            Close
          </button>
        </form>
      </section>
    </div>
  );
};

export default EmailModal;
