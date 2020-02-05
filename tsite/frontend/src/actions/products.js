import { GET_PRODUCTS } from './types'
import axios from 'axios'


export const getProducts = () => dispatch => {
    axios.get('/api/products/?page=sett')
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}