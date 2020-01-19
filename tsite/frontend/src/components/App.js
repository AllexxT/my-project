import React from 'react';
import styled from 'styled-components'
import GlobalStyle from './globalStyle';
import Menu from './layouts/navigation';
import Breadcrumbs from './breadcrumbs'

import addressLogo from './address.png'
import phone from './phone2.png'

// All
const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    max-width: 1210px;
    margin: 0 auto;
`
// Header

const Company = styled.div`
    background-color: rgba(56, 56, 68, 0.9);
    box-shadow: 0px 5px 10px gray;

`
const CompanyRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    flex-wrap: wrap;
`
const CompanyLogo = styled.div`
`
const CompanyTitle = styled.p`
    text-transform: uppercase;
    font-size: 2.1em;
    line-height: -10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    & span {
        color: #f5cb55;
    }
`
const CompanyAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CompanyAddressImg = styled.div`
    flex: 0 0 70px;
    & img {
        max-width: 70px;
    }
`
const CompanyAddressTitle = styled.p`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.5em;
    color: #EFEDE3;
    text-align: center;
`
const CompanyContacts = styled.div`
    display: flex;
`
const CompanyContactsImg = styled.div`
    align-self: center;
    margin: 0 5px 0 0;
    & img {
        width: 70px;
    }
`
const CompanyContactsUl = styled.ul`
    align-self: center;
    li a {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
        font-size: 1.3em;
    }
`
// Content
const Content = styled.div`
    flex: 1 1 auto;
`
const ContentRow = styled.div`
    display: flex;
`
const ContentAside = styled.aside`
    flex-basis: 400px;
    max-width: 150px;
`
const ContentMain = styled.main`
    flex-grow: 1;
`
// Footer
const Footer = styled.div`
    background-color: rgba(56, 56, 68, 0.9);
`
const FooterRow = styled.div`
    display: flex;
    height: 65px;
    justify-content: center;
    align-items: center;
`
const FooterText = styled.div`
    color: yellow;
    font-size: 12px;
    letter-spacing: 0.3px;
`


const App = ({ children }) => {
    return (
        <Wrapper>
            <Company>
                <Container>
                    <CompanyRow>
                        <CompanyLogo>
                            <CompanyTitle><span>Тротуар</span> Буд</CompanyTitle>
                        </CompanyLogo>
                        <CompanyAddress>
                            <CompanyAddressImg>
                                <img src={addressLogo} alt='address' />
                            </CompanyAddressImg>
                            <CompanyAddressTitle>г. Запорожье, ул Космическая 119</CompanyAddressTitle>
                        </CompanyAddress>
                        <CompanyContacts>
                            <CompanyContactsImg>
                                <img src={phone} alt="contacts" />
                            </CompanyContactsImg>
                            <CompanyContactsUl>
                                <li><a href="tel:+380634566205">+380634566205</a></li>
                                <li><a href="tel:+380634566205">+380634566205</a></li>
                                <li><a href="tel:+380634566205">+380634566205</a></li>
                            </CompanyContactsUl>
                        </CompanyContacts>
                    </CompanyRow>
                </Container>
            </Company>
            <Content>
                <Container>
                    <Breadcrumbs />   {/* component */}
                    <ContentRow>
                        <ContentAside>
                            <h1>Aside</h1>
                            <Menu />
                        </ContentAside>
                        <ContentMain>
                            {children}
                        </ContentMain>
                    </ContentRow>
                </Container>
            </Content>
            <Footer>
                <Container>
                    <FooterRow>
                        <FooterText>Footer of the site</FooterText>
                    </FooterRow>
                </Container>
            </Footer>
            <GlobalStyle />
        </Wrapper>
    )
}

export default App;