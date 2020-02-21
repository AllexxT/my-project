import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./layouts/App";
import NewsContainer from "./containers/news/newsContainer";
import Sett from "./containers/products/sett";
import Fence from "./containers/products/fence";
import Brick from "./containers/products/brick";
import Monuments from "./containers/products/monuments";
import Parapet from "./containers/products/parapet";
import Cat from "./cat.jpg";

const Services = () => {
  const [switcher, setSwitcher] = useState(false);
  const image = switcher ? (
    <>
      <img
        onClick={() => setSwitcher(false)}
        src={Cat}
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          maxWidth: "90%",
          textAlign: "center",
          cursor: "pointer"
        }}
        alt="cat"
      />
      <div style={{ display: "flex", height: "500px" }} />
    </>
  ) : (
    <img
      onClick={() => setSwitcher(true)}
      style={{ cursor: "pointer" }}
      src={Cat}
      width="250"
      alt="cat"
    />
  );
  return (
    <div>
      <h1>Страница в разработке</h1>
      <br />
      {image}
    </div>
  );
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
        <Route path="/products/sett" component={Sett} />
        <Route path="/products/fence" component={Fence} />
        <Route path="/products/brick" component={Brick} />
        <Route path="/products/monuments" component={Monuments} />
        <Route path="/products/parapet" component={Parapet} />
        <Route exact path="/products">
          <Redirect to="/products/sett" />
        </Route>
        <Route exact path="/exposition" component={Services} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/sertificates" component={Services} />
        <Route exact path="/" component={NewsContainer} />
        <Route path="/*" component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default RoutedApp;
