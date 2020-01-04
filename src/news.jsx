import React from 'react';
// import styled, { css } from 'styled-components'
import ProductCard from './productCard';
import { connect } from 'react-redux'
import { addNews } from "./actions/actionCreator";






const NewsList = (props) => {

    const { news } = props;
    const isNewsExist = news && news.length > 0;
    return (
        <div>
            { isNewsExist && news.map((current) => <News key={current.id} newsProp={current} />) }
        </div>
    )
}



const News = (current) => {
    const { id, news_text, date, card_id } = current.newsProp
    return (
        <div style={{ display: 'flex' }}>
            <ProductCard />
            <ul>
                <li>id is {id}</li>
                <li>{news_text}</li>
                <li>date is {date}</li>
                <li>{card_id}</li>
            </ul>
        </div>
    )
}

export default connect(state => ({
    news: state.news,
}), { addNews })(NewsList);