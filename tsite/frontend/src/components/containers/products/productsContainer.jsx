import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";

const ProductsContainer = ({ filter }) => {
  const products = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(filter));
  }, [products.length]);
  return <Products data={products} />;
};

export default ProductsContainer;
