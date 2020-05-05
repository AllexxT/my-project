import React from "react";
import ProductsContainer from "./productsContainer";

const Brick = () => {
  const categories = ["baseblock", "buildblock", "facblock", "facbrick"];
  return <ProductsContainer page={"brick"} {...{ categories }} />;
};

export default Brick;
