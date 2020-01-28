import React from 'react'
import styled from 'styled-components'
import { NewsItemContainer } from '../../containers/newsItemContainer'

const N_Container = styled.div`
    display: flex;
    flex-direction: column;
`

const News = ({ data, cards }) => {
    const isNewsExist = data && data.news.length > 0
    const card = (id) => {
        return data.cards.filter(card=>card.id === id)
    }
    return (
        <N_Container>
            {
                isNewsExist &&
                data.news.map(newsData => {
                    return <NewsItemContainer
                        key={newsData.id}
                        newsItem={newsData}
                        crd={card(newsData.product)[0]}
                        />
                })
            }
        </N_Container>
    )
}

export default News
