import React from 'react'
import { useSelector } from 'react-redux' // useDispatch 

const ProductsContainer = () => {
    const allProducts = useSelector(state => state.products)
    return (
        <ProductList productList={allProducts} />
    )

}

const ProductList = ({ productList }) => {
    const isNewsProducts = productList && productList.length > 0
    return (
        <div>
            {isNewsProducts && productList.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export const ProductCard = ({ product }) => {
    const {name, price, image, discount} = product
    console.log(product)
    return (
        <div className="product">
            <div className="images">
                <img style={{width: '100px'}} src={image} alt='product' />
                {discount && <img src='' alt='акция' />}
            </div>
            <div className="name">{name}</div>
            <div>{price}</div>
            <a href="/" className="button">Подробнее</a>
        </div>
    )
}

export default ProductsContainer;