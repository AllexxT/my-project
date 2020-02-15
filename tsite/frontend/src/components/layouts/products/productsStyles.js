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
const PContent = styled.ul`
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  & > div {
    /* Cards margin */
    margin: 15px 15px 15px 15px;
  }
`;

const Prds = {
    PWrapper,
    PTitle,
    PContent,
}

export default Prds;