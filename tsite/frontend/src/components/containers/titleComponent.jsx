import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { getHead } from "../../actions/head";
import { useDispatch, useSelector } from "react-redux";

const TitleComponent = ({ page, home }) => {
  const dispatch = useDispatch();
  const head = useSelector((state) => state.headReducer);
  useEffect(() => {
    dispatch(getHead(page));
  }, []);
  return (
    head && (
      <Helmet>
        <meta name="theme-color" content="r#de9c2a" />
        <meta
          name="description"
          content={head.head.description ? head.head.description : ""}
        />
        <meta
          name="keywords"
          content={head.head.keywords ? head.head.keywords : ""}
        />
        <title>{head.head.title}</title>
        {home && <link rel="canonical" href="http://pasenko.zp.ua" /> || 
        <link rel="canonical" href={document.location.href} />}
      </Helmet>
    )
  );
};

export default TitleComponent;
