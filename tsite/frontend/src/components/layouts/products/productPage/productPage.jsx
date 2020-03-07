import React, { useRef } from "react";
import PP from "./productPageStyles";
import PriceTable from "./table";
import Gallery from "./gallery";
import Description from "./description";
import { useEffect } from "react";

const ProductPage = ({ product, callBack }) => {
  const topOfContent = useRef()
  useEffect(() => {
    window.scroll({
      top: topOfContent.current.offsetTop - 50, 
      left: 0, 
      behavior: 'smooth'
    });
    // window.scrollTo(0, 63);
  }, []);
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
  document.breadcrumb = name
  return (
    <PP.Wrapper ref={topOfContent}>
      <PP.Gallery_Table__row>
          <Gallery {...{ photos }} />
        <PP.TableWrapper>
          <PP.TitleWrapper>
            <PP.Title__row>
              <h1>{name}</h1>
            </PP.Title__row>
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

ProductPage.defaultProps = {
  product: {
    photos: []
  }
};

export default ProductPage;
