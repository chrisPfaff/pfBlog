import React, { Component } from "react";
import Header from "./Header";
import { FaGithub, FaNewspaper, FaCode, FaLink } from "react-icons/fa";
import LinkBox from "./LinkBox";
import "../styles/link.scss";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Devlinks: [
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
      ],
      myLinks: [
        [
          "src/client/img/github.png",
          "https://github.com/chrisPfaff",
          "GitHub",
          <FaGithub />
        ],
        [
          "src/client/img/resume.png",
          "https://resume10.herokuapp.com/",
          "Resume",
          <FaNewspaper />
        ],
        [
          "src/client/img/cli.png",
          "https://www.npmjs.com/package/coinpricecli",
          `A command line interface that I built that fetch's current
          crypto currency data`,
          <FaCode />
        ],
        [
          "src/client/img/reactvideo.png",
          "https://reactvideo-chahjo22n.now.sh/",
          "React Video (A youtube clone built in react)",
          <FaCode />
        ],
        [
          "src/client/img/nodecrud.png",
          "https://simple-crud-node.herokuapp.com//",
          "A CRUD App built with node and ejs (no persistent memory)",
          <FaCode />
        ],
        [
          "src/client/img/baseball.png",
          "https://baseball-landing.herokuapp.com/",
          "LandingPage for fictional baseball team",
          <FaCode />
        ],
        [
          "src/client/img/art.png",
          "https://claires-gallery.herokuapp.com/",
          "Gallery landing page (built using vanillaJS)",
          <FaCode />
        ],
        [
          "src/client/img/dogmessanger.png",
          "https://dog-messenger.herokuapp.com/",
          "Basic App that sends you a picture of a dog",
          <FaCode />
        ]
      ]
    };
  }

  render() {
    const devLinks = this.state.Devlinks.map(item => {
      return (
        <li className="devLinks">
          <FaLink />
          <a className="devLinks" href={item[0]}>
            {item[1]}
          </a>
        </li>
      );
    });
    const myLinks = this.state.myLinks.map(item => {
      return <LinkBox data={item} />;
    });
    return (
      <div>
        <Header />
        <div className="linkContainer">
          <p className="linkSectionTitle">My Links</p>
          <ol className="linkList">{myLinks}</ol>
          <p className="linkSectionTitle">Favorite Dev Links</p>
          <ol className="linkList">{devLinks}</ol>
        </div>
      </div>
    );
  }
}

export default Links;
