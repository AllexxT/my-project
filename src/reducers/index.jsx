import { combineReducers } from 'redux'
import news from './news'
import products from './products'

const rootReducer = combineReducers({ news, products });

export default rootReducer;
