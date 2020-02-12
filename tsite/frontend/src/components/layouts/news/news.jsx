import React from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";

const N_Box = styled.div`
  display: flex;
  flex-direction: column;
  /* z-index:-50; */
`;

const News = ({ news }) => {
  const isNewsExist = news && news.news.length > 0;
  return (
    <N_Box>
      {isNewsExist &&
        news.news.reverse().map(newsData => (
          <NewsItem key={newsData.id} newsItem={newsData} />
        ))}
    </N_Box>
  );
};

export default News;
