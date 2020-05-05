import React from "react";
import ProductsContainer from "./productsContainer";

const Parapet = () => {
  const categories = ["cap", "parapet"];
  return <ProductsContainer page={"parapet"} {...{ categories }} />;
};

export default Parapet;
