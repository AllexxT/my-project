import React from "react";
import ProductsSubmenu from "./productsSubmenu";
import Styled_Link from './styledLinks'


const Menu = () => {
  return (
    <nav style={{top:'10px'}}>
      <ul>
        <Styled_Link active={true} to="/" label="ДОМАШНЯЯ" />
        <Styled_Link to="/products" label="ТОВАРЫ" />
        <li>
          <ProductsSubmenu />
        </li>
        <Styled_Link to="/services" label="НАШИ УСЛУГИ" />
        <Styled_Link to="/exposition" label="НАШИ РАБОТЫ" />
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
