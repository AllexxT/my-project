import React, { useEffect, useState, useMemo, useCallback } from 'react'
import axios from 'axios'


const Header = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get(`${location.href}api/products/`)
            .then(res => {
                const data = res.data
                setCards(crd => data)
            })
    }, [cards.length])

    const handler = () => {
        console.log(cards);
        forceUpdate
    }
    return (
        <div>
            <p>Hello from header </p>
            <button onClick={handler}>refresh</button>
        </div>
    )
}

const Card = ({ id, name, description, price, discount }) => {
    console.log(id)
    return (
        <div>
            <ul>
                <li>Id - {id}</li>
                <li>Name - {name}</li>
                <li>Description - {description}</li>
                <li>Price - {price}</li>
                {discount && <li>Discount is here!</li>}
            </ul>
        </div>
    )
}

export default Header;