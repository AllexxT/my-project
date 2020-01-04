import React from 'react';
import styled, { css } from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'

const StyledLi = styled.li`
    & a {
        display: block;
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
                <Slink to="/services" label="Services" />
                <Slink to="/exposition" label="Exposition" />
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