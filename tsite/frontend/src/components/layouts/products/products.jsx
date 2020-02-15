import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Card from "./card"
import Prds from "./productsStyles"

const Products = ({ data }) => {
  const location = useLocation();

  const { title, article: articleAnchor } = data.products[0].article;

  useEffect(() => {
    if (location.hash) {
      window.location.href = location.hash;
      // var top = document.getElementById(articleAnchor).offsetTop;
      // window.scrollTo(0, top);
      // document.getElementById(articleAnchor).scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "nearest"
      // });
    }
  }, []);
  return (
    <Prds.PWrapper>
      <Prds.PTitle id={articleAnchor}>{title}</Prds.PTitle>
      <Prds.PContent>
        {data.products.map(product => (
          <Card key={product.id} card={product} />
        ))}
      </Prds.PContent>
    </Prds.PWrapper>
  );
};


export default Products;
