import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
import Delivery from "./layouts/services/delivery/delivery";
import Calculate from "./layouts/services/calculate/calculate";
import Consultation from "./layouts/services/consultation/consultation";
import InstallSett from "./containers/services/installSett";
import InstallMonuments from "./containers/services/installMonuments";
import InstallFence from "./containers/services/installFence";
import SertificatesContainer from "./containers/sertificates/sertificatesContainer";
import TitleComponent from "./containers/titleComponent";

//  // CHECKING IS USER LOGGED IN
// import { useEffect } from "react";
// import { loadUser } from "../actions/auth";
// import { useDispatch } from "react-redux";

const Error = () => {
  return (
    <h1>
      Ошибка: 404
      <br /> Страница не найдена
    </h1>
  );
};

const WithTitle = ({ component: Component, page }) => {
  console.log(page)
  return class Title extends React.Component {
    render() {
      return (
        <>
          <TitleComponent {...{ page }} />
          <Component />
        </>
      );
    }
  };
};
const NewsComponent = WithTitle({
  component: NewsContainer,
  page: "home",
});
const SettComponent = WithTitle({
  component: Sett,
  page: "sett",
});
const FenceComponent = WithTitle({
  component: Fence,
  page: "fence",
});
const BrickComponent = WithTitle({
  component: Brick,
  page: "brick",
});
const MonumentsComponent = WithTitle({
  component: Monuments,
  page: "monuments",
});
const ParapetComponent = WithTitle({
  component: Parapet,
  page: "parapet",
});
const MdseComponent = WithTitle({
  component: Mdse,
  page: "products",
});
const ExpositionContainerComponent = WithTitle({
  component: ExpositionContainer,
  page: "our_works",
});
const SertificatesComponent = WithTitle({
  component: SertificatesContainer,
  page: "sertificates",
});
const ServicesComponent = WithTitle({
  component: Services,
  page: "services",
});
const DeliveryComponent = WithTitle({
  component: Delivery,
  page: "dostavka",
});
const InstallSettComponent = WithTitle({
  component: InstallSett,
  page: "ukladka_plitki",
});
const InstallFenceComponent = WithTitle({
  component: InstallFence,
  page: "ustanovka_zabora",
});
const InstallMonumentsComponent = WithTitle({
  component: InstallMonuments,
  page: "ustanovka_pamyatnikov",
});
const CalculateComponent = WithTitle({
  component: Calculate,
  page: "zamer",
});
const ConsultationComponent = WithTitle({
  component: Consultation,
  page: "",
});
const ErrorComponent = WithTitle({
  component: Error,
  page: "error",
});
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
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Route path="/products/sett" component={SettComponent} />
          <Route path="/products/fence" component={FenceComponent} />
          <Route path="/products/brick" component={BrickComponent} />
          <Route path="/products/monuments" component={MonumentsComponent} />
          <Route path="/products/parapet" component={ParapetComponent} />

          <Route path="/products" component={MdseComponent} />

          <Route
            exact
            path="/exposition"
            component={ExpositionContainerComponent}
          />

          <Route exact path="/sertificates" component={SertificatesComponent} />

          <Route
            exact
            path="/services/delivery"
            component={DeliveryComponent}
          />
          <Route exact path="/services/sett" component={InstallSettComponent} />
          <Route
            exact
            path="/services/fence"
            component={InstallFenceComponent}
          />
          <Route
            exact
            path="/services/monuments"
            component={InstallMonumentsComponent}
          />
          <Route
            exact
            path="/services/calculate"
            component={CalculateComponent}
          />
          <Route
            exact
            path="/services/consultation"
            component={ConsultationComponent}
          />
          <Route exact path="/services" component={ServicesComponent} />

          <Route exact path="/" component={NewsComponent} />

          <Redirect
            status={301}
            from="/trotuarnaya-plitka-zaporozhe"
            to="/products/sett"
          />
          <Redirect
            status={301}
            from="/evrozabory-zaporozhe"
            to="/products/fence"
          />
          <Redirect
            status={301}
            from="/pamyatniki-zaporozhe"
            to="/products/monuments"
          />

          <Route path="/*" component={ErrorComponent} status={404} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default RoutedApp;
