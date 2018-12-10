import React, { Component } from "react";
import Header from "./Header";
import { FaGithub, FaNewspaper, FaCode, FaLink } from "react-icons/fa";
import "../styles/link.scss";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        ["https://nodeschool.io/#workshoppers", "NodeSchool"],
        ["https://eloquentjavascript.net/", "Eloquent JS"],
        [
          "http://www.pythontutor.com/javascript.html#mode=edit",
          "Python Tutor (great for visualizing code)"
        ],
        ["https://javascript.info/", "Javascript.info"],
        ["http://reactivex.io/learnrx/", "Functional Programming in JS"],
        [
          "http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/",
          "Pre-es6 OOP in JS"
        ],
        [
          "https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/",
          "es6 classes"
        ],
        [
          "https://medium.com/@learningdollars/15-tools-that-help-learners-make-sense-of-professional-source-code-71767ac8036e",
          "15 best dev tools"
        ],
        [
          "https://medium.com/@thejasonfile/basic-intro-to-react-router-v4-a08ae1ba5c42",
          "Intro to React Router v4"
        ],
        [
          "https://medium.mybridge.co/@Mybridge",
          "@myBridge on medium.com ( compiles best monthly articles of different technologies )"
        ],
        [
          "http://pauljadam.com/wcag20checklist.html",
          "Accesibility Check-list"
        ],
        ["https://babeljs.io/docs/en/", "Babel docs"],
        ["https://parceljs.org/", "Parcel (low stress bundler)"]
      ]
    };
  }

  render() {
    const devLinks = this.state.links.map(item => {
      return (
        <li>
          <FaLink />
          <a href={item[0]}>{item[1]}</a>
        </li>
      );
    });
    return (
      <div>
        <Header />
        <div className="linkContainer">
          <p className="linkSectionTitle">My Links</p>
          <ol className="linkList">
            <li>
              <FaGithub />
              <a href="https://github.com/chrisPfaff">GitHub</a>
            </li>
            <li>
              <FaNewspaper />
              <a href="https://resume10.herokuapp.com/">Resume</a>
            </li>
            <li>
              <FaCode />
              <a href="https://www.npmjs.com/package/coinpricecli">
                A Cli I Built
              </a>
            </li>
            <li>
              <FaCode />
              <a href="https://reactvideo-chahjo22n.now.sh/">
                React Video (A youtube clone built in react)
              </a>
            </li>
            <li>
              <FaCode />
              <a href="https://simple-crud-node.herokuapp.com/">
                A CRUD App built with node and ejs (no persistent memory)
              </a>
            </li>
            <li>
              <FaCode />
              <a href="https://baseball-landing.herokuapp.com/">
                LandingPage for fictional baseball team
              </a>
            </li>
            <li>
              <FaCode />
              <a href="https://claires-gallery.herokuapp.com/">
                Gallery landing page (built using vanillaJS)
              </a>
            </li>
            <li>
              <FaCode />
              <a href="https://dog-messenger.herokuapp.com/">
                Basic App that sends you a picture of a dog
              </a>
            </li>
          </ol>
          <p className="linkSectionTitle">Favorite Dev Links</p>
          <ol className="linkList">{devLinks}</ol>
        </div>
      </div>
    );
  }
}

export default Links;
