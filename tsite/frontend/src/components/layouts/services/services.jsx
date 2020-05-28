import React from "react";
import { default as S } from "./servicesStyle";
import { Link } from "react-router-dom";
import placeholder from "../products/placeholder.jpeg";
import manipulator from "./manipul.jpg";
import instSett from "./укладка тротуарной плитки в запорожье цена чп джас фэм ритм элитбрук брук хаус.jpg";
import ProductsDescrCont from "../../containers/products/productsDescriptCont";

const Services = () => {
  return (
    <>
      <S.PageWrapper>
        <S.PageTitle>
          <h1>Наши услуги</h1>
        </S.PageTitle>
        <S.Content>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/delivery">
                <img src={manipulator} alt="Доставка" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/delivery">
                <span>ДОСТАВКА</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/sett">
                <img src={instSett} alt="Укладка тротуарной плитки" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/sett">
                <span>УКЛАДКА ТРОТУАРНОЙ ПЛИТКИ</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/fence">
                <img src={placeholder} alt="Установка еврозабора" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/fence">
                <span>УСТАНОВКА ЕВРОЗАБОРА</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/monuments">
                <img src={placeholder} alt="Установка памятников" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/monuments">
                <span>УСТАНОВКА ПАМЯТНИКОВ</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/calculate">
                <img src={placeholder} alt="Заказать замер" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/calculate">
                <span>ЗАКАЗАТЬ ЗАМЕР</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/consultation">
                <img src={placeholder} alt="Доставка" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              {/* <Link to="/services/consultation">
              <span>КОНСУЛЬТАЦИЯ</span>
            </Link> */}
              <a href="" onClick={(e) => e.preventDefault()}>
                <span>КОНСУЛЬТАЦИЯ</span>
              </a>
            </S.ButtonBlock>
          </S.Item>
        </S.Content>
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default Services;
