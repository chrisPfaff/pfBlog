import React, { Component } from "react";
import Header from "./Header";
import EmailModal from "./EmailModal";
import AOS from "aos";

import "../styles/about.scss";
import "../styles/aos.css";

class About extends Component {
  constructor(props) {
    super(props);

    AOS.init();

    this.state = {
      open: false,
      skills: [
        ["src/client/img/html5.svg", "HTML5", "left"],
        ["src/client/img/javascript.svg", "Javascript", "right"],
        ["src/client/img/css.svg", "CSS3", "left"],
        ["src/client/img/sass.svg", "SASS/SCSS", "right"],
        ["src/client/img/react.svg", "React/ReactNative", "left"],
        ["src/client/img/redux.svg", "Redux", "right"],
        ["src/client/img/node.svg", "Node", "left"],
        ["src/client/img/express.svg", "Express", "left"],
        ["src/client/img/webpack.svg", "Webpack", "right"],
        ["src/client/img/git.svg", "Git", "left"],
        ["src/client/img/mongodb.svg", "MongoDB", "right"],
        ["src/client/img/mongoose.png", "Mongoose", "left"],
        ["src/client/img/aws.svg", "AWS", "right"],
        ["src/client/img/ada.png", "Knowledge of ADA compliance", "left"],
        ["src/client/img/api.png", "API design knowledge", "right"]
      ]
    };
    this.showModal = () => {
      this.setState({ open: true });
    };
    this.closeModal = () => {
      this.setState({ open: false });
    };
  }

  componentDidMount() {
    AOS.init();
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    const skillsList = this.state.skills.map(item => {
      return (
        <div className="skillsList">
          <ol>
            <img
              data-aos={"fade-" + item[2]}
              data-aos-duration="1000"
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
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="aboutImage"
            height="450px"
            width="350px"
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
