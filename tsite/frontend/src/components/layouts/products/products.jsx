import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { ellipsis } from "react-multiline-ellipsis";

import stock from "./discount.png";
import placeholder from "./placeholder.jpeg";
import sertificated from "./ser.jpeg";
import { useLocation } from "react-router";

const PWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;
const PTitleAnimation = keyframes`
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
`;
const PTitle = styled.div`
  padding: 10px 0 10px 30px;
  font-size: 26px;
  line-height: 16px;
  animation: ${PTitleAnimation} 1s linear;
`;
const PContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  & > div {
    /* Cards margin */
    margin: 15px 15px 15px 15px;
  }
`;

const Products = ({ data }) => {
  const location = useLocation();
<<<<<<< HEAD

=======
>>>>>>> backup
  const { title, article: articleAnchor } = data.products[0].article;

  useEffect(() => {
    if (location.hash) {
      window.location.href = location.hash;
      // var top = document.getElementById(articleAnchor).offsetTop;
      // window.scrollTo(0, top);
      // document.getElementById(articleAnchor).scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "nearest"
      // });
    }
  }, []);
  return (
    <PWrapper>
      <PTitle id={articleAnchor}>{title}</PTitle>
      <PContent>
        {data.products.map(product => (
          <Card key={product.id} card={product} />
        ))}
      </PContent>
    </PWrapper>
  );
};

const slide = keyframes`
    from {
        opacity: 0;
        top: -20px;
    }

    to {
        opacity: 1;
        top: 0px;
    }
`;
const C_Wrapper = styled.div`
  position: relative;
  min-height: 325px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: whitesmoke;
  justify-content: space-between;
  box-shadow: 0px 5px 10px gray;
  animation: ${slide} 0.2s linear;
`;
const C_Content = styled.div`
  padding: 15px 15px 0 15px;
  margin: 0 0 15px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const C_ImageBlock = styled.div`
  position: relative;
`;
const C_Link = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  max-height: 165px;
`;
const C_LinkHolder = styled.div`
  flex: 1 1 35px;
`;
const C_LinkName = styled.a`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 18px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 15px 2px 0 0;
  font-weight: bold;
  color: #323232;
  transition: color 0.2s linear;
  align-self: flex-start;
  position: relative;
  &:hover {
    color: #b28c1a;
  }
`;
const C_Image = styled.img`
  max-width: 100%;
`;
const C_StockImg = styled.img`
  position: absolute;
  top: -5px;
  left: -7px;
`;
const C_SertifImg = styled.img`
  position: absolute;
  top: -5px;
  right: -7px;
  width: 30px;
  box-shadow: 0px 5px 10px yellow;
`;
const C_OldPrice = styled.div`
  visibility: ${props => (props.oldPrice ? "visible" : "hidden")};
  text-decoration: line-through;
  font-size: 15px;
  color: gray;
  vertical-align: bottom;
`;
const C_Price = styled.div`
  font-size: 21px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 0 10px 0;
  font-weight: bold;
  color: #323232;
`;
const C_Button = styled.div`
  display: flex;
  justify-content: center;
  line-height: 48px;
  background: #d3a52e;
  transition: background 0.2s linear;
  &:hover {
    background: #fdc61d;
  }
  & a {
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #2b2b2b;

    transition: color 0.2s;
    &:hover {
      color: #2b2b2b;
    }
  }
`;
const C_ExpandableName = styled.div`
  position: absolute;
  background: whitesmoke;
  text-decoration: underline;
`;

class MyTextBox extends React.Component {
  render() {
    return <C_LinkName href="">{this.props.text}</C_LinkName>;
  }
}

const MyTxtBox = ellipsis(MyTextBox, 1, "");

export const Card = ({ card }) => {
  const [expand, setExpand] = useState(false); // local state of expandable {name} block
  const { name, discount, sertificate, photos, prices, article } = card;
  // render calculated lower price
  const lowerPrice =
    prices.length > 0 &&
    prices.reduce((lower, curr) => {
      return lower > curr.price ? curr.price : lower;
    }, 9999);

  const availablePrice = () => {
    if (prices.length == 1) {
      return `${prices[0].price} грн.`;
    } else {
      return lowerPrice ? `от ${lowerPrice} грн.` : "нет информации";
    }
  };

  const availablePhoto = photos.length
    ? photos[0].photo.medium_square_crop
    : placeholder;

  const oldPriceProduct =
    prices.length > 0 &&
    prices.reduce((past, curr) => {
      return curr.oldPrice == true && curr;
    }, {});

  const nameExpand = expand ? ( // nameExpand render full {name} text if expand === true
    <C_LinkName absolute href="">
      {name}
    </C_LinkName>
  ) : (
    <MyTxtBox text={name}></MyTxtBox>
  );
  return (
    <C_Wrapper>
      <C_Content>
        <C_ImageBlock>
          <C_Link href="">
            {/* Product image */}
            <C_Image src={availablePhoto} alt="Card image" />
            {/* Sertificate image */}
            {sertificate && <C_SertifImg src={sertificated} />}
          </C_Link>
          {/* Discount image */}
          {discount && <C_StockImg src={stock} alt="Discount" />}
        </C_ImageBlock>
        <C_LinkHolder>
          <C_ExpandableName
            onMouseOver={() => setExpand(true)}
            onMouseOut={() => setExpand(false)}
          >
            {nameExpand}
          </C_ExpandableName>
        </C_LinkHolder>
        <C_OldPrice oldPrice={oldPriceProduct.oldPrice}>
          {oldPriceProduct.price} грн.
        </C_OldPrice>
        <C_Price>
          {availablePrice()}
          {article.unit && prices.length > 0 && `/${article.unit}`}
        </C_Price>
        <C_Button>
          <C_Link>Подробнее</C_Link>
        </C_Button>
      </C_Content>
    </C_Wrapper>
  );
};

Card.DefaultProps = {
  card: {
    name: "name",
    discount: false,
    sertificate: false,
    photos: [],
    prices: {},
    id: ""
  }
};

export default Products;
