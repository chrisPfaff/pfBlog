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
          <h2 className="blogDate">Nov 13 2018</h2>
          <h2 className="blogPost">es6 classes</h2>
          <section className="codeSandBox">
            <iframe
              height="400"
              width="600"
              scrolling="no"
              title="XyEpax"
              src="//codepen.io/ChrisPfaff10/embed/XyEpax/?height=265&theme-id=dark&default-tab=js"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
            />
          </section>
          <section className="blogText">
            <p>
              Even though es6 classes are just syntatic sugar on top of the old
              OOP practices in JS, I still find it to be easier to understand
              than older methods.
            </p>
          </section>
          <h2 className="blogDate">Nov 10 2018</h2>
          <section className="codeSandBox" />
        </div>
      </div>
    );
  }
}

export default Blog;
