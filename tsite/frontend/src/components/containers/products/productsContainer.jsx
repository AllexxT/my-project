import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";
import { Switch, Route, useRouteMatch } from "react-router";
import ProductPage from "./productPage/productPageCont";

import prodPlaceHolder from "./no_product.gif";

const Preloader = () => {
  return <div>LOADING...</div>;
};

const NoData = () => {
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    const pause = setTimeout(() => {
      setTimer(true);
    }, 200);
    return () => {
      clearTimeout(pause);
    };
  }, [timer]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {timer && (
        <img
          src={prodPlaceHolder}
          style={{ maxWidth: "100%" }}
          alt="no data available"
        />
      )}
    </div>
  );
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
          (products.products.length > 0 &&
            productsArray.map((product, index) => (
              <Products key={index} data={{ products: product }} />
            ))) || <NoData />
        )}
      </Route>
    </Switch>
  );
};

export default ProductsContainer;
