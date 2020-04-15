import React from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { default as S } from "./breadcrumbsStyles";

const Alias = {
  Home: " ",
  Register: "Регистрация",
  Login: "Вход",
  Products: "Товары",
  Services: "Услуги",
  Sett: "Тротуарная плитка и Бордюр",
  Sertificates: "Сертификаты",
  Exposition: "Наши работы",
  Fence: "Eврозабор",
  Brick: "Блок и Кирпич",
  Parapet: "Крышки и Парапеты",
  Monuments: "Памятники"
};

// const SEPARATOP = "➤";

const Breadcrumbs = () => {
  const location = useLocation();
  const history = useHistory();
  const splittedPath = location.pathname.split("/").slice(1);

  const linkHandler = (e, label) => {
    const target = label.toLowerCase();
    const locatArray = location.pathname.split("/");
    const destionation = locatArray
      .slice(0, locatArray.indexOf(target) + 1)
      .join("/");
    e.preventDefault();
    history.push(destionation);
  };
  return (
    <S.Ul_Container>
      <S.Li_Container>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Новости
        </a>
      </S.Li_Container>
      {/* {SEPARATOP} */}
      {splittedPath[0] != "" &&
        splittedPath.map((path, index) => (
          <Breadcrumb
            key={index}
            id={index}
            pathLabel={path}
            callback={linkHandler}
          />
        ))}
    </S.Ul_Container>
  );
};

export const Breadcrumb = ({ callback, pathLabel, id }) => {
  const label =
  pathLabel.length > 1
  ? pathLabel[0].toUpperCase() + pathLabel.slice(1)
  : "Home";
  
  // // For showing current product page // //
  // const [breadcr, setBreadcr] = useState(null);
  // useEffect(() => {
  //   let id = setTimeout(() => {
  //     setBreadcr(document.breadcrumb);
  //   }, 200);
  //   return () => {
  //     clearTimeout(id)
  //   }
  // }, [breadcr]);

  return (
    <>
      {label in Alias ? (
        <S.Li_Container>
          <a href="" onClick={e => callback(e, label)}>
            {Alias[label]}
          </a>
        </S.Li_Container>
      ) : ( ''
        // // For showing current product page // //
        // breadcr && (
        //   <S.Li_Container>
        //     <a href="" onClick={e => callback(e, label)}>
        //       {breadcr}
        //     </a>
        //   </S.Li_Container>
        // )
      )}
    </>
  );
};

export default Breadcrumbs;
