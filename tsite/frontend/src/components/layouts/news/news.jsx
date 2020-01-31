import React from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";

const N_Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const News = ({ news }) => {
  const isNewsExist = news && news.news.length > 0;
  return (
    <N_Box>
      {isNewsExist &&
        news.news.map(newsData => (
          <NewsItem key={newsData.id} newsItem={newsData} />
        ))}
    </N_Box>
  );
};

export default News;
