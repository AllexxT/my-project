import React from "react";
import { default as S } from "./installSettStyle";
import { Link } from "react-router-dom";

const InstallationSett = ({ data }) => {
  console.log(data)
  return (
    <S.PageWrapper>
      <S.Block>
        <S.Title>Укладка тротуарной плитки</S.Title>
        <p>
          Завершающим этапом любого строительного объекта, будь то торговый
          центр, магазин или частный дом, является благоустройство территории,
          располагающейся в непосредственной близости к объекту. К одному из
          основных этапов благоустройства относится{" "}
          <strong>укладка тротуарной плитки</strong>. Это сложный и трудоемкий
          процесс, который должны выполнять квалифицированные специалисты. Наша
          фирма выполняет все необходимые работы и услуги под ключ в Запорожье и
          области.
        </p>
      </S.Block>
      <h2>
        Укладка тротуарной плитки цена в Запорожье, прайс-лист на 2020 год.
      </h2>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Наименование работ</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {data.servprices.map((item, index)=> (
            <tr key={index}>
              <th>{index+1}</th>
              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <S.DiscoverPriceRow>
        <S.DiscoverText>
          <span>Выбрать тротуарную плитку →</span>
        </S.DiscoverText>
        <S.DiscoverNumbers>
          <Link to="/products/sett">
            <span>Подробнее</span>
          </Link>
        </S.DiscoverNumbers>
      </S.DiscoverPriceRow>
    </S.PageWrapper>
  );
};

export default InstallationSett;
