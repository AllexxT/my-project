import React from "react";
import { default as S } from "./footerStyles";
// import gmap from "./gmap.png";

const Footer = () => {
  return (
    <>
      <S.FooterRow>
        <S.FooterMap>
          {/* <img src={gmap} alt="Google map" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.6643797090883!2d35.28376216223628!3d47.822455577584876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x692a9f0aff452ff6!2z0KfQnyDQlNC20LDRgSDRgtGA0L7RgtGD0LDRgNC90LDRjyDQv9C70LjRgtC60LAg0LIg0JfQsNC_0L7RgNC-0LbRjNC1!5e0!3m2!1sru!2sua!4v1588963597703!5m2!1sru!2sua"
            style={{border:"0"}}
          />
        </S.FooterMap>
        <S.FooterTextRow>
          <S.FooterText>
            <S.ContactsText>
              <S.FooterTitle>Контакты</S.FooterTitle>
              <a href="mailto:pan2404@rambler.ru">pan2404@rambler.ru</a>
              <a href="tel:+380638086001">+38 (063) 808-60-01</a>
              <a href="tel:+380675273100">+38 (067) 527-31-00</a>
              <a href="tel:+380503419001">+38 (050) 341-90-01</a>
              <p>c 8-00 до 16-00</p>
            </S.ContactsText>
            <S.ContactsText>
              <S.FooterTitle>Адрес</S.FooterTitle>
              <p>г. Запорожье</p>
              <p>пос. Кременно 40</p>
              <p>Мокрянский карьер № 2</p>
            </S.ContactsText>
          </S.FooterText>
        </S.FooterTextRow>
      </S.FooterRow>
      <S.Copyright>© Все права защищены 2020 г</S.Copyright>
    </>
  );
};

export default Footer;
