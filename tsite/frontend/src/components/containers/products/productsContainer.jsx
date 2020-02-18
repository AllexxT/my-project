import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";
import { Switch, Route, useRouteMatch } from "react-router";
import ProductPage from "./productPage/productPageCont";

const Preloader = () => {
  return <div>LOADING...</div>;
};

const ProductsContainer = ({ page }) => {
  const products = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(getProducts(page));
  }, [products.length]);

  ////////////////////////////////////////////////////////////////
  //////////// This block transforms api response to
  //////////// array of category arrays for mapping each product
  //////////// in their category
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
  ///////////////////////////////////////////////////////////////////
  return (
      <Switch>
        <Route path={`${match.path}/:productId`} component={ProductPage} />
        <Route path={match.path}>
          {products.fetching ? (
            <Preloader />
          ) : (
            productsArray.map((product, index) => (
              <Products key={index} data={{ products: product }} />
            ))
          )}
        </Route>
      </Switch>
  );
};

export default ProductsContainer;
