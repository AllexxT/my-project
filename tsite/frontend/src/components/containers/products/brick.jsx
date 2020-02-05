import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";

const Brick = () => {
  const products = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts("brick"));
  }, [products.length]);

  const facblock = products.products.filter(
    art => art.article.article === "facblock"
  );
  const facbrick = products.products.filter(
    art => art.article.article === "facbrick"
  );
  const buildblock = products.products.filter(
    art => art.article.article === "buildblock"
  );
  const baseblock = products.products.filter(
    art => art.article.article === "baseblock"
  );
  return (
    <>
      {products.fetching ? (
        "LOADING..."
      ) : (
        <>
          <Products data={{ products: facblock }} title="Облицовочный Блок" />
          <Products data={{ products: facbrick }} title="Облицовочный Кирпич" />
          <Products data={{ products: buildblock }} title="Строительный Блок" />
          <Products data={{ products: baseblock }} title="Фундаментный Блок" />
        </>
      )}
    </>
  );
};

export default Brick;
