import React from "react";
import { default as S } from "./servicesStyle";
import { Link } from "react-router-dom";

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
            <Link to="/services/installation">
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/ukladka-trotuarnoj-plitki-1.jpg"
                alt="Укладка"
              />
            </Link>
          </S.ImageBlock>
          <S.ButtonBlock>
            <Link to="/services/installation">
              <span>УКЛАДКА</span>
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
