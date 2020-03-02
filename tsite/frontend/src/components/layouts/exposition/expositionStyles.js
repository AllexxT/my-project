import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 5pt;
`
const PageTitle = styled.div`
  position: relative;
  margin: 10px 0 20px 0;
  padding: 0 0 20px;
  position: relative;
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  color: #333;

  &:before {
    content: '';
    position: absolute;
    width: 75px;
    height: 10px;
    display: block;
    bottom: 0;
    left: 0;
    background-color: #F3CB55;
  }
`

const CategoryWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin-bottom: 10pt;
`
const Title = styled.div`
  margin: 10px 0;
  font-size: 24px;
`
const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 0 25%;
  margin: 5pt;
  align-items: center;
  /* filter: drop-shadow(0px 5px 10px gray); */
  &>div:first-child {
    box-shadow: 0px 5px 10px gray;
  }
`
const ItemDescription = styled.div`
  width: 80%;
  text-align:center;
  background: whitesmoke;
  padding: 7pt 0 3pt 0;
  box-shadow: 0px 2px 5px gray;
  /* overflow: scroll; for mobile */
  p {

  }
`

const Styles = {
  PageWrapper,
  PageTitle,
  CategoryWrapper,
  Title,
  GalleryWrapper,
  ItemWrapper,
  ItemDescription,
}

export default Styles;