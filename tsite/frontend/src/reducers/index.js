import { combineReducers } from 'redux'
import productsReducer from './products'
import productReducer from './product'
import newsReducer from './news'
import expositionReducer from './exposition'
import authReducer from './auth'

export default combineReducers({
    productsReducer,
    productReducer,
    newsReducer,
    expositionReducer,
    authReducer,
})