import React, { useEffect } from 'react'
import NewsItem from '../layouts/news/newsItem'
import { useDispatch, useSelector } from 'react-redux'
import { getCard } from '../../actions/news'

export const NewsItemContainer = (newsItem) => {
    const newsState = useSelector(state => state.newsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCard(newsItem.newsItem.product))
    }, [newsState.length])
    return (
        <NewsItem newsItem={newsItem} />
    )
}

export default NewsItemContainer;