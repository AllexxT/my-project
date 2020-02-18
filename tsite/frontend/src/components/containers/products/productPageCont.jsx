import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/product";
import ProductPage from "../../layouts/products/productPage/productPage";
import axios from "axios";

const Preloader = () => {
  return <div>LOADING...</div>;
};

const NotFound = () => {
  return <div>404:PAGE NOT FOUND</div>;
};

const ProductPageCont = () => {
  const [update, setUpdate] = useState([1]);

  let { productId } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector(state => state.productReducer);
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie("csrftoken");
  const preloaderOr404 =
    productState.fetching == 404 ? <NotFound /> : <Preloader />;

  useEffect(() => {
    dispatch(getProduct(productId));
    setUpdate('')
  }, [update]);

  const updateDescription = descriptionHTML => {
    let product = productState.product;
    product.description = descriptionHTML;
    axios
      .put(`/api/products/${productId}/`, JSON.stringify(product), {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken
        }
      })
      .then(r => {
        console.log(r.status)
        setUpdate(r.status.toString())
      })
      .catch(e => console.log(e));
  };
  return productState.fetching ? (
    preloaderOr404
  ) : (
    <ProductPage product={productState.product} callBack={updateDescription} />
  );
};
export default ProductPageCont;
