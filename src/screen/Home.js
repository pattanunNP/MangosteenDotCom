import React, { Component } from "react";
import Navbar from "../component/navbar";
import Devicemac from "../component/device_mac";
import Device from "../component/device";
import Animate from "animate.css-react";
import "animate.css/animate.css";
class Home extends Component{
  render(){
  return (
    <div>
      <Animate appear="fadeInDown" durationAppear={500} component="div">
        <Navbar />
      </Animate>

      <Animate appear="fadeInDown" ddurationEnter={800} component="div">
        <Devicemac />
      </Animate>

      <div className="columns is-5">
        <Animate appear="fadeInLeft" durationAppear={900} component="div">
          <div className="column" style={{ top: "10px" }}>
            <a href="/product/surface-pro-x">
              <Device
                Title_text={"Surface Pro X"}
                Sub_title={"A new generation of Surface."}
                Image_link={'https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076880/images/SurfaceX_rtt0uc.png'}
              />
            </a>
          </div>
        </Animate>

        <Animate appear="fadeInRight" durationAppear={1100} component="div">
          <div className="column" style={{ top: "10px" }}>
            <a href="/product/swift-7">
              <Device
                Title_text={"Swift 7"}
                Sub_title={"Light and Powerful."}
                Image_link={'https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076881/images/Swift1_zief0n.png'}
              />
            </a>
          </div>
        </Animate>
      </div>

      <div className="columns is-5">
        <Animate appear="fadeInLeft" durationAppear={900} component="div">
          <div className="column" style={{ top: "10px" }}>
            <a href="/product/dell-xps">
              <Device
                Title_text={"Dell XPS 13inch"}
                Sub_title={"World of Edge to Edge Display."}
                Image_link={"https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076882/images/XPS_gnnwyh.png"}
              />
            </a>
          </div>
        </Animate>
        <Animate appear="fadeInRight" durationAppear={1100} component="div">
          <div className="column" style={{ top: "10px" }}>
            <a href="/product/zenbook">
              <Device
                Title_text={"ZenBook Pro DUO"}
                Sub_title={"Extend the imagition."}
                Image_link={'https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076882/images/Zenbook2_yzs8xi.png'}
              />
            </a>
          </div>
        </Animate>
      </div>
    </div>
  );
}
}
export default Home;
