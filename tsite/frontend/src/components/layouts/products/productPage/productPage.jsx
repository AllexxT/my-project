import React from "react";
import PP from "./productPageStyles";
import PriceTable from "./table";
import Gallery from "./gallery";
import Description from "./description";

const ProductPage = ({ product, callBack }) => {
  const {
    id,
    name,
    article,
    sertificate,
    sizes,
    description,
    discount,
    prices,
    photos
  } = product;

  return (
    <PP.Wrapper>
      <PP.Gallery_Table__row>
        <PP.GalleryWrapper>
          <Gallery {...{ photos }} />
        </PP.GalleryWrapper>
        <PP.TableWrapper>
          <PP.TitleWrapper>
            <PP.Title__row>{name}</PP.Title__row>
          </PP.TitleWrapper>
          <PriceTable {...{ sizes, prices }} />
        </PP.TableWrapper>
      </PP.Gallery_Table__row>
      <PP.DescriptionWrapper>
        <Description {...{ description, callBack }} />
      </PP.DescriptionWrapper>
    </PP.Wrapper>
  );
};
export default ProductPage;
