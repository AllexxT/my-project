import React from "react";
import ProductsContainer from "./productsContainer";

const Fence = () => {
  const categories = ["glossy", "ordinary", "columns"];
  return <ProductsContainer page={"fence"} {...{ categories }} />;
};

export default Fence;
