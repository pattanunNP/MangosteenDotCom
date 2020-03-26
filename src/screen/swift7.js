import React, { Component } from "react";
import Navbar from "../component/navbar";
import Navbarmac from "../component/navbar_mac";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import "../component/component_styles/mac.css";

class swift7 extends Component {
  render() {
    return (
      <div id="root">
        <div class="container-fluid">
          <Animate appear="fadeInDown" durationAppear={500} component="div">
            <Navbar />
          </Animate>
          <Animate appear="fadeInDown" durationAppear={500} component="div">
            <Navbarmac buy_id={3}/>
          </Animate>

          <div className="hero">
            <div className="hero-body">
              <Animate appear="fadeInUp" durationAppear={1000} component="div">
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{
                        marginTop: "20px",
                        position: "relative",
                        font: "Bold"
                      }}
                    >
                      Acer swift7
                    </h1>
                  </div>
                </div>
              </Animate>
              {/* <Animate appear="fadeInUp" durationAppear={1000} component="div">
              <div className="level">
                <div className="level-item has-text-centered">
                  <h1
                    className="title"
                    style={{
                      marginTop: "20px",
                      color: "white",
                      position: "relative"
                    }}
                  >
                    With great power
                  </h1>
                </div>
              </div>
            </Animate>
            <Animate appear="fadeInUp" durationAppear={1000} component="div">
              <div className="level">
                <div className="level-item has-text-centered">
                  <h1
                    className="title"
                    style={{
                      marginTop: "20px",
                      color: "white",
                      position: "relative"
                    }}
                  >
                    comes great capability.
                  </h1>
                </div>
              </div>
            </Animate>
            <Animate appear="fadeInUp" durationAppear={1000} component="div">
              <div className="level">
                <div className="level-item has-text-centered">
                  <h1
                    className="subtitle"
                    style={{
                      marginTop: "20px",
                      color: "grey",
                      position: "relative"
                    }}
                  >
                    Starting at $1299
                  </h1>
                </div>
              </div>
            </Animate>
            <Animate appear="fadeIn" durationAppear={500} component="div">
              <div className="level">
                <div className="level-item has-text-centered">
                  <video
                    autoPlay="autoplay"
                    muted
                    width="1018"
                    height="362"
                    style={{
                      marginTop: "20px",
                      color: "grey",
                      position: "absaluto"
                    }}
                  >
                    <source
                      src={require("../component/video/large.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </Animate>
            <Animate appear="fadeIn" durationAppear={1500}>
              <div className="fallback-image">
                <img src={require("../component/images/mask-shadow.png")} />
              </div>
            </Animate>
            <Animate appear="fadeIn" durationAppear={1500}>
              <div className="text_mac">
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1>
                      _____________________________________________________________
                    </h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1>
                      _____________________________________________________________
                    </h1>
                  </div>
                </div>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="title" style={{ color: "white" }}>
                      Quad-core Intel processors
                    </h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{ color: "white", fontSize: "28px" }}
                    >
                      Up to 16GB of memory for
                    </h1>
                  </div>
                </div>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{ color: "white", fontSize: "28px" }}
                    >
                      with Turbo Boost up to 4.7GHz.
                    </h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{ color: "white", fontSize: "28px" }}
                    >
                      running multiple pro apps.
                    </h1>
                  </div>
                </div>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1>
                      _____________________________________________________________
                    </h1>
                  </div>

                  <div className="level-item has-text-centered">
                    <h1>
                      _____________________________________________________________
                    </h1>
                  </div>
                </div>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{ color: "white", fontSize: "28px" }}
                    >
                      Stunning Retina display with
                    </h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{ color: "white", fontSize: "28px" }}
                    >
                      Touch Bar and Touch ID for
                    </h1>
                  </div>
                </div>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{ color: "white", fontSize: "28px" }}
                    >
                      True Tone technology.
                    </h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1
                      className="title"
                      style={{ color: "white", fontSize: "28px" }}
                    >
                      increased productivity.
                    </h1>
                  </div>
                </div>
              </div>
            </Animate> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default swift7;
