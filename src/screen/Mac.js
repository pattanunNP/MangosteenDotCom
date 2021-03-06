import React from "react";
import Navbar from "../component/navbar";
import Navbarmac from "../component/navbar_mac";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import "../component/component_styles/mac.css";

function Mac(props) {
  return (
    <div id="root">
      <div class="container-fluid">
        <Animate appear="fadeInDown" durationAppear={500} component="div">
          <Navbar />
        </Animate>
        <Animate appear="fadeInDown" durationAppear={500} component="div">
          <Navbarmac    buy_id={1}
              product_name={"Macbook Pro"}
              model={"13 inch model"}
              text={'Mac Os'}
              link1 ={'https://www.apple.com/macbook-pro-13/macos/'}
              link2={'https://www.apple.com/macbook-pro-13/specs/b'} />
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
                    MacBook Pro
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
                      src={"https://res.cloudinary.com/dxih9tfqm/video/upload/v1585076885/video/large_cylf3d.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </Animate>
            <Animate appear="fadeIn" durationAppear={1500}>
              <div className="fallback-image">
                <img
                  src={"https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076881/images/mask-shadow_sdcwel.png"}
                  alt="mask"
                />
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
            </Animate>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mac;
