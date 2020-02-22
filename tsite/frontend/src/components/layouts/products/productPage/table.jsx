import React from "react";
import { default as S } from "./tableStyles";
import { useState } from "react";
import { useEffect } from "react";

const PriceTable = ({ sizes, prices }) => {

  return (
    <S.Wrapper>
      <S.Sizes>{sizes}</S.Sizes>
      <S.Content__row>
        {prices.length != 0 && prices[0].depthPrice.length > 0 && (
          <table>
            <caption>Таблица Цен</caption>
            <thead>
              <tr>
                <th>Цвет\Толщина</th>
                {prices[0].depthPrice.map((depth, index) => (
                  <th key={index}>{depth.depth.size}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prices.map((price, index) => (
                <tr key={index}>
                  <td key={price.id}>{price.color}</td>
                  {price.depthPrice.map((prs, index) => (
                    <td key={index}>{prs.price}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </S.Content__row>
    </S.Wrapper>
  );
};

PriceTable.defaultProps = {
  sizes: "sizes",
  prices: [
    {
      depthPrice: [

      ]
    }
  ]
};

export default PriceTable;
