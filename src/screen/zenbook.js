import React, { Component } from "react";
import Navbar from "../component/navbar";
import Navbarmac from "../component/navbar_mac";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import "../component/component_styles/mac.css";
class zenbook extends Component {
  render() {
    return (
      <div id="root">
        <div class="container-fluid">
          <Animate appear="fadeInDown" durationAppear={500} component="div">
            <Navbar />
          </Animate>
          <Animate appear="fadeInDown" durationAppear={500} component="div">
          <Navbarmac
              buy_id={5}
              product_name={"Asus ZenBook Pro DUO"}
              model={"The laptop of tomorrow"}
              text={'window 10'}
              link1 ={'https://www.microsoft.com/'}
              link2={'https://www.asus.com/th/Laptops/ZenBook-Pro-Duo-UX581GV/specifications/'}
            />
          </Animate>

          <div className="hero">
            <div className="hero-body">
            <Animate appear="fadeInDown" durationAppear={1500}>
                <h1 className="title" style={{ textAlign: "center", fontSize: "80px" ,color:'white'}}>Asus ZenBook Pro DUO</h1>
                <h1
                  className="subtitle"
                  style={{ textAlign: "center", fontSize: "45px" }}
                >
                The laptop of tomorrow
                </h1>
                <video
                  autoPlay="autoplay"
                  width="1920"
                  height="1080"
                  loop="loop"
                >
                  <source
                    src={
                      "https://res.cloudinary.com/dxih9tfqm/video/upload/v1585201504/video/ASUS_ZenBook_Pro_Duo_-_The_laptop_of_tomorrow_ASUS_fztjdr.mp4"
                    }
                  />
                </video>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={1800}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ textAlign: "center",fontSize: "35px" , color: 'white' }}>10th Generation Intel® Core™ i9</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{ textAlign: "center",fontSize: "35px" , color: 'white' }}>NVIDIA GeForce RTX2060</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="title"style={{textAlign: "center",  fontSize: "35px" , color: 'white' }}>OLED UHD</h1>
                  </div>
                </div>
              </Animate>
              <Animate appear="fadeInUp" durationAppear={2000}>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{textAlign: "center", fontSize: "25px" , color: 'white' }}>4.6 GHz</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle"style={{textAlign: "center",fontSize: "25px" , color: 'white' }}>GDDR6 6GB</h1>
                  </div>
                  <div className="level-item has-text-centered">
                    <h1 className="subtitle" style={{textAlign: "center", fontSize: "25px" , color: 'white' }}>15.6"</h1>
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
export default zenbook;
