import React,{Component} from "react";

class Device_mac extends Component{
  render (){
  return (
    <div>
      <section class="hero is-medium ">
        <div className="hero-body">
          <div className="level">
            <div class="level-item has-text-centered">
              <h6 className="subtitle" style={{ color: "#FF9500" }}>
                New
              </h6>
            </div>
          </div>
          <div className="level">
            <div className="level-item has-text-centered">
              <h1 className="title">MacBookPro</h1>
            </div>
          </div>
          <div className="level">
            <div className="level-item has-text-centered">
              <h5 className="subtitle">Prolong in the dark</h5>
            </div>
          </div>
          <div className="level">
            <div className="level-item has-text-centered">
              <a href="product/macbook-pro-13"className="subtitle" style={{ color: "#007AFF" }}>
                Learn more
              </a>
            </div>
          </div>
          <div className="level">
            <div className="level-item has-text-centered">
              <img
                src={"https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076879/images/macbook-clipart-png-macbook-pro-png-transparent-free-download-for-macbook-pro-png-1440_695_oqmpga.png"}
                alt="logo"
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
}
export default Device_mac;
