import React, { Component } from "react";
import "../styles/emailmodal.scss";
const emailjs = require("emailjs-com");

//"gmail.com"
//template_xnRFI8hB
//user id // user_IphnBP661H4pspiSgLyAf

//emailjs.sendForm(serviceID, templateID, form, userID);

//emailjs.send("gmail", "template_xnRFI8hB", {"name":"greg@gmail.com","message":"call //me asap"})

const EmailModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const sendEmail = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let text = e.target.message.value;

    emailjs
      .send(
        "gmail",
        "template_xnRFI8hB",
        { name: name, message: text },
        "user_IphnBP661H4pspiSgLyAf"
      )
      .then(
        function(response) {
          alert("Message Sent");
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form onSubmit={sendEmail} className="emailForm">
          <label htmlFor="email">Contact Email: </label>
          <input type="email" name="name" size="14" required />

          <label htmlFor="text">Message: </label>
          <input
            type="text"
            name="message"
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
