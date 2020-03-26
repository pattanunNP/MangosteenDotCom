import React, { Component } from "react";
import Navbar from "../component/navbar";
import Navbarmac from "../component/navbar_mac";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import "../component/component_styles/mac.css";

class DellXPS extends Component {
  render() {
    return (
      <div id="root">
        <div class="container-fluid">
          <Animate appear="fadeInDown" durationAppear={500} component="div">
            <Navbar />
          </Animate>
          <Animate appear="fadeInDown" durationAppear={500} component="div">
          <Navbarmac
              buy_id={4}
              product_name={"Dell XPS 13"}
              model={"Stunning inside and out"}
              text={'window 10'}
              link1 ={'https://www.microsoft.com/'}
              link2={'https://www.dell.com/th/p/xps-13-7390-laptop/pd'}
            />
          </Animate>

          <div className="hero">
            <div className="hero-body">
            <Animate appear="fadeInDown" durationAppear={1500}>
                <h1 className="title" style={{ textAlign: "center", fontSize: "80px" ,color:'white'}}>XPS 13 Laptop</h1>
                <h1
                  className="subtitle"
                  style={{ textAlign: "center", fontSize: "45px" }}
                >
                 Stunning inside and out
                </h1>
                <video
                  autoPlay="autoplay"
                  width="1920"
                  height="1080"
                  loop="loop"
                >
                  <source
                    src={
                      "https://res.cloudinary.com/dxih9tfqm/video/upload/v1585200775/video/Dell_XPS_13_Product_Overview_2019_t3xbb4.mp4"
                    }
                  />
                </video>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={1800}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ textAlign: "center",fontSize: "35px" , color: 'white' }}>10th Generation Intel® Core™ i7</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ textAlign: "center",fontSize: "35px" , color: 'white' }}>4K UHD</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{textAlign: "center",  fontSize: "35px" , color: 'white' }}>Dell Cinema</h1>
                  </div>
                </div>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={2000}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{textAlign: "center", fontSize: "25px" , color: 'white' }}>4.6 GHz</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{textAlign: "center",fontSize: "25px" , color: 'white' }}>13.3"</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle" style={{textAlign: "center", fontSize: "25px" , color: 'white' }}>Cinematic experience</h1>
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
export default DellXPS;
