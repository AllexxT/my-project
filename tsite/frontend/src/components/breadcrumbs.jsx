import React from 'react'
import styled from 'styled-components' // { css } 
import { useLocation, useHistory } from "react-router-dom";


const Ul_Container = styled.ul`
    display: flex;
`;
const SEPARATOP = '->'

const Breadcrumbs = () => {
    const location = useLocation()
    const history = useHistory();
    const splittedPath = location.pathname.split('/').slice(1)
    
    const linkHandler = (e) => {
        const target = e.target.innerHTML.toLowerCase()
        const locatArray = location.pathname.split('/')
        const destionation = locatArray.slice(0, locatArray.indexOf(target) + 1).join('/')
        e.preventDefault()
        history.push(destionation)
    }
    return (
        <Ul_Container>
            <Li_Container>
                <a href='' onClick={(e) => linkHandler(e)}>Home</a>
            </Li_Container>
            {SEPARATOP}
            {splittedPath.map((path, index) => (
                <Breadcrumb
                    key={index}
                    id={index}
                    pathLabel={path}
                    callback={linkHandler}
                />
            ))}
        </Ul_Container>
    )
}

const Li_Container = styled.li`
    font-size: 16px;
`;

export const Breadcrumb = ({ callback, pathLabel, id }) => {
    const label = pathLabel.length > 1 ?
        pathLabel[0].toUpperCase() + pathLabel.slice(1) : ''
    return (
        <Li_Container>
            {id === 0 || SEPARATOP}
            <a href='' onClick={(e) => callback(e)} >{`${label}`}</a>
        </Li_Container>
    )
}


export default Breadcrumbs
