import React, { Component } from "react";
import Header from "./Header";
import "../styles/link.scss";

class Links extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="linkContainer">
          <p className="linkSectionTitle">My Links</p>
          <ol className="linkList">
            <li>
              <a href="https://github.com/chrisPfaff">GitHub</a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Links;
