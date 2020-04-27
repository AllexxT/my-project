import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./layouts/App";
import NewsContainer from "./containers/news/newsContainer";
import Sett from "./containers/products/sett";
import Fence from "./containers/products/fence";
import Brick from "./containers/products/brick";
import Monuments from "./containers/products/monuments";
import Parapet from "./containers/products/parapet";
import Mdse from "./layouts/mdse/mdse";
import ExpositionContainer from "./containers/exposition/expositionContainer";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Services from "./layouts/services/services";
import Sertificates from "./layouts/sertificates/sertificates";
import Delivery from "./layouts/services/delivery/delivery";
import Installation from "./layouts/services/installation/installation";
import Calculate from "./layouts/services/calculate/calculate";
import Consultation from "./layouts/services/consultation/consultation";
//  // CHECKING IS USER LOGGED IN
// import { useEffect } from "react";
// import { loadUser } from "../actions/auth";
// import { useDispatch } from "react-redux";

const Error = () => {
  return (
    <h1>
      Error: 404
      <br /> Page Not Found
    </h1>
  );
};

const RoutedApp = () => {
  //  // CHECKING IS USER LOGGED IN
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadUser());
  // }, []);
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/products/sett" component={Sett} />
          <Route path="/products/fence" component={Fence} />
          <Route path="/products/brick" component={Brick} />
          <Route path="/products/monuments" component={Monuments} />
          <Route path="/products/parapet" component={Parapet} />
          <Route path="/products" component={Mdse} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/exposition" component={ExpositionContainer} />
          <Route exact path="/services/delivery" component={Delivery} />
          <Route exact path="/services/installation" component={Installation} />
          <Route exact path="/services/calculate" component={Calculate} />
          <Route exact path="/services/consultation" component={Consultation} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/sertificates" component={Sertificates} />
          <Route exact path="/" component={NewsContainer} />
          <Route path="/*" component={Error} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default RoutedApp;
