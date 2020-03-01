import styled from "styled-components"

const StaticWin = styled.div`
  position: relative;  
`

const StyledMenu = styled.nav`
  box-shadow: 5px 5px 15px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F6D27E;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: ${({ open }) => (open ? "100vh" : "0vh")};
  text-align: left;
  padding: ${({ open }) => (open ? "1.5rem" : "0")};
  position: relative;
  top: -15px;
  left: 0;
  transition: transform 0.3s ease-in-out, padding 0 linear 0.4s,
    height 0 linear 0.4s;
  will-change: transform, height, padding;
  ul {
    padding-left: 3rem;
      a {
        display: block;
        letter-spacing: 0;
        font-size: ${({ open }) => (open ? "1rem" : "0rem")};
        padding: ${({ open }) => (open ? "0 0 14pt 0" : "0")};

        @media (max-width: 576px) {
        font-size: ${({ open }) => (open ? "1.3rem" : "0rem")};
        }
    }
  }
  a {
    font-size: ${({ open }) => (open ? "1rem" : "0rem")};
    text-transform: uppercase;
    padding: ${({ open }) => (open ? "10pt 0" : "0")};
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #525252;
    text-decoration: none;
    transition: all 0.05s linear;

    @media (max-width: 576px) {
      font-size: ${({ open }) => (open ? "2rem" : "0rem")};
    }

    &:hover {
      color: #343078;
    }
  }
`;



const StyledBurger = styled.button`
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? "2rem" : "")};
  left: ${({ open }) => (open ? "" : "2rem")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#f5cb55")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledBurgerMenu = styled.div`
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 15px;
  @media (min-width:900px){
        display: none;
    }
  @media (max-width: 740px) {
    left: -9pt;
  }
`;

const Styles = {
  StaticWin,
  StyledMenu,
  StyledBurger,
  StyledBurgerMenu,
}

export default Styles;