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
          <h1 className="blogDate">Nov 13 2018</h1>
          <h2 className="blogPost">es6 classes</h2>
          <section className="blogText">
            <p>
              A class is just an object in JS. You can describe what values they
              will have those will be called instance properties. An instance
              method will be what the class does and typically the method will
              use the instance properties to achieve their results. By
              convention you want to use a capital letter when creating a class.
              Every class has whats called a constructor method and it is only
              run once during the creation of the object. If I were to create a
              new Object using the new keyword.This would log hello to the
              terminal/console but only when using the new keyword to
              instantiate the object.
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="NeLjWJ"
              src="//codepen.io/ChrisPfaff10/embed/NeLjWJ/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
          <h2 className="blogPost">Instance Properties</h2>
          <section className="blogText">
            <p>
              You can create instance properties in two ways in JS. One is when
              they are defined directly in the constructor. The "This" keyword
              refers to the current object. When typing this it refers to the
              object being created by that class. The this keyword can be
              confusing at first but there are certain rules to follow to make
              it less confusing about which object this is referring to.
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 2"
              src="//codepen.io/ChrisPfaff10/embed/oJPWWp/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
          <section className="blogText">
            <p>
              * If the new keyword is used when calling the function, this
              inside the function is a brand new object.
            </p>
            <p>
              * If apply, call, or bind are used to call a function, this inside
              the function is the object that is passed in as the argument.
            </p>
            <p>
              * If a function is called as a method -- that is, if dot notation
              is used to invoke the function -- this is the object that the
              function is a property of. In other words, when a dot is to the
              left of a function invocation, this is the object to the left of
              the dot. ƒ symbolizes function in the code blocks
            </p>
            <p>
              * If multiple of the above rules apply, the rule that is higher
              wins and will set the this value.
            </p>
            <p>
              * If the function is an ES2015 arrow function, it ignores all the
              rules above and receives the this value of its surrounding scope
              at the time it’s created. To determine this, go one line above the
              arrow function’s creation and see what the value of this is there.
              It will be the same in the arrow function.
            </p>
            <p>
              The more conventional way to create class instance properties is
              to pass in a value when instantiating the new object. This allows
              you to make custom classes for whatever values you put in, like
              making multiple people from one class Person. This is done by
              putting the the parameters in the constructor function.
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 3"
              src="//codepen.io/ChrisPfaff10/embed/maGmwz/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
          <section className="blogText">
            <p>
              This would create the same object as if you were instantiating the
              object with the values hard-coded into the constructor. This
              allows for multiple objects using the same class. If i were to
              make a new Person like{" "}
            </p>
            <p>
              These two objects would have different this values considering
              when you use the new keyword it creates a whole new object with a
              this value attached to it.
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 4"
              src="//codepen.io/ChrisPfaff10/embed/vvzmpz/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
          <h2 className="blogPost">Instance Methods</h2>
          <section className="blogText">
            <p>
              Like a constructor a instance method is just a function that on
              inside the class object. They operate just like functions and can
              be used like function invocations on the class object. In this
              example{" "}
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 5"
              src="//codepen.io/ChrisPfaff10/embed/ebLWKg/?height=265&theme-id=0&default-tab=js"
              frameborder="no"
              allowtransparency="true"
            />
          </section>
          <section className="blogText">
            <p>
              If you were to call Joe.sayName() it would produce a log of "Hello
              my name is Joe", which would be completely different depending
              upon when the Class is first instantiated. If you were to do
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 6"
              src="//codepen.io/ChrisPfaff10/embed/EGemew/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
          <section className="blogText">
            <p>The same method would log "Hello my name is Chris".</p>
          </section>
          <h2 className="blogPost">Getters and Setters</h2>
          <section className="blogText">
            <p>
              Getters and setters can be used to define methods on the class
              which then are used as if they are properties. To define a getter
              you use the get then the method name just like how you would with
              a regular method inside a class.
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 7"
              src="//codepen.io/ChrisPfaff10/embed/REYVYE/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
          <section className="blogText">
            <p>
              Since the getter acts like a property there is no need to invoke
              the ageOfPerson method when using it. Joe.ageOfPerson would return
              30. Setters work pretty much the same way you can assign new
              values to your instance properties with a property like syntax.{" "}
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 8"
              src="//codepen.io/ChrisPfaff10/embed/NeLjoq/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
          <section className="blogText">
            <p>
              The Joe.newAge setter can be used just like how object property
              reassignment syntax works with dot notation.{" "}
            </p>
          </section>
          <h2 className="blogPost">Static Methods</h2>
          <section className="blogText">
            <p>
              A static method is a method defined on a class but it is not part
              of the instantiated object once its been created. It does not
              require an instance of an object to be used. Most static methods
              are helper methods or utilities that are relevant to the class but
              dont have an object bound to them. Like with getters and setters
              you need to use a keyword before defining the method. In this case
              that keyword would be static like below. Keep in mind when calling
              a static method you do not need to instantiate the object before
              invoking the method also you can call the static method directly
              from the class.
            </p>
          </section>
          <section className="codeSandBox">
            <iframe
              height="265"
              scrolling="no"
              title="class 9"
              src="//codepen.io/ChrisPfaff10/embed/vvzmPb/?height=265&theme-id=0&default-tab=js"
              frameBorder="no"
              allowtransparency="true"
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Blog;
