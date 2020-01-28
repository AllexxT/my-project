import React from 'react'
import NewsItemStyle from './newsItemStyles'
import { Card } from '../products/products'


const NewsItem = ({ newsItem, card }) => {
    const { id, title, body, product, created, changed } = newsItem.newsItem
    return (
        <NewsItemStyle.Container>
            <NewsItemStyle.Container__row>
                <NewsItemStyle.Card>
                    <Card card={card} />
                </NewsItemStyle.Card>
                    <NewsItemStyle.News>
                        <NewsItemStyle.News__title>{title}</NewsItemStyle.News__title>
                        <NewsItemStyle.News__time>{created}</NewsItemStyle.News__time>
                        <NewsItemStyle.News__body>{body}</NewsItemStyle.News__body>
                    </NewsItemStyle.News>
            </NewsItemStyle.Container__row>
        </NewsItemStyle.Container>
    )
}

NewsItem.defaultProps = {
    card: {
        name: 'test',
        discount: true,
        sertificate: true,
        photos: [],
        prices: [],
        id: 'test'
    }
}

export default NewsItem;