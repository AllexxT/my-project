import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/product";
import ProductPage from "../../layouts/products/productPage/productPage";

const Preloader = () => {
  return <div>LOADING...</div>;
};

const NotFound = () => {
  return <div>404:PAGE NOT FOUND</div>;
};

const ProductPageCont = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector(state => state.productReducer);

  const preloaderOr404 =
    productState.fetching == 404 ? <NotFound /> : <Preloader />;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);
  return productState.fetching ? (
    preloaderOr404
  ) : (
    <ProductPage product={productState.product} />
  );
};
export default ProductPageCont;
