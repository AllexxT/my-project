import React from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";

const N_Box = styled.div`
  display: flex;
  /* z-index:-50; */
  flex-wrap: wrap;
  @media(max-width:950px) {
    flex-direction: column;
  }
`;
const PageTitle = styled.div`
  position: relative;
  margin: 10px 0 20px 0;
  padding: 0 0 20px;
  position: relative;
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  color: #333;

  &:before {
    content: "";
    position: absolute;
    width: 75px;
    height: 10px;
    display: block;
    bottom: 0;
    left: 0;
    background-color: #f3cb55;
  }
`;

const News = ({ news }) => {
  return (
    <>
      <PageTitle>
        <h1>Новости и новинки</h1>
      </PageTitle>
      <N_Box>
        {(news.news.length > 0 &&
          news.news.map((newsData) => (
            <NewsItem key={newsData.id} newsItem={newsData} />
          ))) || (
          <p style={{ color: "darkgoldenrod", fontSize: "16px" }}>
            Нет новостей
          </p>
        )}
      </N_Box>
    </>
  );
};

export default News;
