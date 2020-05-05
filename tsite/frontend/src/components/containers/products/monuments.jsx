import React from "react";
import ProductsContainer from "./productsContainer";

const Monuments = () => {
  const categories = ["granite", "capital", "coverplate", "nameplate"];
  return <ProductsContainer page={"monuments"} {...{ categories }} />;
};

export default Monuments;
