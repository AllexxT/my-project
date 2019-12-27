import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    color: white;
    background: sienna;
    width: 85px;
    height: 35px;
    :focus {
        outline: none;
    }
    :hover {
        transition: all .2s ease-in-out;
        transform: scale(1.1);
    }
`

const Button = ({ children='Button', onClick=()=>{}, ...attrs }) => {
    return (
        <StyledButton
            onClick={onClick}
            {...attrs}
        >
            {children}
        </StyledButton>
    )
}

export default Button;