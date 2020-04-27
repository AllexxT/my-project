import React from "react";
import { default as S } from "./deliveryStyle";
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <S.PageWrapper>
      <S.Title>
        <h1>
          Доставка тротуарной плитки в Запорожье и Запорожской области
          манипулятором
        </h1>
      </S.Title>
      <S.Description>
        <p>
          Благодаря наличию автопарка манипуляторов грузоподъемностью от 5 до 25
          тонн, мы с радостью доставим необходимое для Вас количество тротуарной
          плитки в любую точку Запорожья, Запорожской области а так же ближайших
          областей
          <s>
            {" "}
            (Буча, Ирпень, Вишневое, Обухов, Васильков, Борисполь, Вышгород и
            другие города)
          </s>
        </p>
      </S.Description>
      <S.PhotoRow>
        <S.Box>
          <S.PhotoBox>
            <img
              src="https://anvigroup.com.ua/wp-content/uploads/2017/02/perevozka-manipulyatorom-plitki-anvigroup-5t.jpg"
              alt="Манипулятор"
            />
          </S.PhotoBox>
          <S.BoxLabel>
            <h4>Манипулятор 5 т</h4>
            <p>Доставка</p>
          </S.BoxLabel>
        </S.Box>
        <S.Box>
          <S.PhotoBox>
            <img
              src="https://anvigroup.com.ua/wp-content/uploads/2017/02/perevozka-manipulyatorom-plitki-anvigroup-15t.jpg"
              alt="Манипулятор"
            />
          </S.PhotoBox>
          <S.BoxLabel>
            <h4>Манипулятор 15 т</h4>
            <p>Доставка</p>
          </S.BoxLabel>
        </S.Box>
        <S.Box>
          <S.PhotoBox>
            <img
              src="https://anvigroup.com.ua/wp-content/uploads/2017/02/dostavka-trotuarnoy-plitki-anvigroup.jpg"
              alt="Манипулятор"
            />
          </S.PhotoBox>
          <S.BoxLabel>
            <h4>Манипулятор 25 т</h4>
            <p>Доставка</p>
          </S.BoxLabel>
        </S.Box>
      </S.PhotoRow>
      <S.DiscoverPriceRow>
        <S.DiscoverText>
          <span>Уточнить стоимость доставки</span>
        </S.DiscoverText>
        <S.DiscoverNumbers>
          <a href="tel:+380638086001">+38 (063) 80-86-001</a>
          <a href="tel:+380675273100">+38 (067) 52-73-100</a>
        </S.DiscoverNumbers>
      </S.DiscoverPriceRow>
      <S.DownLink>
        <Link to="/products/sett">КУПИТЬ ТРОТУАРНУЮ ПЛИТКУ В ЗАПОРОЖЬЕ</Link>
      </S.DownLink>
    </S.PageWrapper>
  );
};

export default Delivery;
