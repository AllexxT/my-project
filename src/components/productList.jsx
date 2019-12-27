import React from 'react';
import styled from 'styled-components'
import ProductCard from './productCard';

const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const ProductList = () => {
    return (
        <ProductListWrapper>
            <ProductCard
                price='300'
                description='Клей Для Плит Из Пенополистирола И Минеральной Ваты'
            />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </ProductListWrapper>
    )
}

export default ProductList;