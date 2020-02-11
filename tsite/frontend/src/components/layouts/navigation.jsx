import React from "react";
import styled, { css } from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

const StyledLi = styled.li`
  & a {
    color: black;
    display: block;
    line-height: 13px;
    padding: 8px 5px 0 0;
    ${props =>
      props.match &&
      css`
        color: rgb(142, 120, 29);
      `}
  }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7) {
    padding: 0 0 0 15px;
  }
`;

const Slink = ({ label, to, active }) => {
  let match = useRouteMatch({
    path: to,
    exact: active
  });
  return (
    <StyledLi match={match}>
      <Link to={to}>{label}</Link>
    </StyledLi>
  );
};

const Menu = () => {
  return (
    <nav>
      <ul>
        <Slink active={true} to="/" label="ДОМАШНЯЯ" />
        <Slink to="/products" label="ТОВАРЫ" />
        <Slink to="/products/sett" label="ТРОТУАРНАЯ ПЛИТКА И БОРДЮР" />
        <Slink to="/products/fence" label="ЕВРОЗАБОР" />
        <Slink to="/products/brick" label="КОЛОТЫЙ БЛОК И КИРПИЧ" />
        <Slink to="/products/parapet" label="КРЫШКИ И ПАРАПЕТЫ" />
        <Slink to="/products/monuments" label="ПАМЯТНИКИ" />
        {/* <Slink to="/products/sett#borders" label="БОРДЮР" />
        <Slink to="/products/sett#vibrocast" label="ВИБРОЛИТАЯ" />
        <Slink to="/products/sett#vibropressed" label="ВИБРОПРЕСС" /> */}
        <Slink to="/services" label="НАШИ УСЛУГИ" />
        <Slink to="/exposition" label="НАШИ РАБОТЫ" />
      </ul>
    </nav>
  );
};

// If / else css styling
//
// const SomeComponent = styled.div`
//     ${props => props.on ?
//         css`background-color: green;` :
//         css`bacvkground-image: url(/off.png);`
//     }
// `
export default Menu;
