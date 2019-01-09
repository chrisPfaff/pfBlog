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
          <h2 className="blogDate">Nov 14 2018</h2>
          <h2 className="blogPost">es6 classes</h2>
          <section className="codeSandBox">
            <iframe
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
              Even though es6 classes are just syntactic sugar on top of the old
              OOP practices in JS, I still find it to be easier to understand
              than older methods. In this example above instead of using a
              constructor function one can create a class with using the class
              keyword. Like a constructor function you still have to use the
              "this" keyword to assign properties to the whatever variable is
              passed in the constructor. Unlike in other OOP languages Js
              classes are not true classes. In other languages you can create a
              copy of classes but in Js when you instantiate a new Object off of
              a class it creates an object that is linked by the prototype.
            </p>
          </section>
          <h2 className="blogDate">Nov 10 2018</h2>
          <h2 className="blogPost">Async Await</h2>
          <section className="codeSandBox" />
        </div>
      </div>
    );
  }
}

export default Blog;
