import React, { Component } from "react";
import Header from "./Header";
import "../styles/about.scss";

//import "../styles/line.scss";

class About extends Component {
  constructor(props) {
    super(props);
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
            Austin, TX.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
