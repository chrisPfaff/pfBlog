import React, { Component } from "react";
import "../styles/linkbox.scss";

class LinkBox extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="linkBox">
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
