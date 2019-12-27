import React from 'react';
import styled from 'styled-components'

const BorderR = radius => {
    return {
        left: `${radius} ${radius} 0 0`,
        right: `${radius} 0 0 ${radius}`,
        top: `0 0 ${radius} ${radius}`,
        bottom: `0 ${radius} ${radius} 0`
    }
};

const Radius = BorderR('40%')

const ListContainer = styled.div`
    flex-direction: ${
    props => props.vertical ?
        "column" :
        "row"
    };
    > * {
        &:first-child {
            border-radius: ${
            props => props.vertical ?
                Radius.left :
                Radius.right
            };
        }
        &:last-child {
            border-radius: ${
            props => props.vertical ?
                Radius.top :
                Radius.bottom
            };
        }
    }
    
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    /* border: 1px solid black; */
    width: fit-content;
    
`

const ButtonGroup = ({ children, vertical = false, ...attrs }) => {
    return (
        <ListContainer
            vertical={vertical}
            {...attrs}
        >
            {children}
        </ListContainer>
    )
}

export default ButtonGroup;