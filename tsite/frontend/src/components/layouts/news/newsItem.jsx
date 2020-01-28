import React from 'react'
import NewsItemStyle from './newsItemStyles'
import { Card } from '../products/products'


const NewsItem = ({ newsItem }) => {
    const { id, title, body, product, created, changed } = newsItem.newsItem
    const test = {
        name: 'test',
        discount: true,
        sertificate: true,
        photos: [],
        prices: [],
        id: 'test'
    }
    return (
        <NewsItemStyle.Container>
            <NewsItemStyle.Container__row>
                <div className="card">
                    <Card card={newsItem.crd || test} />
                </div>
                <div className="newsContainer">
                    <div className="title">{title}</div>
                    <div className="body">{body}</div>
                    <div className="date">{created}</div>
                </div>
            </NewsItemStyle.Container__row>
        </NewsItemStyle.Container>
    )
}

export default NewsItem;