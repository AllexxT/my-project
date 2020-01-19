import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components' // { css } 

import stock from './discount.png'
import placeholder from './placeholder.jpeg'


const PWrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
`
const PTitle = styled.div`
    margin: 10px 0 10px 20px;
    font-size: 26px;
    line-height: 16px;
`
const PContent = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    /* &:after{
        content: "";
        flex:auto;
    } */
`

const Products = ({ data }) => {
    const isProductsExist = data && data.products.length > 0 //Object.keys(data).length
    return (
        <PWrapper>
            <PTitle>Тротуарная Плитка</PTitle>
            <PContent>
                {
                    isProductsExist &&
                    data.products.map(product => <Card key={product.id} card={product} />)
                }
            </PContent>
        </PWrapper>
    )
}
const slide = keyframes`
    from {
        opacity: 0;
        top: -20px;
    }

    to {
        opacity: 1;
        top: 0px;
    }
`
const C_Wrapper = styled.div`
    position: relative;
    min-height: 325px;
    width: 230px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: whitesmoke;
    margin: 15px 15px 15px 15px;
    justify-content: space-between;
    box-shadow: 0px 5px 10px gray;
    animation: ${slide} 0.2s linear;
`
const C_Content = styled.div`
    padding: 15px 15px 0 15px;
    margin: 0 0 15px 0;
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const C_ImageBlock = styled.div`
    position: relative;
`;
const C_Link = styled.a`
    display: flex;
    justify-content: center;
    cursor: pointer;
    max-height: 150px;

`;
const C_LinkName = styled(C_Link)`
    justify-content: flex-start;
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 15px 0 15px;
    font-weight: bold;
    color: #323232;
    transition: color 0.2s linear;
    align-self: flex-start;
    flex: 1 1 auto;
    &:hover {
        color: #b28c1a;
    }
`;
const C_Image = styled.img`
    max-width: 100%;
`;
const C_StockImg = styled.img`
    position: absolute;
    top: -5px;
    left: -7px;
`;
const C_OldPrice = styled.div`
    visibility: ${props => props.oldPrice ? "visible" : "hidden"};
    text-decoration: line-through;
    font-size: 15px;
    color: gray;
    vertical-align: bottom;
`;
const C_Price = styled.div`
    font-size: 21px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0 0 10px 0;
    font-weight: bold;
    color: #323232;
`;
const C_Button = styled.div`
    display: flex;
    justify-content: center;
    line-height: 48px;
    background: #D3A52E;
    transition: background 0.2s linear;
    &:hover {
        background: #FDC61D;
    }
    & a {
        height: 100%;
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        color: #2b2b2b;

        transition: color 0.2s;
        &:hover {
            color: #2b2b2b;
        }
    }
`;

const Card = ({ card }) => {
    const { name, discount, photos, prices, id } = card
    const lowerPrice = () => {
        if (prices.length > 0) {
            return prices.reduce((lower, curr) => {
                return lower > curr.price ? curr.price : lower
            }, 9999)
        }
    }
    const availablePrice = lowerPrice() ? `от ${lowerPrice()} грн.` : 'нет информации'
    const availablePhoto = photos.length ? photos[0].photo.medium_square_crop : placeholder
    return (
        <C_Wrapper>
            <C_Content>
                <C_ImageBlock>
                    <C_Link href=''>
                        <C_Image src={availablePhoto} alt='Card image' />
                    </C_Link>
                    {discount && <C_StockImg src={stock} alt='Discount' />}
                </C_ImageBlock>
                <C_LinkName href=''>{name}</C_LinkName>
                <C_OldPrice oldPrice={id % 2 == 0 ? true : false}>old price</C_OldPrice>
                <C_Price>{availablePrice} </C_Price>
                <C_Button>
                    <C_Link>Подробнее</C_Link>
                </C_Button>
            </C_Content>
        </C_Wrapper>
    )
}

export default Products
