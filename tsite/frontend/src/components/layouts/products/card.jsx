import React, { useState } from "react";
import { ellipsis } from "react-multiline-ellipsis";
import Crd from "./cardStyles";

import stock from "./discount.png";
import placeholder from "./placeholder.jpeg";
import sertificated from "./ser.png";
import { Link, useRouteMatch } from "react-router-dom";

class MyTextBox extends React.Component {
  render() {
    return (
      <Link to={`/products/${this.props.article.page.page}/${this.props.id}`}>
        {this.props.text}
      </Link>
    );
  }
}

const MyTxtBox = ellipsis(MyTextBox, 1, "");

export const Card = ({ card }) => {
  const [expand, setExpand] = useState(false); // local state of expandable {name} block

  const { name, discount, sertificate, photos, prices, article, id } = card;
  // render calculated lower price
  const lowerPrice =
    prices.length > 0 &&
    Math.min(...prices.map(price => price.lowerPrice).filter(lp => lp != null));

  const isPriceAvailable = () => {
    if (prices.length == 1 && prices[0].lowerPrice != null) {
      return `${prices[0].lowerPrice} грн.`;
    } else {
      return lowerPrice != Infinity && lowerPrice
        ? `от ${lowerPrice} грн.`
        : "нет информации";
    }
  };

  const availablePhoto = photos.length
    ? photos[0].photo.medium_square_crop
    : placeholder;

    // Need to REVORK
  const oldPriceProduct = // search old price by flag 'oldPrice == true' in api responce
    prices.length > 0 &&
    prices.reduce((past, curr) => {
      return curr.oldPrice == true && curr;
    }, {});

  const nameExpand = expand ? ( // nameExpand render full {name} text if expand === true
    <Link to={`/products/${article.page.page}/${id}`}>{name}</Link>
  ) : (
    <MyTxtBox article={article} id={id} text={name}></MyTxtBox>
  );
  return (
    <Crd.C_Wrapper>
      <Crd.C_Content>
        <Crd.C_ImageBlock>
          <Link to={`/products/${article.page.page}/${id}`}>
            {/* Product image */}
            <Crd.C_Image src={availablePhoto} alt="Card image" />
            {/* Sertificate image */}
            {sertificate && <Crd.C_SertifImg src={sertificated} />}
          </Link>
          {/* Discount image */}
          {discount && <Crd.C_StockImg src={stock} alt="Discount" />}
        </Crd.C_ImageBlock>
        <Crd.C_LinkHolder>
          <Crd.C_ExpandableName
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
          >
            {nameExpand}
          </Crd.C_ExpandableName>
        </Crd.C_LinkHolder>
        <Crd.C_OldPrice oldPrice={oldPriceProduct.oldPrice}>
          {oldPriceProduct.price} грн.
        </Crd.C_OldPrice>
        <Crd.C_Price>
          {isPriceAvailable()}
          {article.unit && prices.length > 0 && `/${article.unit}`}
        </Crd.C_Price>
        <Crd.C_Button>
          <Link to={`/products/${article.page.page}/${id}`}>Подробнее</Link>
        </Crd.C_Button>
      </Crd.C_Content>
    </Crd.C_Wrapper>
  );
};

Card.defaultProps = {
  card: {
    name: "name",
    discount: false,
    sertificate: false,
    photos: [],
    prices: [{ lowerPrice: null }],
    id: ""
  }
};

export default Card;
