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

export const getCard = (ids) => dispatch => {
    let payload = []
    ids.map(id => {
        axios.get(`api/products/${id}/`)
            .then(res => {
                payload = [...payload, res.data]
            })
            .then(() => {
                payload.length === ids.length ?
                    dispatch({
                        type: GET_CARD,
                        payload: payload
                    }) : ''
            })
            .catch(err => console.log(err))
    })

}