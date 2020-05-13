import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../../actions/news";
import News from "../../layouts/news/news";
import TitleComponent from "../../titleComponent";

const NewsContainer = () => {
  const news = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [news.length]);
  return (
    <>
      <TitleComponent />
      <News news={news} />
    </>
  );
};

export default NewsContainer;
