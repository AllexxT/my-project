import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import { 
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'

const Home = () => {
    return (
        <h1>Hello Home content page</h1>
    )
}
const Contacts = () => {
    return (
        <h1>Hello Contacts content page</h1>
    )
}
const Products = () => {
    return (
        <h1>Hello Products content page</h1>
    )
}
const Error = () => {
    return (
        <h1>Error</h1>
    )
}

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/products' component={Products} />
                <Route path='/*' component={Error} />
            </Switch>
        </App>
    </BrowserRouter>
    ), document.getElementById('root')
);

