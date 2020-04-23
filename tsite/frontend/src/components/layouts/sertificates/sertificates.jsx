import React from "react";
import styled from "styled-components";

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

const Sertificates = () => {
  return (
    <div>
      <PageTitle>
        <h1>Сертификаты</h1>
      </PageTitle>
    </div>
  );
};

export default Sertificates;
