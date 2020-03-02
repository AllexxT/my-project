import React from "react";
import { default as S } from "./expositionStyles";
import ExpositionCategory from "./expositionCategory";

const ExpositionPage = ({ expositionArray }) => {
  return (
    <S.PageWrapper>
      <S.PageTitle>
        <h1>Наши работы</h1>
      </S.PageTitle>
      {expositionArray.map((category, index) => (
        <ExpositionCategory key={index} data={category} />
      ))}
    </S.PageWrapper>
  );
};

export default ExpositionPage;
