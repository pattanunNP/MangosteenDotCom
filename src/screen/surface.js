import React, { Component } from "react";
import Navbar from "../component/navbar";
import Navbarmac from "../component/navbar_mac";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import "../component/component_styles/mac.css";
import "../component/component_styles/surface.css";
class SurfaceProX extends Component {
  render() {
    return (
      <div id="root">
        <div class="container-fluid">
          <Animate appear="fadeInDown" durationAppear={500} component="div">
            <Navbar />
          </Animate>
          <Animate appear="fadeInDown" durationAppear={500} component="div">
            <Navbarmac
              buy_id={2}
              product_name={"Surface Pro X"}
              model={"A new generation of Surface."}
            />
          </Animate>

          <div className="hero">
            <div className="hero-body">
              <Animate appear="fadeInDown" durationAppear={1500}>
                <h1 id="glow"> Surface Pro X</h1>
                <h1
                  className="subtitle"
                  style={{ textAlign: "center", fontSize: "45px" }}
                >
                  Ultra-thin and always connected
                </h1>
                <video
                  autoPlay="autoplay"
                  width="1920"
                  height="1080"
                  loop="loop"
                >
                  <source
                    src={
                      "https://res.cloudinary.com/dxih9tfqm/video/upload/v1585195613/video/Introducing_Microsoft_Surface_Pro_X_e5p2jg.mp4"
                    }
                  />
                </video>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={1800}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ fontSize: "45px" , color: 'white' }}>3GHz</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ fontSize: "45px" , color: 'white' }}>13”</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{  fontSize: "45px" , color: 'white' }}>LTE</h1>
                  </div>
                </div>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={2000}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{ fontSize: "25px" , color: 'white' }}>ARM processor</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{fontSize: "25px" , color: 'white' }}>Virtually edge-to-edge touchscreen</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle" style={{ fontSize: "25px" , color: 'white' }}>Advanced Pro connectivity</h1>
                  </div>
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SurfaceProX;
