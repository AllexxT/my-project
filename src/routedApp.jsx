import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import App from './app';
import NewsContainer from './news';

const Exposition = () => {
    return (
        <h1>Our works</h1>
    )
}
const Products = () => {
    return (
        <h1>Hello Products content page</h1>
    )
}
const Services = () => {
    return (
        <h1>Hello Services content page</h1>
    )
}
const Error = () => {
    return (
        <h1>Error</h1>
    )
}

const RoutedApp = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={NewsContainer} />
                <Route path='/exposition' component={Exposition} />
                <Route path='/products' component={Products} />
                <Route path='/services' component={Services} />
                <Route path='/*' component={Error} />
            </Switch>
        </App>
    </BrowserRouter>
    )

export default RoutedApp;