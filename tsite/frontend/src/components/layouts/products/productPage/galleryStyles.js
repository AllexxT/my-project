import styled from "styled-components";

const Wrapper = styled.div`

`
const MainFrame = styled.div`

`
const MainF__row = styled.div`
    display: flex;
    justify-content: flex-start;
    &>div {
        padding: 6px 6px 6px 0;
        box-shadow: 0px 5px 10px gray;
        background-color: rgba(255, 255, 255, 0.4);
    }
    @media (max-width: 768px){
        justify-content: center;
        margin-bottom: 10px;
    }
`


const Glr = {
    Wrapper,
    MainFrame,
    MainF__row,
}

export default Glr;