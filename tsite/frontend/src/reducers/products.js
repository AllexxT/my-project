import { GET_PRODUCTS } from '../actions/types'

const initialState = {
    products: {
        "id": 1,
        "name": "",
        "description": "",
        "discount": false,
        "prices": [
            {
                "id": 1,
                "product": 1,
                "priceName": "",
                "price": 69
            }
        ],
        "news": [
            {
                "id": 0,
                "title": "",
                "body": "",
                "product": 1
            }
        ],
        "photos": [
            {
                "product": 1,
                "id": 1,
                "photo": {
                    "full_size": "",
                    "thumbnail": "",
                    "small_square_crop": "",
                    "medium_square_crop": ""
                }
            }
        ]
    }
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