import React from 'react';
import styled, { css } from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'

const StyledLi = styled.li`
    & a {
        display: block;
        width: 130px;
        height: 40px;
        background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
        border: none;
        border-radius: 5px;
        position: relative;
        border-bottom: 4px solid #2b8bc6;
        color: #fbfbfb;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        text-shadow: 1px 1px 1px rgba(0,0,0,.4);
        font-size: 15px;
        text-align: left;
        text-indent: 5px;
        box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
        cursor: pointer;
        :active {
            box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
            top: 1px;
        }
        :after {
            content: "";
            width: 0;
            height: 0;
            display: block;
            border-top: 20px solid #187dbc;
            border-bottom: 20px solid #187dbc;
            border-left: 16px solid transparent;
            border-right: 20px solid #187dbc;
            position: absolute;
            opacity: 0.6; 
            right: 0;
            top: 0;
            border-radius: 0 5px 5px 0;  
        }
        ${props => props.match && css`
            border: 2px solid yellow;
        `}
    }
    
`

const Slink = ({ label, to, active }) => {
    let match = useRouteMatch({
        path: to,
        exact: active,
    })
    return (
        <StyledLi match={match}>
            <Link to={to}>{label}</Link>
        </StyledLi>
    )
}

const Menu = () => {
    return (
        <nav>
            <ul>
                <Slink
                    active={true}
                    to="/"
                    label="Home"
                />
                <Slink to="/products" label="Products" />
                <Slink to="/contacts" label="Contacts" />
            </ul>
        </nav>
    )
}


// If / else css styling
//
// const SomeComponent = styled.div`        
//     ${props => props.on ?
//         css`background-color: green;` :
//         css`bacvkground-image: url(/off.png);`
//     }
// `
export default Menu;