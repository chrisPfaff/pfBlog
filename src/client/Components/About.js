import React, { Component } from "react";
import Header from "./Header";
import EmailModal from "./EmailModal";
import "../styles/about.scss";

//import "../styles/line.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.showModal = () => {
      this.setState({ open: true });
    };
    this.closeModal = () => {
      this.setState({ open: false });
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="aboutContainer">
          <img
            className="aboutImage"
            height="350px"
            width="300px"
            src="src/client/img/chris.jpg"
            alt="picture of myself"
          />
          <br />
          <p className="aboutParagraph">
            My name is Christoper Pfaff and I am an aspiring developer living in
            Austin, TX. After years of working in an industry that I felt wasn't
            full-filling I decided to teach myself how to code, after a couple
            of years and many failures later I took a chance and quit my job to
            move to Austin to pursue a dream. Some of my skills include
          </p>
          <ul className="skillsList">
            <li>HTML5</li>
            <br />
            <li>Modern Javascript</li>
            <br />
            <li>CSS3/SCSS/SASS</li>
            <br />
            <li>React/ReactNative</li>
            <br />
            <li>Node</li>
            <br />
            <li>Webpack</li>
            <br />
            <li>Git</li>
            <br />
            <li>AWS</li>
            <br />
            <li>MongoDB/Mongoose</li>
            <br />
          </ul>
          <EmailModal show={this.state.open} handleClose={this.closeModal} />
          <button
            className="contactButton"
            type="button"
            onClick={this.showModal}
          >
            Contact Me
          </button>
        </div>
      </div>
    );
  }
}

export default About;
