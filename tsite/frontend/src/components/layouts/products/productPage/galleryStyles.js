import styled from "styled-components";

const Wrapper = styled.div`

`
const MainFrame = styled.div`

`
const MainF__row = styled.div`
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px){
        justify-content: center;
    }
`


const Glr = {
    Wrapper,
    MainFrame,
    MainF__row,
}

export default Glr;