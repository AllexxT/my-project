import React from "react";
import { default as S } from "./appStyles";
import GlobalStyle from "../globalStyle";
import Menu from "./navigation/navigation";
import Breadcrumbs from "../breadcrumbs";
import BurgerMenu from "./burgerMenu";

import addressLogo from "./address.png";
import phone from "./phone2.png";

const App = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Company>
        <S.Container>
          <S.CompanyRow>
            <S.CompanyLogo>
              <S.CompanyTitle>
              ЧП <span>Джас</span> 
              </S.CompanyTitle>
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
        <S.Container>
          <Breadcrumbs /> {/* component */}
          <S.ContentRow>
            <S.ContentRow__BurgerMenu>
              <BurgerMenu />
            </S.ContentRow__BurgerMenu>
            <S.ContentAside>
              <h1>Aside</h1>
              <Menu /> {/* component */}
            </S.ContentAside>
            <S.ContentMain>{children}</S.ContentMain>
          </S.ContentRow>
        </S.Container>
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
