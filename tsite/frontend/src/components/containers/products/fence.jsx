import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";


const Fence = () => {
    const products = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts('fence'));
    }, [products.length]);

    const glossy = products.products.filter(
      art => art.article.article === "glossy"
    );
    const ordinary = products.products.filter(
      art => art.article.article === "ordinary"
    );
    const columns = products.products.filter(
      art => art.article.article === "columns"
    );
    return (
      <>
        {products.fetching ? (
          "LOADING..."
        ) : (
          <>
            <Products
              data={{ products: glossy }}
              title="Еврозабор Бетонный Глянцевый"
            />
            <Products
              data={{ products: ordinary }}
              title="Еврозабор Бетонный"
            />
            <Products data={{ products: columns }} title="Столбы Бетонные" />
          </>
        )}
      </>
    );
  };
  
export default Fence;