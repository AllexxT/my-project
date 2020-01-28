import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import App from './App';
import NewsContainer from './containers/newsContainer';
import ProductsContainer from './containers/productsContainer';

const Exposition = () => {
    return (
        <h1>Our works</h1>
    )
}

const Services = () => {
    return (
        <h1>Hello Services content page</h1>
    )
}
const Services_b = () => {
    return (
        <h1>BREADCRUMBS TEST PAGE</h1>
    )
}
const Services_c = () => {
    return (
        <h1>BREADCRUMBS TEST PAGE</h1>
    )
}
const Error = () => {
    return (
        <h1>Error: 404<br /> Page Not Found</h1>
    )
}

const RoutedApp = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={NewsContainer} />
                <Route path='/exposition' component={Exposition} />
                <Route path='/products' component={ProductsContainer} />
                <Route exact path='/services/test/more' component={Services_c} />
                <Route exact path='/services/test' component={Services_b} />
                <Route exact path='/services' component={Services} />
                <Route path='/*' component={Error} />
            </Switch>
        </App>
    </BrowserRouter>
    )

export default RoutedApp;