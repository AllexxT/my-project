import styled, { keyframes } from "styled-components";

const slide = keyframes`
    from {
        opacity: 0;
        top: -20px;
    }

    to {
        opacity: 1;
        top: 0px;
    }
`;
const C_Wrapper = styled.div`
  position: relative;
  min-height: 325px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: whitesmoke;
  justify-content: space-between;
  box-shadow: 0px 5px 10px gray;
  animation: ${slide} 0.2s linear;
`;
const C_Content = styled.div`
  padding: 15px 15px 0 15px;
  margin: 0 0 15px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const C_ImageBlock = styled.div`
  position: relative;
  & a {
    display: flex;
    justify-content: center;
    cursor: pointer;
    max-height: 165px;
  }
`;
const C_LinkHolder = styled.div`
  flex: 1 1 35px;
`;
const C_ExpandableName = styled.div`
  position: absolute;
  background: whitesmoke;
  text-decoration: underline;
   & a {
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 15px 2px 0 0;
    font-weight: bold;
    color: #323232;
    transition: color 0.2s linear;
    align-self: flex-start;
    position: relative;
    &:hover {
      color: #b28c1a;
    }
  }
`;
const C_Image = styled.img`
  max-width: 100%;
`;
const C_StockImg = styled.img`
  position: absolute;
  top: -5px;
  left: -7px;
`;
const C_SertifImg = styled.img`
  position: absolute;
  top: -5px;
  right: -7px;
  width: 30px;
  filter: drop-shadow(3px 4px 3px gray);
`;
const C_OldPrice = styled.div`
  visibility: ${props => (props.oldPrice ? "visible" : "hidden")};
  text-decoration: line-through;
  font-size: 15px;
  color: gray;
  vertical-align: bottom;
`;
const C_Price = styled.div`
  font-size: 21px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 0 10px 0;
  font-weight: bold;
  color: #323232;
`;
const C_Button = styled.div`
  display: flex;
  justify-content: center;
  line-height: 48px;
  background: #d3a52e;
  transition: background 0.2s linear;
  &:hover {
    background: #fdc61d;
  }
  & a {
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #2b2b2b;
    text-align: center;
    transition: color 0.2s;
    &:hover {
      color: #2b2b2b;
    }
  }
`;

const Crd = {
  C_Wrapper,
  C_Content,
  C_ImageBlock,
  C_LinkHolder,
  C_Image,
  C_StockImg,
  C_SertifImg,
  C_OldPrice,
  C_Price,
  C_Button,
  C_ExpandableName,
}

export default Crd;