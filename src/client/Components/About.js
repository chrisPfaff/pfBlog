import React, { Component } from "react";
import Header from "./Header";
import EmailModal from "./EmailModal";
import "../styles/about.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      skills: [
        ["src/client/img/html5.svg", "HTML5"],
        ["src/client/img/javascript.svg", "Javascript"],
        ["src/client/img/css.svg", "CSS3"],
        ["src/client/img/sass.svg", "SASS/SCSS"],
        ["src/client/img/react.svg", "React/ReactNative"],
        ["src/client/img/redux.svg", "Redux"],
        ["src/client/img/node.svg", "Node"],
        ["src/client/img/express.svg", "Express"],
        ["src/client/img/webpack.svg", "Webpack"],
        ["src/client/img/git.svg", "Git"],
        ["src/client/img/mongodb.svg", "MongoDB"],
        ["src/client/img/mongoose.png", "Mongoose"],
        ["src/client/img/aws.svg", "AWS"],
        ["src/client/img/ada.png", "Knowledge of ADA compliance"],
        ["src/client/img/api.png", "API design knowledge"]
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
            <img
              className="skillsImg"
              src={item[0]}
              height="200"
              width="250"
              alt="logo"
            />
            <li>{item[1]}</li>
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
