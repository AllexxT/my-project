import React from "react";
import { default as S } from "./footerStyles";
import gmap from "./gmap.png";

const Footer = () => {
  return (
    <>
      <S.FooterRow>
        <S.FooterMap>
          <img src={gmap} alt="Google map" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.6158265753943!2d35.21669081563679!3d47.788896979197176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5e946cbee433%3A0xea4decfb7b9a87d0!2z0JrQvtGB0LzQuNGH0LXRgdC60LDRjyDRg9C7LiwgMTE5LCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1sru!2sua!4v1583403166036!5m2!1sru!2sua"
            frameBorder="0"
            style={{border:"0"}}
            // allowFullScreen=""
          />
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
