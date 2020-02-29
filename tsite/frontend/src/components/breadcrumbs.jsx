import React, { useRef } from "react";
import styled from "styled-components"; // { css }
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Ul_Container = styled.ul`
  display: flex;
`;

const Alias = {
    Home: ' ',
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

const SEPARATOP = "➤";

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
    <div>
      <Ul_Container>
        <Li_Container>
          <a href="" onClick={e => history.push("/")}>
            Новости
          </a>
        </Li_Container>
        {SEPARATOP}
        {splittedPath.map((path, index) => (
          <Breadcrumb
            key={index}
            id={index}
            pathLabel={path}
            callback={linkHandler}
          />
        ))}
      </Ul_Container>
    </div>
  );
};

const Li_Container = styled.li`
    font-size: 16px;
    /* Realization separator with Before and props */
    /* &:not(:first-child)::before { */
        /* content: "${props =>
          props.separator ? props.separator : "-"}";       */
    /* } */
`;

export const Breadcrumb = ({ callback, pathLabel, id }) => {
  const [breadcr, setBreadcr] = useState(null);
  const label =
    pathLabel.length > 1
      ? pathLabel[0].toUpperCase() + pathLabel.slice(1)
      : "Home";

  useEffect(() => {
    setTimeout(() => {
      setBreadcr(document.breadcrumb);
    }, 200);
  }, [breadcr]);

  return (
    <Li_Container>
      {id === 0 || SEPARATOP}
      {/* <a href='' onClick={(e) => callback(e)} >{`${label}`}</a> */}
      <a href="" onClick={e => callback(e, label)}>
        {(label in Alias && Alias[label]) || breadcr}
      </a>
    </Li_Container>
  );
};

export default Breadcrumbs;
