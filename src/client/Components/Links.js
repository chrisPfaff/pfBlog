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
            <li>
              <a href="https://github.com/chrisPfaff/resume/blob/master/Christopher%20Pfaff%20resume%20TX.PDF">
                Resume
              </a>
            </li>
          </ol>
          <p className="linkSectionTitle">Favorite Dev Links</p>
          <ol className="linkList">
            <li>
              <a href="https://nodeschool.io/#workshoppers">NodeSchool</a>
            </li>
            <li>
              <a href="https://eloquentjavascript.net/">Eloquent JS</a>
            </li>
            <li>
              <a href="http://www.pythontutor.com/javascript.html#mode=edit">
                Python Tutor (great for visualizing code)
              </a>
            </li>
            <li>
              <a href="https://javascript.info/">Javascript.info</a>
            </li>
            <li>
              <a href="http://reactivex.io/learnrx/">
                Functional Programming in JS
              </a>
            </li>
            <li>
              <a href="http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/">
                Pre-es6 OOP in JS
              </a>
            </li>
            <li>
              <a href="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/">
                es6 classes
              </a>
            </li>
            <li>
              <a href="https://medium.com/@learningdollars/15-tools-that-help-learners-make-sense-of-professional-source-code-71767ac8036e">
                15 best dev tools
              </a>
            </li>
            <li>
              <a href="https://medium.com/@thejasonfile/basic-intro-to-react-router-v4-a08ae1ba5c42">
                Intro to React Router v4
              </a>
            </li>
            <li>
              <a href="https://medium.mybridge.co/@Mybridge">
                @myBridge on medium.com ( compiles best monthly articles of
                different technologies )
              </a>
            </li>
            <li>
              <a href="http://pauljadam.com/wcag20checklist.html">
                Accesibility Check-list
              </a>
            </li>
            <li>
              <a href="https://babeljs.io/docs/en/">Babel docs</a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Links;
