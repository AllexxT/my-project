import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux' // useDispatch 
import { getNews } from '../../actions/news'

const NewsContainer = () => {
    const news = useSelector(state => state.newsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews())
    }, [news.length])
    console.log(news)
    return (
        <div>
            NewsContainer
        </div>
    )
}

export default NewsContainer;