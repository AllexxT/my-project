import React from 'react'; // { useMemo } 
// import styled, { css } from 'styled-components'
import ProductCard from './productCard';
import { useSelector } from 'react-redux' // useDispatch 

const NewsContainer = () => {
    const news = useSelector(state => state.news)
    return (
            <NewsList news={news} />
    )
}

const NewsList = ({news}) => {
    const isNewsExist = news && news.length > 0;
    return (
        <div>
            {isNewsExist && news.map((current) => <News key={current.id} newsProp={current} />)}
        </div>
    )
}

const News = ({newsProp}) => {
    const { id, news_text, date, card_id } = newsProp
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

export default NewsContainer;