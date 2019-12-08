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
        ["src/client/img/html5.svg", "HTML5", "left", "#E34D25"],
        ["src/client/img/javascript.svg", "Javascript", "right", "#F7DF1D"],
        ["src/client/img/css.svg", "CSS3", "left", "#254DE4"],
        ["src/client/img/sass.svg", "SASS/SCSS", "right", "#CD6799"],
        ["src/client/img/react.svg", "React/ReactNative", "left", "#61DAFB"],
        ["src/client/img/redux.svg", "Redux", "right", "#764ABC"],
        ["src/client/img/node.svg", "Node", "left", "#89BC73"],
        ["src/client/img/express.svg", "Express", "left", "#212121"],
        ["src/client/img/webpack.svg", "Webpack", "right", "#7DA0DE"],
        ["src/client/img/git.svg", "Git", "left", "#EF5133"],
        ["src/client/img/mongodb.svg", "MongoDB", "right", "#499D4A"],
        ["src/client/img/mongoose.png", "Mongoose", "left", "#880100"],
        ["src/client/img/aws.svg", "AWS", "right", "#FF9802"],
        [
          "src/client/img/ada.png",
          "Knowledge of ADA compliance",
          "left",
          "#003984"
        ],
        ["src/client/img/api.png", "API design knowledge", "right", "#121C24"]
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
          {/* <div
            style={{
              position: "absolute",
              width: "95%",
              height: "100%",
              top: "5%",
              left: "calc(5% / 2)",
              zIndex: "-1",
              borderRadius: "50px",
              backgroundColor: item[3],
              filter: "blur(10px)"
            }}
          /> */}
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
