import React, { Component } from "react";

class Device extends Component {
  render() {
    let title = this.props.Title_text;
    let subtitle = this.props.Sub_title;
    let img_link = this.props.Image_link;
    return (
      <div>
        <section class="box">
          <div className="hero">
            <div className="level">
              <div className="level-item has-text-centered">
                <h1
                  className="title"
                  style={{
                    position: "relative",
                    top: "10px",
                    fontSize: "50px",
                    color: "#333333",
                    font: "Medium 200px/99px Roboto",
                    "letter-spacing": 0
                  }}
                >
                  {title}
                </h1>
              </div>
            </div>
            <div className="level">
              <div className="level-item has-text-centered">
                <h5
                  className="subtitle"
                  style={{
                    position: "relative",
                    top: "10px",
                    fontSize: "20px",
                    color: "#757575",
                    font: "Medium 150px/99px Roboto",
                    "letter-spacing": 0,
                    marginBottom: "30px"
                  }}
                >
                  {subtitle}
                </h5>
              </div>
            </div>
            <div className="level">
              <div className="level-item has-text-centered">
                <img
                  src={img_link}
                  alt="logo"
                  style={{
                    width: "900px",
                    height: "700px",
                    backgroundColor: "#e6e6e6"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Device;
