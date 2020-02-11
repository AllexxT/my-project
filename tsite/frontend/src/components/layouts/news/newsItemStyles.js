import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin: 10px 0 10px 0;
    max-width: 1060px;
`
const Container__row = styled.div`
    background-color: #f1f0ef;
    display: flex;
    width: 100%;
    @media (max-width: 300px) {
        flex-direction: column;
    }
`
const Card = styled.div`
    margin: 5px;
`
const News = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1px;
    /* word-break: break-all;  */  /*use this*/
    /* word-wrap: break-word; */
    margin: 25px;
`
const News__title = styled.div`
    font-size: 21px;
`
const News__body = styled.div`
    font-size: 16px;
`
const News__time = styled.time`
    color: #474651;
    margin: 5px 0 5px 10px;
    align-self: flex-end;
`
const NewsItemStyle = {
    Container,
    Container__row,
    Card,
    News,
    News__title,
    News__body,
    News__time,
};

export default NewsItemStyle;