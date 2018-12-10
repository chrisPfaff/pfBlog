import React, { Component } from "react";
import "../styles/emailmodal.scss";
const emailjs = require("emailjs-com");

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
      <section className="modalMain">
        <form onSubmit={sendEmail} className="emailForm">
          <div>
            <label className="labels" htmlFor="email">
              Contact Email:{" "}
            </label>
            <input type="email" name="name" size="15" required />
          </div>
          <div>
            <label className="labels" htmlFor="text">
              Message:{" "}
            </label>
            <input
              type="text-area"
              name="message"
              minLength="0"
              maxLength="1000"
              size="40"
              required
            />
          </div>
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
