import React from "react";
import { default as S } from "./burgerMenuStyles";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <S.StaticWin>
      <S.StyledMenu open={open} onClick={() => setOpen(!open)}>
        <Link to="/">
          <span role="img" aria-label="about us">
            ▶️
          </span>
          Новости
        </Link>
        <Link to="/products">
          <span role="img" aria-label="price">
            ▶️
          </span>
          Продукция
        </Link>
        <ul>
          <li>
            {" "}
            <Link to="/products/sett">
              <span role="img" aria-label="contact">
                🚀
              </span>
              ТРОТУАРНАЯ ПЛИТКА И БОРДЮР
            </Link>
          </li>
          <li>
            <Link to="/products/fence">
              <span role="img" aria-label="contact">
                🚀
              </span>
              ЕВРОЗАБОР
            </Link>
          </li>
          <li>
            <Link to="/products/brick">
              <span role="img" aria-label="contact">
                🚀
              </span>
              КОЛОТЫЙ БЛОК И КИРПИЧ
            </Link>
          </li>
          <li>
            <Link to="/products/parapet">
              <span role="img" aria-label="contact">
                🚀
              </span>
              КРЫШКИ И ПАРАПЕТЫ
            </Link>
          </li>
          <li>
            <Link to="/products/monuments">
              <span role="img" aria-label="contact">
                🚀
              </span>
              ПАМЯТНИКИ
            </Link>
          </li>
        </ul>
        <Link to="/services">
          <span role="img" aria-label="services">
            ▶️
          </span>
          Услуги
        </Link>
        <Link to="/sertificates">
          <span role="img" aria-label="sertificates">
            ▶️
          </span>
          Сертификаты
        </Link>
        <Link to="/exposition">
          <span role="img" aria-label="exposition">
            ▶️
          </span>
          Наши Работы
        </Link>
      </S.StyledMenu>
    </S.StaticWin>
  );
};

export default Menu;
