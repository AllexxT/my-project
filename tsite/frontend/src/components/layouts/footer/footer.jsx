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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9011.118608897961!2d35.280315132447456!3d47.81979911343967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5c64049c75d9%3A0x1885f99fb5717a4a!2z0JzQvtC60YDRj9C90YHRjNC60LjQuSDQutCw0Lwn0Y_QvdC40Lkg0LrQsNGAJ9GU0YAg4oSWMg!5e0!3m2!1sru!2sus!4v1587732663712!5m2!1sru!2sus"
            style={{border:"0"}}
          />
        </S.FooterMap>
        <S.FooterTextRow>
          <S.FooterText>
            <S.ContactsText>
              <S.FooterTitle>Контакты</S.FooterTitle>
              <a href="mailto:pan2404@rambler.ru">pan2404@rambler.ru</a>
              <a href="tel:+380638086001">+380638086001</a>
              <a href="tel:+380634566205">+380634566205</a>
              <a href="tel:+380503419001">+380503419001</a>
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
