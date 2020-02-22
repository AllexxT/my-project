import React from "react";
import ProductsSubmenu from "./productsSubmenu";
import {default as S} from './navigationStyles'
import Styled_Link from './styledLinks'


const Menu = () => {
  return (
    <S.Nav>
      <ul>
        <Styled_Link active={true} to="/" label="НОВОСТИ" />
        <Styled_Link to="/products" label="ТОВАРЫ" />
        <li>
          <ProductsSubmenu />
        </li>
        <Styled_Link to="/services" label="НАШИ УСЛУГИ" />
        <Styled_Link to="/sertificates" label="СЕРТИФИКАТЫ" />
        <Styled_Link to="/exposition" label="НАШИ РАБОТЫ" />
      </ul>
    </S.Nav>
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
