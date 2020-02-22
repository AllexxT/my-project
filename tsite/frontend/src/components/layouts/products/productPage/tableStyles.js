import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
`
const Sizes = styled.div`
    align-self: center;
    padding: 5pt 0 5pt 0;
    p{}
`
const Content__row = styled.div`
    display: flex;
    caption {
        font-weight: bold;
        font-size: 14pt;
        color: #3D3511;
    }
    table {
        border-spacing: 0;
        empty-cells: hide;
        }
    td {
        padding: 10px 20px;
        text-align: center;
        border-bottom: 1px solid #F4EEE8;
        transition: all 0.3s linear;
    }
    td:first-child {
        text-align: left;
        color: #3D3511;
        font-weight: bold;
    }
    th {
        padding: 10px 20px;
        color: #3D3511;
        border-bottom: 1px solid #F4EEE8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    td:nth-child(even) {
        background: #F6D27E;
    }
    td:nth-child(odd) {
        background: #999292;
    }
    th:nth-child(even)  {
        background: #F6D27E;
    }
    th:nth-child(odd)  {
        background: #D1C7BF;
    }
    tr:nth-child(1) td:first-child {
        border-top-left-radius: 5px;
    }
    tr:last-child td:first-child {
        border-bottom-left-radius: 5px;
    }
    tr:hover td{
        background: #D1C7BF;
        font-weight: bold;
    }
`;

const Styles = {
    Wrapper,
    Sizes,
    Content__row,
}

export default Styles;