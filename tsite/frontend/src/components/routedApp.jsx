import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NewsContainer from "./containers/news/newsContainer";
import ProductsContainer from "./containers/products/productsContainer";

const Exposition = () => {
  return <h1>Our works</h1>;
};

const Services = () => {
  return <h1>Hello Services content page</h1>;
};
const ProductsBoard = () => {
  return <h1>Products Board page</h1>;
};
const InTest = () => {
  return <h1>TEST PAGE</h1>;
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
        <Route exact path="/products/sett" component={ProductsContainer} />
        <Route exact path="/products/fence" component={InTest} />
        <Route exact path="/products/brick" component={InTest} />
        <Route exact path="/products/monuments" component={InTest} />
        <Route path="/products" component={ProductsBoard} />
        <Route exact path="/services" component={Services} />
        <Route path="/*" component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default RoutedApp;
