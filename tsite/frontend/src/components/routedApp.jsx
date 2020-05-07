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
import Calculate from "./layouts/services/calculate/calculate";
import Consultation from "./layouts/services/consultation/consultation";
// import InstallationSett from "./layouts/services/installationSett/installationSett";
// import installationFence from "./layouts/services/installationFence/installationFence";
// import installationMonuments from "./layouts/services/installationMonuments/installationMonuments";
import InstallSett from "./containers/services/installSett";
import InstallMonuments from "./containers/services/installMonuments";
import InstallFence from "./containers/services/installFence";
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
          {/* <Route exact path="/services/sett" component={InstallationSett} /> */}
          <Route exact path="/services/sett" component={InstallSett} />
          {/* <Route exact path="/services/fence" component={installationFence} /> */}
          <Route exact path="/services/fence" component={InstallFence} />
          {/* <Route exact path="/services/monuments" component={installationMonuments} /> */}
          <Route exact path="/services/monuments" component={InstallMonuments} />
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
