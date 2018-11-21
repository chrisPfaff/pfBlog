import React, { Component } from "react";
import Header from "./Header";
import EmailModal from "./EmailModal";
import "../styles/about.scss";

//import "../styles/line.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      skills: [
        "HTML5",
        "Javascript",
        "CSS3/SCSS/SASS",
        "React/ReactNative",
        "Redux",
        "Node",
        "Webpack",
        "Git",
        "MongoDB/Mongoose",
        "AWS"
      ]
    };
    this.showModal = () => {
      this.setState({ open: true });
    };
    this.closeModal = () => {
      this.setState({ open: false });
    };
  }

  render() {
    const skillsList = this.state.skills.map(item => {
      return (
        <div className="skillsList">
          <ol>
            <li>{item}</li>
          </ol>
        </div>
      );
    });

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
          {skillsList}
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
