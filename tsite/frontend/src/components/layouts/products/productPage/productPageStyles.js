import styled from "styled-components";

const Wrapper = styled.div`

`;
const Gallery_Table__row = styled.div`
    display: flex;
    @media (max-width: 768px){
        display: block;
    }
`
const GalleryWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 70%;
    
    @media (max-width: 768px){
        flex: 1 1 auto;
        justify-items: center;
        width: 100%;
    }
`
const TableWrapper = styled.div`
`
const TitleWrapper = styled.div`
`;
const Title__row = styled.div`
    display: flex;
    justify-content: center;
    h1 {
        font-size: 24pt;
        color: rgb(35, 32, 32);
        line-height:3rem;
    }
`;
const DescriptionWrapper = styled.div `
    max-width: 1060px;
`

const PP = {
    Wrapper,
    Gallery_Table__row,
    GalleryWrapper,
    TableWrapper,
    TitleWrapper,
    Title__row,
    DescriptionWrapper,
}

export default PP;