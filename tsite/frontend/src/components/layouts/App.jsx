import React from "react";
import { default as S } from "./appStyles";
import GlobalStyle from "../globalStyle";
import Menu from "./navigation/navigation";
import Breadcrumbs from "../breadcrumbs";
import BurgerMenu from "./navigation/burgerMenu/burgerMenu";

import addressLogo from "./address.png";
import phone from "./phone2.png";

const Logo = ({ children }) => {
  return <S.CompanyTitle href="/">{children}</S.CompanyTitle>;
};

const App = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Company>
        <S.Container>
          <S.CompanyRow>
            <BurgerMenu />
            <S.CompanyLogo>
              <Logo>
                ЧП <span>Джас</span>
              </Logo>
            </S.CompanyLogo>
            <S.CompanyAddress>
              <S.CompanyAddressImg>
                <img src={addressLogo} alt="address" />
              </S.CompanyAddressImg>
              <S.CompanyAddressTitle>
                г. Запорожье, ул Космическая 119
              </S.CompanyAddressTitle>
            </S.CompanyAddress>
            <S.CompanyContacts>
              <S.CompanyContactsImg>
                <img src={phone} alt="contacts" />
              </S.CompanyContactsImg>
              <S.CompanyContactsUl>
                <li>
                  <a href="tel:+380634566205">+380634566205</a>
                </li>
                <li>
                  <a href="tel:+380634566205">+380634566205</a>
                </li>
                <li>
                  <a href="tel:+380634566205">+380634566205</a>
                </li>
              </S.CompanyContactsUl>
            </S.CompanyContacts>
          </S.CompanyRow>
        </S.Container>
      </S.Company>
      <S.Content>
        <S.ContentContainer>
          <Breadcrumbs /> {/* component */}
          <S.ContentRow>
            <S.ContentAside>
              <Menu /> {/* component */}
            </S.ContentAside>
            <S.ContentMain>{children}</S.ContentMain>
          </S.ContentRow>
        </S.ContentContainer>
      </S.Content>
      <S.Footer>
        <S.Container>
          <S.FooterRow>
            <S.FooterText>Footer of the site</S.FooterText>
          </S.FooterRow>
        </S.Container>
      </S.Footer>
      <GlobalStyle /> {/* Styles */}
    </S.Wrapper>
  );
};

export default App;
