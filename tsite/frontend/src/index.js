import React from 'react'
import RoutedApp from './components/routedApp'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'


ReactDom.render(
    (
        <Provider store={store}>
            <RoutedApp />
        </Provider>
    ), document.getElementById('root')
)
