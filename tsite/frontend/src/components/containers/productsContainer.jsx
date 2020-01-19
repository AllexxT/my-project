import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' // useDispatch 
import { getProducts } from '../../actions/products'
import Products from '../layouts/products/products'


const ProductsContainer = () => {
    const products = useSelector(state => state.productsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [products.length])
    return (
            <Products data={products} />
    )

}


export default ProductsContainer;