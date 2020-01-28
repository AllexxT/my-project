import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux' 
import { getNews} from '../../actions/news'
import News from '../layouts/news/news'

const NewsContainer = () => {
    const news = useSelector(state => state.newsReducer)
    // console.log(news.news)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews())
    }, [news.length])

    // const isNewsExist = news && news.news.length > 0
    // const productIds = []
    // if (isNewsExist) {
    //     news.news.map(item => {
    //         productIds.push(item.product)
    //     })
    // }
    // console.log(news.cards)
    return (
        <News data={news} cards={news.cards}/>
    )
}

export default NewsContainer;