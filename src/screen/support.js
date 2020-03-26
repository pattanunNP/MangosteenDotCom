import React, { Component } from "react";

class support extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-body"></div>
        <div className="level">
          <div className="level-item has-text-centered">
            <h2 className="title" style={{ marginBottom: 0, fontSize: 100 }}>
            Need Help?
            </h2>
          </div>
        </div>
        <div className="level">
          <div className="level-item has-text-centered">
            <h4 className="title" style={{ marginTop: 0 }}>
              Mangosteen Support Center Tel +6628040606
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
    );
  }
}

export default support;
