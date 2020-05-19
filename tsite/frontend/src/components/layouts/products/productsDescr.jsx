import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: whitesmoke;
  margin: 20px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  border-left: 5px solid #f3cb55;
  border-top: 5px solid #f3cb55;
  border-bottom: 5px solid #535252;
  border-right: 5px solid #535252;
  h1 {
    padding-bottom: 15px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  & ul li {
    list-style: inside;
    font-weight: bold;
  }
  ul {
    margin-bottom: 10px;
  }
`;

const ProductsDescr = ({ textOfPage }) => {
  return (
    textOfPage && <Container dangerouslySetInnerHTML={{ __html: textOfPage }} />
  );
};

export default ProductsDescr;
