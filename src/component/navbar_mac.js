import React, { Component } from "react";
import "./component_styles/navbas.css";

class Navbarmac extends Component {
  render() {
    const buyId = this.props.buy_id;
    return (
      <div>
        <div className="navbar_styles_mac"></div>
        <div className="navbar_styles_text">
          <div className="level-left">
            <div className="level-item">
              <h1
                className="subtitle"
                style={{
                  fontSize: "15px",
                  paddingLeft: "30px",
                  marginTop: "10px"
                }}
              >
               {this.props.model}
              </h1>
            </div>
          </div>
        </div>
        <div className="level">
          <div className="navbar_styles_text">
            <div className="level">
              <div className="level-item">
                <h1
                  className="title"
                  style={{
                    fontSize: "20px",
                    color: "white",
                    paddingLeft: "30px"
                  }}
                >
                  {this.props.product_name}
                </h1>
              </div>
              <div className="level-item">
                <p
                  className="subtitle"
                  style={{
                    fontSize: "15px",
                    color: "grey",
                    marginLeft: "1200px"
                  }}
                >
                  Overview
                </p>
              </div>
              <div className="level-item">
                <a
                  href={this.props.link1}
                  className="subtitle"
                  style={{
                    fontSize: "15px",
                    color: "grey",
                    marginLeft: "50px"
                  }}
                >
                 {this.props.text}
                </a>
              </div>
              <div className="level-item">
                <a
                  href={this.props.link2}
                  className="subtitle"
                  style={{
                    fontSize: "15px",
                    color: "grey",
                    marginLeft: "50px"
                  }}
                >
                  Tech Specs
                </a>
              </div>
              <div className="level-item">
                <button
                  class="button is-info is-rounded is-small"
                  style={{
                    fontSize: "15px",
                    backgroundColor: "#007AFF",
                    color: "white",
                    marginLeft: "50px"
                  }}
                >
                  <a
                    href={`/buy/id=${buyId}`}
                    style={{
                      fontSize: "15px",

                      color: "white"
                    }}
                  >
                    Buy
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbarmac;
