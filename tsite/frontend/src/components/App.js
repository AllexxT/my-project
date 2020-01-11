import React from 'react'
import Header from './layout/header'
import Form from './productcards/form'

import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>React App</h1>
                <Header />
                <Form />
            </div>
        </Provider>

    )
}

export default App;