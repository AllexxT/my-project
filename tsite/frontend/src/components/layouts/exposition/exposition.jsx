import React from "react";
import { default as S } from "./expositionStyles";
import ExpositionItem from "./expositionItem";
import { useEffect } from "react";

const Exposition = ({ data }) => {
  // console.log("data");

  return (
    <S.Wrapper>
      <ExpositionItem />
    </S.Wrapper>
  );
};

export default Exposition;
