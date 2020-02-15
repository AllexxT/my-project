import React from "react";

const ProductPage = ({ product }) => {
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
    <div>
      <p>Product name: {name}</p>
      <p>Description is: {description}</p>
    </div>
  );
};
export default ProductPage;
