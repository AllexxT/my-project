import React from "react";
import Styled_Link, { PopUpLink } from "./styledLinks";
import NavStyle from "./navigationStyles";
import PopUpMenu from "./popupmenu";

const ProductsSubmenu = () => {
  return (
    <NavStyle.Nav__Ul_Submenu>
      <Styled_Link
        submenu={true}
        to="/products/sett"
        label="ТРОТУАРНАЯ ПЛИТКА И БОРДЮР"
      >
        <PopUpMenu>
          <PopUpLink
            to="/products/sett#vibropressed"
            label="Вибропрессованая"
          /> <div />
          <PopUpLink to="/products/sett#vibrocast" label="Вибролитая" />
          <PopUpLink to="/products/sett#borders" label="Бордюр" />
        </PopUpMenu>
      </Styled_Link>
      <Styled_Link submenu={true} to="/products/fence" label="ЕВРОЗАБОР">
        <PopUpMenu>
          <PopUpLink to="/products/fence#glossy" label="Глянцевый бетонный" />
          <PopUpLink to="/products/fence#ordinary" label="Бетонный" />
          <PopUpLink to="/products/fence#columns" label="Столбы бетонные" />
          {/* <a href="#columns">"Столбы Бетонные"</a> */}
        </PopUpMenu>
      </Styled_Link>
      <Styled_Link
        submenu={true}
        to="/products/brick"
        label="КОЛОТЫЙ БЛОК И КИРПИЧ"
      >
        <PopUpMenu>
          <PopUpLink
            to="/products/brick#baseblock"
            label="Фундаментный блок"
          />
          <PopUpLink
            to="/products/brick#buildblock"
            label="Блок Строительный"
          />
          <PopUpLink
            to="/products/brick#facblock"
            label="Блок Облицовочный"
          />
          <PopUpLink
            to="/products/brick#facbrick"
            label="Кирпич Облицовочный"
          />
        </PopUpMenu>
      </Styled_Link>
      <Styled_Link
        submenu={true}
        to="/products/parapet"
        label="КРЫШКИ И ПАРАПЕТЫ"
      >
        <PopUpMenu>
          <PopUpLink to="/products/parapet#cap" label="Крышки" />
          <PopUpLink to="/products/parapet#parapet" label="Парапеты" />
        </PopUpMenu>
      </Styled_Link>
      <Styled_Link submenu={true} to="/products/monuments" label="ПАМЯТНИКИ">
        <PopUpMenu>
          <PopUpLink
            to="/products/monuments#capital"
            label="Бетонные памятники"
          />
          <PopUpLink to="/products/monuments#coverplate" label="Отмостка" />
          <PopUpLink
            to="/products/monuments#granite"
            label="Гранитные памятники"
          />
          <PopUpLink
            to="/products/monuments#nameplate"
            label="Овалы и таблички"
          />
        </PopUpMenu>
      </Styled_Link>
    </NavStyle.Nav__Ul_Submenu>
  );
};

export default ProductsSubmenu;
