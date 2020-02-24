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
  padding: 3px 0 0 0;
  flex-wrap: wrap;
`;
const CompanyLogo = styled.div`
  position: relative;
  top: 5pt;
  padding-left: 35pt;
  @media (max-width: 576px) {
    top: 0;
    padding-left: 0;
    padding-bottom: 3pt;
  }
`;
const CompanyTitle = styled.a`
  font-weight: bold;
  font-size: 28pt;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: whitesmoke;
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
  & img {
    max-width: 25pt;
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
  margin: 0 0 0 0;
  & img {
    width: 45pt;
  }
`;
const CompanyContactsUl = styled.ul`
  align-self: center;
  li a {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    font-size: 11.5pt;
  }
`;
// Content
const Content = styled.div`
  flex: 1 1 75vh; /* 100vh alternative for fix android chrome bug */
`;
const ContentRow = styled.div`
  display: flex;
`;
const ContentAside = styled.aside`
  flex-basis: 400px;
  max-width: 150px;
  @media (max-width:900px){
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
  ContentAside,
  ContentMain,
  Footer,
  FooterRow,
  FooterText,
}

export default Styles;