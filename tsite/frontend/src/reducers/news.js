import { GET_NEWS, GET_CARD } from '../actions/types'

const initialState = {
    news: {
        "id": 0,
        "title": "initial",
        "body": "initial",
        "product": "initial",
        "changed": "2020-01-26",
        "created": "2020-01-26"
    },
    cards: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.payload
            };
        case GET_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            }
        default:
            return state;
    }
}