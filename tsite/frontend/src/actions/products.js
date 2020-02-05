import { GET_PRODUCTS_REQUEST } from './types'
import { GET_PRODUCTS_SUCCESS } from './types'
import axios from 'axios'


export const getProducts = (filter) => dispatch => {
    dispatch({
        type: GET_PRODUCTS_REQUEST,
    })
    axios.get(`/api/products/?page=${filter}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => console.log(err))
}