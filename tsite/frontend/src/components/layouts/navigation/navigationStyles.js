import styled, { css } from "styled-components";



const Nav__Li = styled.li`
  position: relative;
  display: block;
  margin: 0 5px 0 0;
  background: #E4644B;
  border-bottom: 1px solid rgba(30, 29, 28, 0.3);
  box-shadow: 0px 5px 10px gray;
  & a {
    position: relative;
    color: whitesmoke;
    font-weight: bold;
    display: block;
    padding: 5pt 0 5pt 7pt;
    ${props =>
    props.match &&
    css`
        color: black;
      `}
  }
  ${props =>
    props.submenu &&
    css`
        /* place for styling submenu buttons */
        background: gray;
      `}
`;

const Nav__Ul_Submenu = styled.ul`
  position: relative;
  a {
    padding: 5pt 10pt 5pt 5pt;
    flex: 1 0 100%;
    font-size: 9pt;
    line-height: 15px;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
  a:hover + span + ul {
    display: block;
  }
  a:hover + span {
    background: #E4644B;
    opacity: 1;
  }

`

const Nav__Submenu_icon = styled.span`
  display: inline-block;
  align-self: stretch;
  flex:0 0 10px;
  order: -1;
  opacity: 0;
  /* &:hover + ul{
    display: block;
  } */
`

const PopUpMenu__board = styled.ul`
    position: absolute;
    background: rgb(145, 145, 145);
    top: -5px;
    left: 85%;
    display: none;
    z-index: 10;
    padding: 5px;
    box-shadow: 0px 5px 10px gray;
    &:hover{
      display: block;
    }
`
const PopUpMenu__Link = styled.li`
    &:hover {
      background: gray;
    }
    a {
      color: black;
    }
    & a:hover{
      color: black;
    }
`

const NavStyle = {
  Nav__Li,
  Nav__Ul_Submenu,
  Nav__Submenu_icon,
  PopUpMenu__board,
  PopUpMenu__Link
}
export default NavStyle;
