import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: ${({ open }) => (open ? "100vh" : "0vh")};
  text-align: left;
  padding: ${({ open }) => (open ? "2rem" : "0")};
  position: relative;
  top: -35px;
  left: 0;
  transition: transform 0.3s ease-in-out, padding 0 linear 0.4s,
    height 0 linear 0.4s;

  @media (max-width: 576px) {
    width: 100%;
  }
  a {
    font-size: ${({ open }) => (open ? "1.5rem" : "0rem")};
    text-transform: uppercase;
    padding: ${({ open }) => (open ? "2rem 0" : "0")};
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: all 0.3s linear;

    @media (max-width: 576px) {
      font-size: ${({ open }) => (open ? "2rem" : "0rem")};
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">
          💁🏻‍♂️
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          💸
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          📩
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 0;
  left: 2rem;
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
    background: ${({ open }) => (open ? "#0D0C1D" : "#d3a52e")};
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

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledBurgerMenu = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 35px;
`;

const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <StyledBurgerMenu ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
