import { combineReducers } from 'redux'
import productsReducer from './products'
import newsReducer from './news'

export default combineReducers({
    productsReducer,
    newsReducer,
})