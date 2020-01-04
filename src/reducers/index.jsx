import { combineReducers } from 'redux'
import news from './news'
import test from './test'

const rootReducer = combineReducers({ news, test });

export default rootReducer;