import styled from "styled-components";

// All
const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
`;
// Header

const Company = styled.div`
  background-color: rgba(56, 56, 68, 0.9);
  box-shadow: 0px 5px 10px gray;
`;
const CompanyRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  flex-wrap: wrap;
`;
const CompanyLogo = styled.div``;
const CompanyTitle = styled.p`
  text-transform: uppercase;
  font-size: 2.1em;
  line-height: -10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  & span {
    color: #f5cb55;
  }
`;
const CompanyAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CompanyAddressImg = styled.div`
  flex: 0 0 70px;
  & img {
    max-width: 70px;
  }
`;
const CompanyAddressTitle = styled.p`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  color: #efede3;
  text-align: center;
`;
const CompanyContacts = styled.div`
  display: flex;
`;
const CompanyContactsImg = styled.div`
  align-self: center;
  margin: 0 5px 0 0;
  & img {
    width: 70px;
  }
`;
const CompanyContactsUl = styled.ul`
  align-self: center;
  li a {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    font-size: 1.3em;
  }
`;
// Content
const Content = styled.div`
  flex: 1 1 auto;
`;
const ContentRow = styled.div`
  display: flex;
`;
const ContentRow__BurgerMenu = styled.div `
    @media (min-width:815px){
        display: none;
    }
`
const ContentAside = styled.aside`
  flex-basis: 400px;
  max-width: 150px;
  @media (max-width:815px){
    display: none;
  }
`;
const ContentMain = styled.main`
  flex-grow: 1;
`;
// Footer
const Footer = styled.div`
  background-color: rgba(56, 56, 68, 0.9);
`;
const FooterRow = styled.div`
  display: flex;
  height: 90px;
  justify-content: center;
  align-items: center;
`;
const FooterText = styled.div`
  color: yellow;
  font-size: 12px;
  letter-spacing: 0.3px;
`;

const Styles = {
    Wrapper,
    Container,
    Company,
    CompanyRow,
    CompanyLogo,
    CompanyTitle,
    CompanyAddress,
    CompanyAddressImg,
    CompanyAddressTitle,
    CompanyContacts,
    CompanyContactsImg,
    CompanyContactsUl,
    Content,
    ContentRow,
    ContentRow__BurgerMenu,
    ContentAside,
    ContentMain,
    Footer,
    FooterRow,
    FooterText,
}

export default Styles;