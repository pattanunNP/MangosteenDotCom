import React from "react";
import Navbar from "../component/navbar";

import Animate from "animate.css-react";

import "animate.css/animate.css";
function Home(props) {
  return (
    <div>
    <Animate appear="fadeInDown" durationAppear={500} component="div">
    <Navbar />
  </Animate>
    <div className="hero">
        <div className="hero-body"></div>
        <div className="level">
          <div className="level-item has-text-centered">
            <h2 className="title" style={{ marginBottom: 0, fontSize: 100 }}>
          Bag
            </h2>
          </div>
        </div>
        <div className="level">
          <div className="level-item has-text-centered">
            <h4 className="title" style={{ marginTop: 0 }}>
              Review for Bag.
            </h4>
          </div>
        </div>
        <div className="level">
          <div className="level-item has-text-centered">
            <a
              href="/"
              className="subtitle"
              style={{
                marginTop: 0,
                font: "Bold24px/28px Roboto",
                color: "#007AFF"
              }}
            >
              &#60;Back to home
            </a>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Home;
