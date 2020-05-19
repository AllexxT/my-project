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
    "Производство бетонных изделий в Запорожье — ЧП Джас",
    description: "ЧП Джас - производство бетонных изделий в Запорожье и области. У нас вы найдёте тротуарную плитку, дорожный бордюр, еврозабор, облицовочный блок, гранитные и бетонные памятники а так же множество других качественных изделий из бетона."
});
const SettComponent = WithTitle({
  component: Sett,
  title: "Тротуарная плитка Бордюр и Отливы — ЧП Джас",
  description: "Производитель тротуарной плитки в Запорожье. Гарантия – 10 лет! Сертификаты! Розница, опт. Работаем с НДС. Низкие цены, Купить можно со склада или заказать доставку, укладку!  Большой ассортимент (обычная, элитная): Старый город; Кирпичик дорожный; Ромб; Эко; Песчаник; Паркет; Катушка; Квадрат 20х20/10х10; Венеция; Римский камень  Бордюр(1000х200х80); поребрик тротуарный, отлив\ливневка (малый и глубокий), полусфера (Антипарковочная). "
});
const FenceComponent = WithTitle({
  component: Fence,
  title:
    "Глянцевый и Бетонный Еврозабор Столбы купить в Запорожье — ЧП Джас",
  description: "ЧП Джас – Производитель еврозабора в Запорожье. Гарантия – 15 лет! Низкие цены! Сертификаты! Купить можно в розницу, Оптом, работаем с НДС. Купить можно со склада. Установка. Доставка. Покраска. Большой ассортимент бетонных плит, столбов наборых."
});
const BrickComponent = WithTitle({
  component: Brick,
  title:
    "Колотый Блок Фундаментный Блок Облицовочный Блок в Запорожье — ЧП Джас",
  description: "Производство бетонных изделий в Запорожье. Гарантия – 10 лет! Сертификаты! Розница, Опт. Работаем с НДС. Низкие цены, Купить можно со склада или заказать доставку. Большой ассортимент: Фундаментный блок, облицовочный блок (декоративный) и кирпич, шлакоблок(строительный), стобы для колон забора."
});
const MonumentsComponent = WithTitle({
  component: Monuments,
  title:
    "Гранитные Памятники Овалы Таблички для памятников купить в Запорожье — ЧП Джас",
  description: "ЧП Джас – Производитель бетонных изделий в Запорожье. Низкие цены. Гарантия – 15 лет!  Большой выбор. Благоустройство могил. Доставка. Установка гранитных памятников, цветных(крашеных) бетонных памятников, противоусадочных плит (отмосток), железные овалы таблички (металлокерамика), Балки под памятник."
});
const ParapetComponent = WithTitle({
  component: Parapet,
  title: "Крышки Парапеты для Забора купить в Запорожье — ЧП Джас",
  description: "ЧП Джас – Производитель бетонных изделий в Запорожье. Гарантия – 10 лет! Сертификаты! Розница, Опт. Работаем с НДС. Низкие цены, Крышки бетонные (на столб) и парапеты можно купить со склада или оформить доставку. Большой ассортимент: Шапки(навершники)  14х14 см гладкие; 39х39 см шагрень; 45х45 см медуза, черепица, чешуя;  49х49 см, 60х60 большие. Парапет:  50х18 см (кладка в пол 0,5 кирпич), 39х27см (кладка в один 1 кирпич), 39х35см (кладка в полтора 1,5 кирпича)."
});
const MdseComponent = WithTitle({
  component: Mdse,
  title: "купить Тротуарную Плитку Еврозабор Памятники Блок Кирпич в Запорожье — ЧП Джас",
});
const ExpositionContainerComponent = WithTitle({
  component: ExpositionContainer,
  title:
    "Работы по Укладке Тротуарной Плитки установа Еврозабора Памятника в Запорожье и области — ЧП Джас",
});
const SertificatesComponent = WithTitle({
  component: SertificatesContainer,
  title: "Государственные Сертификаты Качества — ЧП Джас",
});
const ServicesComponent = WithTitle({
  component: Services,
  title: "Комплекс услуг — ЧП Джас",
});

const DeliveryComponent = WithTitle({
  component: Delivery,
  title: "Доставка Памятников Тротуарной плитки Еврозабора Блока Кирпича по Запорожью и области — ЧП Джас",
});
const InstallSettComponent = WithTitle({
  component: InstallSett,
  title: "Укладка Тротуарной Плитки в Запорожье под ключ цена на 2020 год",
});
const InstallFenceComponent = WithTitle({
  component: InstallFence,
  title: "Установка Еврозабора цена услуг в Запорожье — ЧП Джас",
});
const InstallMonumentsComponent = WithTitle({
  component: InstallMonuments,
  title: "Установка Гранитный Бетонных Памятников в Запорожье и области Прайс лист на 2020г",
});
const CalculateComponent = WithTitle({
  component: Calculate,
  title:
    "Выезд замерщика по Тротуарной Плитке Еврозабору — ЧП Джас",
});
const ConsultationComponent = WithTitle({
  component: Consultation,
  title: "Консультация — ЧП Джас",
});
const ErrorComponent = WithTitle({
  component: Error,
  title: "Страница перенесена или не существует — ЧП Джас",
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

          <Redirect status={301} from="/trotuarnaya-plitka-zaporozhe" to="/products/sett"/>
          <Redirect status={301} from="/evrozabory-zaporozhe" to="/products/fence" />
          <Redirect status={301} from="/pamyatniki-zaporozhe" to="/products/monuments" />

          <Route path="/*" component={ErrorComponent} status={404} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default RoutedApp;
