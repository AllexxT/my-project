import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NewsContainer from "./containers/news/newsContainer";
import Sett from "./containers/products/sett";
import Fence from "./containers/products/fence";
import Brick from "./containers/products/brick";
import Monuments from "./containers/products/monuments";

const Exposition = () => {
  return <h1>Our works</h1>;
};

const Services = () => {
  return <h1>Hello Services content page</h1>;
};
const ProductsBoard = () => {
  return <h1>Products Board page</h1>;
};

const Error = () => {
  return (
    <h1>
      Error: 404
      <br /> Page Not Found
    </h1>
  );
};

const RoutedApp = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={NewsContainer} />
        <Route path="/exposition" component={Exposition} />
        <Route exact path="/products/sett" component={Sett} />
        <Route exact path="/products/fence" component={Fence} />
        <Route exact path="/products/brick" component={Brick} />
        <Route exact path="/products/monuments" component={Monuments} />
        <Route path="/products" component={ProductsBoard} />
        <Route exact path="/services" component={Services} />
        <Route path="/*" component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default RoutedApp;
