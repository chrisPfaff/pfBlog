import React, { Component } from "react";
import Header from "./Header";
import "../styles/blog.scss";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="blogContainer">
          <h2 className="date">Nov 13 2018</h2>
          <h2>es6 classes</h2>
          <section className="codeSandBox">
            <iframe
              height="400px"
              width="70%"
              src="https://repl.it/@chrispfaff/OvalFuchsiaHack?lite=true"
              scrolling="no"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
            />
          </section>
          <h2 className="date">Nov 10 2018</h2>
          <section className="codeSandBox">
            <iframe
              height="400px"
              width="70%"
              src="https://repl.it/@chrispfaff/OvalFuchsiaHack?lite=true"
              scrolling="no"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Blog;
