import React from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { default as S } from "./breadcrumbsStyles";

const Ul_Container = styled.ul`
  margin-top: 5pt;
  filter: drop-shadow(0 3px 5px #484752);
`;

const Alias = {
  Home: " ",
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
    <Ul_Container>
      <Li_Container>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Новости
        </a>
      </Li_Container>
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
    </Ul_Container>
  );
};

const Li_Container = styled.li`
  display: inline-block;
  height: 30px;
  line-height: 30px;
  /* width: 100px; */
  margin: 0px 2px 2px 0;
  text-indent: 19px;
  position: relative;
  &:before {
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    left: 0px;
    border-style: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #484752;
    z-index: 0;
  }
  &:first-child:before {
    border-color: transparent;
  }
  & a:after {
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    right: -15px;
    border-style: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #ccc;
    z-index: 10;
  }
  & a {
    display: block;
    background: #ccc;
    color: black;
    font-size: 10pt;
    font-weight: bold;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    &:hover {
      background: rgb(221, 221, 221);
    }
    &:hover::after {
      border-color: transparent transparent transparent rgb(221, 221, 221);
    }
    &:active {
    }
  }
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
    <>
      {label in Alias ? (
        <Li_Container>
          <a href="" onClick={e => callback(e, label)}>
            {Alias[label]}
          </a>
        </Li_Container>
      ) : (
        breadcr && (
          <Li_Container>
            <a href="" onClick={e => callback(e, label)}>
              {breadcr}
            </a>
          </Li_Container>
        )
      )}
    </>
  );
};

export default Breadcrumbs;
