import styled, { keyframes } from "styled-components";


const PWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;
const PTitleAnimation = keyframes`
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
`;
const PTitle = styled.div`
  padding: 10px 0 10px 30px;
  font-size: 26px;
  line-height: 16px;
  animation: ${PTitleAnimation} 1s linear;
`;

const PContentWrapper = styled.div `
  display: flex;
  @media (max-width:800px){
        justify-content: center;
    }
`

const PContent = styled.ul`
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  & > div {
    /* Cards margin */
    margin: 15px 15px 15px 15px;
  }
  @media (max-width:800px){
    width: 75%;
  }
`;

const Prds = {
  PWrapper,
  PTitle,
  PContentWrapper,
  PContent,
}

export default Prds;