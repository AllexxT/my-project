import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/configureStore'
import RoutedApp from './routedApp';

ReactDOM.render((
    <Provider store={store}>
        <RoutedApp />
    </Provider>
), document.getElementById('root')
);

