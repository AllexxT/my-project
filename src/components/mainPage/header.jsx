import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import logo from './logo.png'
import MobileNumbers from './mobNumbers'


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        background-color: rgba(238, 238, 238, 100%)
    }
`

const Title = styled.h1`
    align-self: center;
    padding-top: 48px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* filter: drop-shadow(0px 5px 10px rgba(19, 0, 255, 100%)); */
    text-align: center;
    display: block;
`
const Logo = styled.img`
    height: 100px;
    width: auto;
    padding: 5px 0px 0px 0px;
    filter: contrast(1.5);
`
const HeaderStyle = styled.header`
    display: flex;
    background-color: white;
    flex-direction: column;
`
const SubHeader = styled.div`
    display: flex;
    margin: 5px;
    box-shadow: 0px 5px 10px gray;
    justify-content: space-around;
    border-top: solid 2px red;
    flex-wrap: wrap;
    flex-direction: row;
    @media (max-width: 1096px) {
        align-content: space-between;
        ${Title} {
            order:1;
            margin: 0px;
            margin-bottom: 5px;
            padding: 0px;
        }
        ${Logo} {
            margin-right: 100px;
        }
    }
    @media (max-width: 847px) {
        justify-content: center;
        ${Logo} {
            padding: 0px;
            margin: 0px;
        }
        ${Title} {
            order: 0;
        }
    }
`

const Header = () => {
    return (
        <HeaderStyle>
            <GlobalStyle />
            <SubHeader>
                <Logo src={logo} alt='logo' />
                <Title>Меню магазина Silmix</Title>
                <MobileNumbers />
            </SubHeader>
        </HeaderStyle>
    )
}

export default Header;