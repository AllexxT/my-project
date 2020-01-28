import React from 'react'
import styled from 'styled-components'
import NewsItemContainer from '../../containers/news/newsItemContainer'

const N_Container = styled.div`
    display: flex;
    flex-direction: column;

`

const News = (news) => {
    const isNewsExist = news && news.news.length > 0
    return (
        <N_Container>
            {
                isNewsExist &&
                news.news.map(newsData => <NewsItemContainer
                    key={newsData.id}
                    newsItem={newsData}
                />)
            }
        </N_Container>
    )
}

export default News
