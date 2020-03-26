import React, { Component } from "react";
import Navbar from "../component/navbar";
import "animate.css/animate.css";
import Animate from "animate.css-react";
import NumberFormat from "react-number-format";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static_price: 42900,

      add: 0,
      add2: 0,
      add3: 0,
      avalible1: true,
      avalible2: false,
      avalible3: true,
      avalible4: false,
      avalible5: false,
      avalible6: false,
      avalible7: false,
      avalible8: false,
      avalible9: false,
      avalible10: false
    };
  }

  render() {
    const { static_price, add, add2, add3 } = this.state;
    const sum = static_price + add + add2 + add3;

    return (
      <div>
        <Animate appear="fadeInDown" durationAppear={500} component="div">
          <Navbar />
        </Animate>
        <div className="hero">
          <div className="hero-body">
            <button
              className="button is-link is-rounded"
              onClick={() => this.props.history.goBack()}
              style={{
                marginLeft: "50px",
                font: "Bold24px/28px Roboto",
                color: "white"
              }}
            >
              <img src={'https://res.cloudinary.com/dxih9tfqm/image/upload/v1585208672/images/back_x694f9.png'}/>  Back
            </button>
            <div className="columns">
              <div>
                <div
                  className="box"
                  style={{
                    marginLeft: "50px",
                    marginTop: "50px",
                    width: "650px"
                  }}
                >
                  <img
                    src={require("../component/images/macbook-clipart-png-macbook-pro-png-transparent-free-download-for-macbook-pro-png-1440_695.png")}
                    alt="product"
                  />
                  <div className="media">
                    <h1 className="title">What's in the Box</h1>
                  </div>
                  <img
                    src={
                      "https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076879/images/mac_seib4o.png"
                    }
                    alt="product"
                  />
                </div>
                <div
                  className="box"
                  style={{
                    marginLeft: "50px",
                    marginTop: "50px",
                    width: "650px",
                    textAlign: "center"
                  }}
                >
                  <h1 className="title">Pricing</h1>
                  <h1 className="title" style={{ color: "#007AFF" }}>
                    <NumberFormat
                      value={sum}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"฿"}
                      renderText={value => <div>{value}</div>}
                    />
                  </h1>
                  <button
                    className="button is-danger"
                    style={{
                      marginTop: "50px",
                      width: "550px"
                    }}
                    onClick={() =>
                      this.setState({
                        add: 0,
                        add2: 0,
                        add3: 0,
                        avalible1: true,
                        avalible2: false,
                        avalible3: true,
                        avalible4: false,
                        avalible5: true,
                        avalible6: false,
                        avalible7: false,
                        avalible8: false,
                        avalible9: false,
                        avalible10: false
                      })
                    }
                  >
                    <div className="level-item has-text-centered">
                      <img
                        src={
                          "https://res.cloudinary.com/dxih9tfqm/image/upload/v1585203449/images/undo_yy6woq.png"
                        }
                        alt="search_btn"
                        style={{ color: "white", marginRight: "30px" }}
                      />
                    </div>
                    Clear selected
                  </button>
                  <a
                    className="button is-info"
                    style={{
                      marginTop: "50px",
                      width: "550px"
                    }}
                    href={`/buy/id=${this.props.match.params.id}/thank`}
                  >
                    <div className="level-item has-text-centered">
                      <img
                        src={
                          "https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076878/images/bag_hkylh7.png"
                        }
                        alt="search_btn"
                        style={{ color: "white", marginRight: "30px" }}
                      />
                    </div>
                    Add to Bag
                  </a>
                </div>
                <div
                  className="box"
                  style={{
                    marginLeft: "50px",
                    marginTop: "50px",
                    width: "650px"
                  }}
                >
                  <div className="level">
                    <div className="level-item has-text-centered">
                      <img
                        src={
                          "https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076878/images/bag_hkylh7.png"
                        }
                        alt="search_btn"
                        style={{ color: "white" }}
                      />
                      <h1 style={{ "white-space": "pre-wrap" }}>
                        <span> Pickup:</span>
                      </h1>
                    </div>
                    <div className="level-item has-text-centered">
                      <img
                        src={
                          "https://res.cloudinary.com/dxih9tfqm/image/upload/v1585076879/images/box_1_vxzf6x.png"
                        }
                        alt="search_btn"
                        style={{ color: "white" }}
                      />
                      <h1
                        className="level-item has-text-centered"
                        style={{ "white-space": "pre-wrap" }}
                      >
                        <span>Ships:</span>
                      </h1>
                    </div>
                  </div>
                  <div className="level">
                    <h1
                      className="level-item has-text-centered"
                      style={{ "white-space": "pre-wrap" }}
                    >
                      Apple Store Pickup is currently unavailable
                    </h1>

                    <h1
                      className="level-item has-text-centered"
                      style={{ "white-space": "pre-wrap" }}
                    >
                      3-5 business days Free Shipping
                    </h1>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="media">
                  <h1 className="title">Customize your MacBook Pro</h1>
                </div>
                <div className="media">
                  <li className="subtitle" style={{ width: "350px" }}>
                    1.4GHz quad‑core 8th‑generation Intel Core i5 processor,
                    Turbo Boost up to 3.9GHz
                  </li>
                </div>
                <div className="media">
                  <li className="subtitle" style={{ width: "350px" }}>
                    8GB 2133MHz LPDDR3 memory
                  </li>
                </div>
                <div className="media">
                  <li className="subtitle" style={{ width: "350px" }}>
                    Retina display with True Tone
                  </li>
                </div>
                <div className="media">
                  <li className="subtitle" style={{ width: "350px" }}>
                    Intel Iris Plus Graphics 645
                  </li>
                </div>
                <div className="media">
                  <li className="subtitle" style={{ width: "350px" }}>
                    Two Thunderbolt 3 ports
                  </li>
                </div>

                <div className="media">
                  <li className="subtitle" style={{ width: "350px" }}>
                    Touch Bar and Touch ID
                  </li>
                </div>
                <div className="media">
                  <li className="subtitle" style={{ width: "350px" }}>
                    Backlit Keyboard - US English
                  </li>
                </div>

                <div
                  className="box"
                  style={{ marginTop: "50px", width: "550px" }}
                >
                  <h1 className="title"> Processor</h1>
                  <p className="subtitle" style={{ color: "#007AFF" }}>
                    Click to select and DoubleClick to deselected
                  </p>
                  <button
                    disabled={this.state.avalible1}
                    onClick={() =>
                      this.setState({
                        add2: 0,
                        avalible1: true,
                        avalible2: false
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{
                      marginTop: "10px",
                      width: "500px",
                      height: "150px",
                      "white-space": "pre-wrap"
                    }}
                  >
                    <p>
                      1.4GHz quad‑core 8th‑generation Intel Core i5 processor,
                      Turbo Boost up to 3.9GHz
                    </p>
                  </button>
                  <button
                    disabled={this.state.avalible2}
                    onClick={() =>
                      this.setState({
                        add2: 11500,
                        avalible2: true,
                        avalible1: false
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{
                      marginTop: "10px",
                      width: "500px",
                      height: "170px",
                      "white-space": "pre-wrap"
                    }}
                  >
                    <p>
                      1.7GHz quad‑core 8th‑generation Intel Core i7 processor,
                      Turbo Boost up to 4.5GHz
                    </p>
                    +
                    <NumberFormat
                      value={11500}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"฿"}
                      renderText={value => <div>{value}</div>}
                    />
                  </button>
                </div>
                <div
                  className="box"
                  style={{ marginTop: "50px", width: "550px" }}
                >
                  <h1 className="title"> Memory</h1>
                  <p className="subtitle" style={{ color: "#007AFF" }}>
                    Click to select and DoubleClick to deselected
                  </p>
                  <button
                    disabled={this.state.avalible3}
                    onClick={() =>
                      this.setState({
                        add3: 0,
                        avalible3: true,
                        avalible4: false
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{ marginTop: "10px", width: "500px" }}
                  >
                    8GB 2133MHz LPDDR3 memory
                  </button>
                  <button
                    disabled={this.state.avalible4}
                    onClick={() =>
                      this.setState({
                        add3: 7000,
                        avalible3: false,
                        avalible4: true
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{ marginTop: "10px", width: "500px" }}
                  >
                    16GB 2133MHz LPDDR3 memory +
                    <NumberFormat
                      value={7000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"฿"}
                      renderText={value => <div>{value}</div>}
                    />
                  </button>
                </div>
              </div>
              <div className="column" style={{ marginRight: "150px" }}>
                <div
                  className="box"
                  style={{
                    marginTop: "550px",
                    width: "550px",
                    height: "780px"
                  }}
                >
                  <h1 className="title"> Storage</h1>
                  <p className="subtitle" style={{ color: "#007AFF" }}>
                    Click to select and DoubleClick to deselected
                  </p>
                  <button
                    disabled={this.state.avalible5}
                    onClick={() =>
                      this.setState({
                        add: 0,
                        avalible5: true,
                        avalible6: false,
                        avalible7: false,
                        avalible8: false,
                        avalible9: false
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{
                      marginTop: "20px",
                      width: "500px",
                      height: "100px"
                    }}
                  >
                    128GB SSD Storage
                  </button>
                  <button
                    disabled={this.state.avalible6}
                    onClick={() =>
                      this.setState({
                        add: 7000,
                        avalible5: false,
                        avalible6: true,
                        avalible7: false,
                        avalible8: false,
                        avalible9: false
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{
                      marginTop: "20px",
                      width: "500px",
                      height: "100px"
                    }}
                  >
                    256GB SSD Storage +
                    <NumberFormat
                      value={7000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"฿"}
                      renderText={value => <div>{value}</div>}
                    />
                  </button>
                  <button
                    disabled={this.state.avalible7}
                    onClick={() =>
                      this.setState({
                        add: 14000,
                        avalible5: false,
                        avalible6: false,
                        avalible7: true,
                        avalible8: false,
                        avalible9: false
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{
                      marginTop: "20px",
                      width: "500px",
                      height: "100px"
                    }}
                  >
                    512GB SSD Storage +
                    <NumberFormat
                      value={14000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"฿"}
                      renderText={value => <div>{value}</div>}
                    />
                  </button>
                  <button
                    disabled={this.state.avalible8}
                    onClick={() =>
                      this.setState({
                        add: 21000,
                        avalible5: false,
                        avalible6: false,
                        avalible7: false,
                        avalible8: true,
                        avalible9: false
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{
                      marginTop: "20px",
                      width: "500px",
                      height: "100px"
                    }}
                  >
                    1TB SSD Storage +
                    <NumberFormat
                      value={21000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"฿"}
                      renderText={value => <div>{value}</div>}
                    />
                  </button>
                  <button
                    disabled={this.state.avalible9}
                    onClick={() =>
                      this.setState({
                        add: 35000,
                        avalible5: false,
                        avalible6: false,
                        avalible7: false,
                        avalible8: false,
                        avalible9: true
                      })
                    }
                    className="button is-info is-outlined is-large"
                    style={{
                      marginTop: "20px",
                      width: "500px",
                      height: "100px"
                    }}
                  >
                    2TB SSD Storage +
                    <NumberFormat
                      value={35000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"฿"}
                      renderText={value => <div>{value}</div>}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
