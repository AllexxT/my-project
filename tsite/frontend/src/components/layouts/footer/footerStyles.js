import styled from 'styled-components'

const FooterRow = styled.div`
  display: flex;
  min-height: 90px;
  /* justify-content: space-around; */
  align-items: flex-start;
  margin: 35pt 0 0 0;
`;
const FooterMap = styled.div`
    position: relative;
    flex: 0 0 60%;
    height: 300px;
    overflow: hidden;
    iframe {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;
const FooterTextRow = styled.div `
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
`
const FooterText = styled.address`
  color: whitesmoke;
  font-size: 13pt;
  letter-spacing: 0.3px;
  a {
      color: whitesmoke;
      text-decoration: underline;
  }
  a:hover {
      color: #F8CA59;
  }
`;
const FooterTitle = styled.p`
  font-size: 16pt;
  font-weight: bold;
  padding: 0 0 2pt 0;
`;
const ContactsText = styled.div`
    display: flex;
    flex-flow: column;
    line-height: 20pt;
    margin: 0 0 15pt 3pt;
`;
const Copyright = styled.small`
    color: #ccc;
    display: flex;
    align-self: center;
    padding: 12px 0 15px 0;
    font-size: 10pt;
`;

const Styles = {
    FooterRow,
    FooterMap,
    FooterTextRow,
    FooterText,
    FooterTitle,
    // AddressText,
    ContactsText,
    Copyright,
}

export default Styles;