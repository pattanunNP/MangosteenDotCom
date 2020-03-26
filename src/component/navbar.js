import React, { Component } from "react";
import "./component_styles/navbas.css";
class Navbar extends Component{
  render() {
  return (
    <div className="navbar_styles">
      <nav className="level">
        <div className="level-item has-text-centered">
          <a href="/">
            <img
              src={'https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076879/images/mangosteen24_eedgcq.png'}
              alt="logo"
              style={{ color: "white" }}
            />
          </a>
        </div>

        <h4 className="level-item has-text-centered">
          <a
            href="/product/macbook-pro-13"
            className="link is-info"
            style={{ color: "white", marginRight: "2px" }}
          >
            MacBook Pro
          </a>
        </h4>
        <h4 className="level-item has-text-centered">
          <a
            href="/product/surface-pro-x"
            className="link is-info"
            style={{ color: "white", marginRight: "2px" }}
          >
            Surface Pro X
          </a>
        </h4>
        <h4 className="level-item has-text-centered">
          <a
            href="/product/swift-7"
            class="link is-info"
            style={{ color: "white", marginRight: "2px" }}
          >
            Swift 7
          </a>
        </h4>
        <h4 className="level-item has-text-centered">
          <a
            href="/product/dell-xps"
            className="link is-info"
            style={{ color: "white", marginRight: "2px" }}
          >
            XPS
          </a>
        </h4>
        <h4 className="level-item has-text-centered">
          <a
            href="/product/zenbook"
            className="link is-info"
            style={{ color: "white", marginRight: "2px" }}
          >
            ZenBook
          </a>
        </h4>
        <h4 className="level-item has-text-centered">
          <a
            href="/support"
            className="link is-info"
            style={{ color: "white", marginRight: "2px" }}
          >
            Support
          </a>
        </h4>

        <div className="level-item has-text-centered">
          <a href="/shop/bag">
            <img
              src={'https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076878/images/bag_hkylh7.png'}
              alt="search_btn"
              style={{ color: "white", marginRight: "30px" }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
}
export default Navbar;
