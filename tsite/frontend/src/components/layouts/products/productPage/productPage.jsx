import React, { useRef } from "react";
import S from "./productPageStyles";
import PriceTable from "./table";
import Gallery from "./gallery";
import Description from "./description";
import { useEffect } from "react";
import NoTablePrices from "./noTablePrices";

const ProductPage = ({ product, callBack }) => {
  const topOfContent = useRef();
  const {
    id,
    name,
    article,
    sertificate,
    sizes,
    description,
    discount,
    lowerPriceNoTable,
    prices,
    photos,
  } = product;
  useEffect(() => {
    window.scroll({
      top: topOfContent.current.offsetTop - 500,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const isMonument = article != undefined && article.page.page == "monuments";
  return (
    <S.Wrapper ref={topOfContent}>
      <S.Gallery_Table__row>
        <Gallery {...{ photos, isMonument }} />
        <S.TableWrapper>
          <S.TitleWrapper>
            <S.Title__row>
              <h1>{name}</h1>
            </S.Title__row>
          </S.TitleWrapper>
          <S.Sizes>{sizes}</S.Sizes>
          {(article != undefined && article.article == "vibropressed" && (
            <PriceTable {...{ sizes, prices }} />
          )) || <NoTablePrices {...{ prices }} />}
        </S.TableWrapper>
      </S.Gallery_Table__row>
      <S.DescriptionWrapper>
        <Description {...{ description, callBack }} />
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};

ProductPage.defaultProps = {
  product: {
    photos: [],
  },
};

export default ProductPage;
