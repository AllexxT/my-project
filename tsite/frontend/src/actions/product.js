import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from './types'
import axios from 'axios'

export const getProduct = (id) => dispatch => {
    dispatch({
        type: GET_PRODUCT_REQUEST,
    })
    axios.get(`/api/products/${id}/`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: err
            })
        })
}