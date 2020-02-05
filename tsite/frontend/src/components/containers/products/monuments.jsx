import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";


const Monuments = () => {
    const products = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts('monuments'));
    }, [products.length]);

    const vibropressed = products.products.filter(
      art => art.article.article === "vibropressed"
    );
    const vibrocast = products.products.filter(
      art => art.article.article === "vibrocast"
    );
    const borders = products.products.filter(
      art => art.article.article === "borders"
    );
    return (
      <>
        {products.fetching ? (
          "LOADING..."
        ) : (
          <>
            <Products
              data={{ products: vibropressed }}
              title="Тротуарная плитка вибропрессованная"
            />
            <Products
              data={{ products: vibrocast }}
              title="Тротуарная плитка вибролитая"
            />
            <Products data={{ products: borders }} title="Бордюры и отливы" />
          </>
        )}
      </>
    );
  };

export default Monuments;