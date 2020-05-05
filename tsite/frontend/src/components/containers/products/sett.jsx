import React from "react";
import ProductsContainer from "./productsContainer";

const Sett = () => {
  const categories = ["vibropressed", "vibrocast", "borders", "gully"];
  return <ProductsContainer page={"sett"} {...{ categories }} />;
};

export default Sett;
