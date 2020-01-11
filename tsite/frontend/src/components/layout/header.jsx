import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, connect, useStore } from 'react-redux'
import { getProducts } from '../../actions/products'

const Header = () => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [products.length])
    console.log(products)
    return (
        <div>
            <p>Hello from header </p>
            <button onClick={()=>dispatch(getProducts())}>Update</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Descr</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.image}</td>
                            <td>{product.price}</td>
                            <td>{product.discount}</td>
                            <td><button /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Header;

// const mapStateToProps = state => ({
    // products: state.products.products,
// })

// export default connect(mapStateToProps, { getProducts })(Header);