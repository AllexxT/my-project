import { GET_PRODUCTS } from '../actions/types'
import axios from 'axios'

const initialState = {
    products: [
        {
            "id": 222,
            "name": "test",
            "description": "test",
            "image": "test",
            "price": 333,
            "discount": false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log('ProductReducer')
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
}