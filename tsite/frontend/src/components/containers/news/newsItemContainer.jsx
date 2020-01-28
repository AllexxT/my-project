import React from 'react'
import NewsItem from '../../layouts/news/newsItem'
import { useSelector } from 'react-redux'

export const NewsItemContainer = (newsItem) => { 

    const card = useSelector(
        state => state.newsReducer.cards.filter(
            card => newsItem.newsItem.product === card.id
        )[0]
    )
    return (
        <NewsItem newsItem={newsItem} card={card} />
    )
}

export default NewsItemContainer;