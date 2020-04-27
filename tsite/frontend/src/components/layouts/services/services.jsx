import React from "react";
import { default as S } from "./servicesStyle";

const Services = () => {
  return (
    <S.PageWrapper>
      <S.PageTitle>
        <h1>Наши услуги</h1>
      </S.PageTitle>
      <S.Content>
        <S.Item>
          <S.ImageBlock>
            <a href="">
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/manipulator.jpg"
                alt="Доставка"
              />
            </a>
          </S.ImageBlock>
          <S.ButtonBlock>
            <a href="">
              <span>ДОСТАВКА</span>
            </a>
          </S.ButtonBlock>
        </S.Item>
        <S.Item>
          <S.ImageBlock>
            <a href="">
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/ukladka-trotuarnoj-plitki-1.jpg"
                alt="Укладка"
              />
            </a>
          </S.ImageBlock>
          <S.ButtonBlock>
            <a href="">
              <span>УКЛАДКА</span>
            </a>
          </S.ButtonBlock>
        </S.Item>
        <S.Item>
          <S.ImageBlock>
            <a href="">
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/trotuarnaja_plitka_zamer-1.jpg"
                alt="Заказать замер"
              />
            </a>
          </S.ImageBlock>
          <S.ButtonBlock>
            <a href="">
              <span>ЗАКАЗАТЬ ЗАМЕР</span>
            </a>
          </S.ButtonBlock>
        </S.Item>
        <S.Item>
          <S.ImageBlock>
            <a href="">
              <img
                src="https://anvigroup.com.ua/wp-content/uploads/2017/02/texnicheskaja_podderjka.jpg"
                alt="Доставка"
              />
            </a>
          </S.ImageBlock>
          <S.ButtonBlock>
            <a href="">
              <span>КОНСУЛЬТАЦИЯ</span>
            </a>
          </S.ButtonBlock>
        </S.Item>
      </S.Content>
    </S.PageWrapper>
  );
};

export default Services;
