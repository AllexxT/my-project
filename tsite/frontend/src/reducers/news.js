import { GET_NEWS } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            console.log('News Reducer')
            return {
                ...state,
                news: action.payload
            };
        default:
            return state;
    }
}