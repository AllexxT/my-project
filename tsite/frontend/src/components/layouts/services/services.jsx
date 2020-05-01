import React from "react";
import { default as S } from "./servicesStyle";
import { Link } from "react-router-dom";
import placeholder from "../products/placeholder.jpeg"

const Services = () => {
  return (
    <S.PageWrapper>
      <S.PageTitle>
        <h1>Наши услуги</h1>
      </S.PageTitle>
      <S.Content>
        <S.Item>
          <S.ImageBlock>
            <Link to="/services/delivery">
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/manipulator.jpg"
                alt="Доставка"
              />
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
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/ukladka-trotuarnoj-plitki-1.jpg"
                alt="Укладка тротуарной плитки"
              />
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
              <img
                src={placeholder}
                alt="Установка еврозабора"
              />
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
              <img
                src={placeholder}
                alt="Установка памятников"
              />
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
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/trotuarnaja_plitka_zamer-1.jpg"
                alt="Заказать замер"
              />
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
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/texnicheskaja_podderjka.jpg"
                alt="Доставка"
              />
            </Link>
          </S.ImageBlock>
          <S.ButtonBlock>
            <Link to="/services/consultation">
              <span>КОНСУЛЬТАЦИЯ</span>
            </Link>
          </S.ButtonBlock>
        </S.Item>
      </S.Content>
    </S.PageWrapper>
  );
};

export default Services;
