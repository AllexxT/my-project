import React, { Fragment } from 'react';
import Header from './mainPage/header'
import ProductList from './productList'
import Button from './button';
import ButtonGroup from './buttonGroup';

const App = () => {
    return (
        <Fragment>
            <Header />
            <ButtonGroup>
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
            </ButtonGroup>
            <ProductList />
        </Fragment>

    )
}

export default App;