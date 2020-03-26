import React from "react";
import Home from "./screen/Home";
import Mac from "./screen/Mac";
import Buy from "./screen/Buy";
import support from "./screen/support";
import swift7 from "./screen/swift7";
import surface from "./screen/surface";
import XPS from "./screen/xps";
import Bag from "./screen/bag";
import Zenbook from "./screen/zenbook";
import Notfound from "./screen/notfound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/support" component={support} />
        <Route exact path="/product/macbook-pro-13" component={Mac} />
        <Route exact path="/product/swift-7" component={swift7} />
        <Route exact path="/product/surface-pro-x" component={surface} />
        <Route exact path="/product/dell-xps" component={XPS} />
        <Route exact path="/product/zenbook" component={Zenbook} />
        <Route exact path="/shop/bag" component={Bag} />
        <Route exact path="/buy/id=:id" component={Buy} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
