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
          <Navbarmac
              buy_id={3}
              product_name={"Acer Swift 7"}
              model={"Miraculously Compact"}
              text={'window 10'}
              link1 ={'https://www.microsoft.com/'}
              link2={'https://www.acer.com/ac/en/US/content/series/swift7'}
            />
          </Animate>

          <div className="hero">
            <div className="hero-body">
          
              <Animate appear="fadeInDown" durationAppear={1500}>
                <h1 className="title" style={{ textAlign: "center", fontSize: "80px" ,color:'white'}}>Acer Swift 7</h1>
                <h1
                  className="subtitle"
                  style={{ textAlign: "center", fontSize: "45px" }}
                >
                 Miraculously Compact
                </h1>
                <video
                  autoPlay="autoplay"
                  width="1920"
                  height="1080"
                  loop="loop"
                >
                  <source
                    src={
                      "https://res.cloudinary.com/dxih9tfqm/video/upload/v1585199736/video/Acer_Swift_7_Laptop_jgaj0q.mp4"
                    }
                  />
                </video>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={1800}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ fontSize: "45px" , color: 'white' }}>9.95 mm</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ fontSize: "45px" , color: 'white' }}>890 g</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{  fontSize: "45px" , color: 'white' }}>92%</h1>
                  </div>
                </div>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={2000}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{ fontSize: "25px" , color: 'white' }}>Incredibly Thin</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{fontSize: "25px" , color: 'white' }}>Weight</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle" style={{ fontSize: "25px" , color: 'white' }}>Screen-to-Body</h1>
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
export default swift7;
