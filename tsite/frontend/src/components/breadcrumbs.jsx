import React, { useCallback } from 'react'
import styled from 'styled-components' // { css } 
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { Link } from 'react-router-dom'


const Ul_Container = styled.ul`
    display: flex;
    flex-direction: row;
`;
const SEPARATOP = '->'

const Breadcrumbs = () => {
    const location = useLocation()
    let history = useHistory();
    const splittedPath = location.pathname.split('/').slice(1)
    const isSeparator = index => index === 0 ? true : false        // First separator flag
    const homeHandler = (e) => {
        e.preventDefault()
        history.push('/')
    }
    return (
        <Ul_Container>
            <Li_Container>
                <a href='' onClick={(e) => homeHandler(e)}>Home</a>
            </Li_Container>
            {SEPARATOP}
            {splittedPath.map((path, index) => (
                <Breadcrumb
                    key={index}
                    isSeparator={isSeparator(index)}
                    pathLabel={path}
                    location={location}
                />
            ))}
        </Ul_Container>
    )
}

const Li_Container = styled.li`
    display: flex;
    font-size: 16px;
`;

export const Breadcrumb = ({ location, pathLabel, isSeparator }) => {
    let history = useHistory();
    const label = pathLabel.length > 1 ?
        pathLabel[0].toUpperCase() + pathLabel.slice(1) :
        ''
    const linkHandler = (e) => {
        e.preventDefault()
        history.push(location)
    }
    return (
        <Li_Container>
            {isSeparator || SEPARATOP}
            <a href='' onClick={(e) => linkHandler(e) } >{`${label}`}</a>
        </Li_Container>
    )
}


export default Breadcrumbs
