import { GET_NEWS, GET_CARD } from './types'
import axios from 'axios'


export const getNews = () => dispatch => {
    axios.get('api/news/')
        .then(res => {
            dispatch({
                type: GET_NEWS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getCard = (id) => dispatch => {
    axios.get(`api/products/${id}/`)
        .then(res => {
            dispatch({
                type: GET_CARD,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}