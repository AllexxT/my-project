import React from 'react';
import styled from 'styled-components'
import prodImg from './product.jpg'


const ProductImageContainer = styled.div`
    display: flex;
    width: 150px;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 10px;
    ::before {
        content: attr(data-text);
        position: absolute;
        background: linear-gradient(
            135deg, 
            rgba(180,221,180,1) 0%,
            rgba(131,199,131,1) 3%,
            rgba(82,177,82,1) 14%,
            rgba(82,177,82,1) 14%,
            rgba(0,138,0,1) 37%,
            rgba(0,87,0,1) 85%,
            rgba(0,36,0,1) 100%);
        color: white;
        font-size: 1.5em;
        width: 43px;
        height: 55px;
        right: -7px;
        top: -5px;
        text-align: center;
    }
`
const ProductImageWrapper = styled.div`
    margin: .5em 10px .5em 8px;
	overflow: hidden; /* this is important */
    border-bottom:3px solid #ccc;
    width: 130px;
`
const ProductImage = styled.img`
    width: 260px;
    margin:-30px -160px -40px -77px;
    image-rendering: optimizeQuality;

`
const ProductDescriprionContainer = styled.div`
    margin: -5px 5px 5px;
`

const ProductCard = ({ description, price=69, image=prodImg }) => {
    return (
        <ProductImageContainer data-text={`${price} грн`}>
            <ProductImageWrapper>
                <ProductImage src={image} alt='product' />
            </ProductImageWrapper>
            <ProductDescriprionContainer>
                <span>
                    {description}
                </span>
            </ProductDescriprionContainer>
        </ProductImageContainer>
    )
}

ProductCard.defaultProps = {
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
}

export default ProductCard;