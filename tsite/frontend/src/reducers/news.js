import { GET_NEWS, GET_CARD } from '../actions/types'

const initialState = {
    news: [],
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
                cards: action.payload
            }
        default:
            return state;
    }
}