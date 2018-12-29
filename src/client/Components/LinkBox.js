import React, { Component } from "react";
import AOS from "aos";

import "../styles/linkbox.scss";
import "../styles/aos.css";

class LinkBox extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    AOS.init();
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div
        className="linkBox"
        data-aos={"fade-" + this.props.data[4]}
        data-aos-duration="1000"
      >
        <ol>
          <li>
            <a href={this.props.data[1]}>
              <img
                className="linkImg"
                src={this.props.data[0]}
                alt="alt image"
              />
              <div>
                <span>{this.props.data[3]}</span>
              </div>
              <div>
                <span>{this.props.data[2]}</span>
              </div>
            </a>
          </li>
        </ol>
      </div>
    );
  }
}

export default LinkBox;
