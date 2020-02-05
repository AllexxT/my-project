import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' // useDispatch 
import { getProducts } from '../../../actions/products'
import Products from '../../layouts/products/products'


const ProductsContainer = (actionArg) => {
    const products = useSelector(state => state.productsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts(actionArg))
    }, [products.length])
    console.log(location)
    return (
        <Products data={products} />
    )
}


export default ProductsContainer;