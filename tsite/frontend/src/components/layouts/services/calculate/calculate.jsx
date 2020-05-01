import React from "react";
import { default as S } from "./calculateStye";

const Calculate = () => {
  return (
    <S.PageWrapper>
      <S.ContentRow>
        <S.Icon>
          <img
            src="https://anvigroup.com.ua/wp-content/uploads/2017/02/trotuarnaja_plitka_zamer-1.jpg"
            alt="Замер"
          />
        </S.Icon>
        <S.Description>
          <p>
            Замер на территории планируемой под работы по укладке тротуарной плитки,
            производят опытные замерщики.
          </p>
          <p>
            Замеры обязательны для того, что бы рассчитать необходимое количество
            тротуарной плитки и сопутствующих материалов.{" "}
          </p>
          <p>
            Благодаря точным замерам, у вас не будут накапливаться лишние строительные
            материале, что в свою очередь поможет Вам значительно сэкономить на расходах.
            Консультанты "ЧП Джас" всегда готовы ответить Вам на любые вопросы касаемо 
            выбора тротуарной плитки а так же сопутствующих материалов (бордюры, цемент,
            отсев, геотекстиль и т.д.).
          </p>
        </S.Description>
      </S.ContentRow>
      <S.DiscoverPriceRow>
        <S.DiscoverText>
          <span>Заказать замер</span>
        </S.DiscoverText>
        <S.DiscoverNumbers>
          <a href="tel:+380638086001">+38 (063) 80-86-001</a>
          <a href="tel:+380675273100">+38 (067) 52-73-100</a>
        </S.DiscoverNumbers>
      </S.DiscoverPriceRow>
    </S.PageWrapper>
  );
};

export default Calculate;
