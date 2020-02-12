import styled, { css } from "styled-components";



const Nav__Li = styled.li`
  position: relative;
  display: block;
  padding: 4px 0 4px 0;
  margin: 0 5px 0 0;
  & a {
    color: black;
    display: block;
    ${props =>
    props.match &&
    css`
        color: #90781D;
      `}
  }
  /* & a:hover + ul{
    display: block;
  } */
  ${props =>
    props.submenu &&
    css`
        /* place for styling submenu buttons */
        padding: 3px 2.2rem 3px 0;
      `}
`;

const Nav__Ul_Submenu = styled.ul`
  padding-left: 15px;
  display: relative;
`
const Nav__Submenu_icon = styled.div`
  position: absolute;
  top: -2px;
  left: 75%;
  font-size: 25px;
  opacity: 0.5;
  &:hover + ul{
    display: block;
  }
`

const PopUpMenu__board = styled.ul`
    position: absolute;
    background: whitesmoke;
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
    & a:hover{
      color: rgb(144, 120, 29);
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
