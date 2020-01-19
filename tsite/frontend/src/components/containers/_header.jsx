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
        </div>
    )
}
// RENDER WITH MAP STATE ASYNC 
if (this.props.data) {
    var commentNodes = this.props.data.map(function (comment) {
        return (
            <div>
                <h1>{comment.author}</h1>
            </div>
        );
    });
}



export default Header;

// const mapStateToProps = state => ({
    // products: state.products.products,
// })

// export default connect(mapStateToProps, { getProducts })(Header);