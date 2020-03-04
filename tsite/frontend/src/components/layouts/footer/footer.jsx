import React from "react";
import { default as S } from "./footerStyles";
import gmap from "./gmap.png";

const Footer = () => {
  return (
    <>
      <S.FooterRow>
        <S.FooterMap>
          <img src={gmap} alt="Google map" />
        </S.FooterMap>
        <S.FooterTextRow>
          <S.FooterText>
            <S.ContactsText>
              <S.FooterTitle>Контакты</S.FooterTitle>
              <a href="mailto:trotuar-dud@ukr.net">trotuar-dud@ukr.net</a>
              <a href="tel:+380634566205">+380634566205</a>
              <a href="tel:+380634566205">+380634566205</a>
              <a href="tel:+380634566205">+380634566205</a>
              <p>c 8-00 до 16-00</p>
            </S.ContactsText>
            <S.ContactsText>
              <S.FooterTitle>Адрес</S.FooterTitle>
              <p>г. Запорожье</p>
              <p>ул. Космическая 119</p>
            </S.ContactsText>
          </S.FooterText>
        </S.FooterTextRow>
      </S.FooterRow>
      <S.Copyright>© Все права защищены 2020 г</S.Copyright>
    </>
  );
};

export default Footer;
