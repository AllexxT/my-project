import React from "react";
import { default as S } from "./mdseStyles";
import sett from "./mdseMedia/sett2.png";
import fence from "./mdseMedia/fence2.png";
import brick from "./mdseMedia/brick2.png";
import monuments from "./mdseMedia/monuments.png";
import parapet from "./mdseMedia/parapet.jpg";
import { useHistory } from "react-router";

const Mdse = () => {
  const history = useHistory();
  const link = lnk => {
    history.push(`/products/${lnk}`);
  };
  return (
    <S.Wrapper>
      <S.CategoryItem onClick={() => link("monuments")}>
        <img src={monuments} alt="Памятники" />
        <S.Label>
          <p>Памятники</p>
        </S.Label>
      </S.CategoryItem>
      <S.CategoryItem onClick={() => link("parapet")}>
        <img src={parapet} alt="Парапеты" />
        <S.Label>
          <p>Парапеты</p>
        </S.Label>
      </S.CategoryItem>
      <S.CategoryItem onClick={() => link("brick")}>
        <img src={brick} alt="Кирпич и Блок" />
        <S.Label>
          <p>Блок и Кирпич</p>
        </S.Label>
      </S.CategoryItem>
      <S.CategoryItem onClick={() => link("fence")}>
        <img src={fence} alt="Еврозабор" />
        <S.Label>
          <p>Еврозабор</p>
        </S.Label>
      </S.CategoryItem>
      <S.CategoryItem onClick={() => link("sett")}>
        <img src={sett} alt="Тротуарная плитка" />
        <S.Label>
          <p>Тротуарная Плитка</p>
        </S.Label>
      </S.CategoryItem>
    </S.Wrapper>
  );
};

export default Mdse;