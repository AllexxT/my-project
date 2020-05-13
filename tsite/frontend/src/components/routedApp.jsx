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
import TitleComponent from "./titleComponent";

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

const WithTitle = ({ component: Component, title, description }) => {
  return class Title extends React.Component {
    render() {
      return (
        <>
          <TitleComponent {...{ title, description }} />
          <Component />
        </>
      );
    }
  };
};
const NewsComponent = WithTitle({
  component: NewsContainer,
  title:
    "ЧП Джас - Производство бетонных изделий в Запорожье | НОВОСТИ И НОВИНКИ",
});
const SettComponent = WithTitle({
  component: Sett,
  title: "Тротуарная плитка, водосток и бордюр купить в Запорожье | ЧП Джас",
});
const FenceComponent = WithTitle({
  component: Fence,
  title:
    "Еврозабор в Запорожье, Глянцевый еврозабор и Бетонные столбы купить | ЧП Джас",
});
const BrickComponent = WithTitle({
  component: Brick,
  title:
    "Колотый блок, фундаментный блок, облицовочный блок, кирпич купить в Запорожье | ЧП Джас",
});
const MonumentsComponent = WithTitle({
  component: Monuments,
  title:
    "Гранитные памятники, бетонные памятники, овалы и таблички купить в Запорожье | ЧП Джас",
});
const ParapetComponent = WithTitle({
  component: Parapet,
  title: "Крышки на забор, парапеты для забора купить в Запорожье | ЧП Джас",
});
const MdseComponent = WithTitle({
  component: Mdse,
  title: "Производство качественных бетонных изделий в Запорожье | ЧП Джас",
});
const ExpositionContainerComponent = WithTitle({
  component: ExpositionContainer,
  title:
    "Наши работы по установке еврозаборов, памятников и укладке тротуарной плитки | ЧП Джас",
});
const SertificatesComponent = WithTitle({
  component: SertificatesContainer,
  title: "Государственные сертификаты качества | ЧП Джас",
});
const ServicesComponent = WithTitle({
  component: Services,
  title: "Наши услуги | ЧП Джас",
});

const DeliveryComponent = WithTitle({
  component: Delivery,
  title: "Доставка тротуарной плитки, еврозабора, памятников и пр. | ЧП Джас",
});
const InstallSettComponent = WithTitle({
  component: InstallSett,
  title: "Укладка тротуарной плитки, прайс, цена | ЧП Джас",
});
const InstallFenceComponent = WithTitle({
  component: InstallFence,
  title: "Установка еврозабора, прайс, цена | ЧП Джас",
});
const InstallMonumentsComponent = WithTitle({
  component: InstallMonuments,
  title: "Установка гранитных и бетонных памятников, цена | ЧП Джас",
});
const CalculateComponent = WithTitle({
  component: Calculate,
  title:
    "Замеры для работ по укладке тротуарной плитки и установки Еврозаборов | ЧП Джас",
});
const ConsultationComponent = WithTitle({
  component: Consultation,
  title: "Консультация | ЧП Джас",
});
const ErrorComponent = WithTitle({
  component: Error,
  title: "Страница перенесена или не существует | ЧП Джас",
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

          <Redirect from="/trotuarnaya-plitka-zaporozhe" to="/products/sett" />

          <Route path="/*" component={ErrorComponent} status={404} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default RoutedApp;
