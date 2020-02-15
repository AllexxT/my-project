import { combineReducers } from 'redux'
import productsReducer from './products'
import productReducer from './product'
import newsReducer from './news'

export default combineReducers({
    productsReducer,
    productReducer,
    newsReducer,
})