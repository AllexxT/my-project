import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";

const Preloader = () => {
  return <div>LOADING...</div>;
};

const ProductsContainer = ({ page }) => {
  const products = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(page));
  }, [products.length]);

  const data = products.products;
  let articlesArray = [];
  let productsArray = [];

  data.forEach(product => {
    const art = product.article.article;
    !articlesArray.includes(art) && articlesArray.push(art);
  });

  articlesArray.forEach(article => {
    let prodSubArray = [];
    data.forEach(product => {
      const art = product.article.article;
      article == art && prodSubArray.push(product);
    });
    productsArray.push(prodSubArray);
  });

  return (
    <>
      {products.fetching ? (
        <Preloader />
      ) : (
        productsArray.map((product, index) => (
          <Products key={index} data={{ products: product }} />
        ))
      )}
    </>
  );
};

export default ProductsContainer;
