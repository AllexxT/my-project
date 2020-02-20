import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
`
const MainFrame = styled.div`

`
const MainF__row = styled.div`
    display: flex;
    justify-content: center;

`
const MainF__left = styled.div`
    position: absolute;
    display: none;
`
const MainF__screen = styled.div`
        /* @media (max-width: 768px){
            justify-items: center;
        } */
`
const MainF__right = styled.div`
    position: absolute;
    display: none;
`
const DotLine = styled.div`
    display: flex;
`
const ThumbsFrame = styled.div`
`

const Glr = {
    Wrapper,
    MainFrame,
    MainF__row,
    MainF__left,
    MainF__screen,
    MainF__right,
    DotLine,
    ThumbsFrame,
}

export default Glr;