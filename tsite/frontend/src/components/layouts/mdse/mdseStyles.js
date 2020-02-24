import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    max-width: 1060px;
    justify-content: center;
`;
const CategoryItem = styled.div`
    display: flex;
    position: relative;
    background: 1px solid red;
    margin: 0 7pt 15pt 7pt;
    flex:1 1 300px;
    height: 250px;
    justify-content: center;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 5px 5px 15px gray;
    transition: all 0.3s ease-out;
    cursor: pointer;
    &:hover {
        box-shadow: none;
        p {
            margin: 2pt 0 2pt 0;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        font-weight: bold;
        font-size: 14pt;
        opacity: 0.8;
        transition: all 0.2s;
        margin: 3pt 0 3pt 0;
    }
`;
const Label = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 5%;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    border-radius: 5px;
`;

const Styles = {
    Wrapper,
    CategoryItem,
    Label,
};

export default Styles;