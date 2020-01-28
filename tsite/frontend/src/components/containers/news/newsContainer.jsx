import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNews, getCard } from '../../../actions/news'
import News from '../../layouts/news/news'

const NewsContainer = () => {
    const news = useSelector(state => state.newsReducer.news)
    const cardsId = news.map(item => item.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
        dispatch(getCard(cardsId))
    }, [cardsId.length])
    
    return (
        <News news={news} />
    )
}

export default NewsContainer;