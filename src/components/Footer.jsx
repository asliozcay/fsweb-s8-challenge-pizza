import styled from "styled-components";
import logoFooter from "../../images/iteration-2-images/footer/logo-footer.svg";
import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import insta1 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta6 from "../../images/iteration-2-images/footer/insta/li-5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const Footer = styled.footer`
    background-color: #1a1a1a;
    width: 100%;
    height: auto;
    font-family: "Barlow", sans-serif;
    color: #ffffff;
    font-size: 1.125rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;
  const Div = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 768px) {
      width: 85%;
      flex-direction: column;
      gap: 2rem;
      padding-bottom: 2rem;
    }
  `;
  const ContactDiv = styled.div`
    width: 33%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      align-items: start;
      text-align: start;
    }
  `;
  const IconDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: start;
    gap: 1rem;
    padding: 1.25rem 0;

    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `;
  const Logo = styled.img`
    padding: 3rem 0;
    padding-top: 5rem;
  `;
  const TextDiv = styled.div`
    gap: 3rem;
  `;
  const Text = styled.p`
    line-height: 2rem;
  `;

  const MenuText = styled(Text)`
    padding-top: 1rem;
  `;

  const MenuDiv = styled.div`
    width: 33%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
      align-items: start;
      text-align: start;
    }
  `;

  const Title = styled(Text)`
    font-size: 1.5rem;
    font-weight: 500;
  `;
  const ImgDiv = styled.div`
    padding-top: 3rem;
    width: 33%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const SocialDiv = styled(ContactDiv)`
    flex: 1;
    gap: 1rem;
    row-gap: 1rem;
  `;
  const InstaImg = styled.img`
    width: 105px;
    height: 105px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 90px;
      height: 90px;
    }
  `;
  const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    width: 50%;

    @media (max-width: 768px) {
      width: 85%;
    }
  `;
  const FooterText = styled.p`
    font-size: 1rem;
  `;
  const Line = styled.hr`
    opacity: 15%;
    margin: 2rem 0;
  `;

  return (
    <Footer>
      <Div>
        <ContactDiv>
          <Logo src={logoFooter} alt="footer-logo" />
          <IconDiv>
            <img src={icon1} alt="icon1" />
            <Text>341 Londonderry Road, Istanbul Türkiye</Text>
          </IconDiv>
          <IconDiv>
            <img src={icon2} alt="icon2" />
            <Text>aciktim@teknolojikyemekler.com</Text>
          </IconDiv>
          <IconDiv>
            <img src={icon3} alt="icon3" />
            <Text>+90 216 123 45 67</Text>
          </IconDiv>
        </ContactDiv>
        <MenuDiv>
          <Title>Hot Menu</Title>
          <TextDiv>
            <MenuText>Terminal Pizza</MenuText>
            <MenuText>5 Kişilik Hackathlon Pizza</MenuText>
            <MenuText>useEffect Tavuklu Pizza</MenuText>
            <MenuText>Beyaz Console Frosty</MenuText>
            <MenuText>Testler Geçti Mutlu Burger</MenuText>
            <MenuText>Position Absolute Acı Burger</MenuText>
          </TextDiv>
        </MenuDiv>
        <SocialDiv>
          <Title>Instagram</Title>
          <ImgDiv>
            <InstaImg src={insta1} alt="insta1" />
            <InstaImg src={insta2} alt="insta2" />
            <InstaImg src={insta3} alt="insta3" />
            <InstaImg src={insta4} alt="insta4" />
            <InstaImg src={insta5} alt="insta5" />
            <InstaImg src={insta6} alt="insta6" />
          </ImgDiv>
        </SocialDiv>
      </Div>
      <Line />
      <FooterDiv>
        <FooterText>©️ 2023 Teknolojik Yemekler.</FooterText>
        <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
      </FooterDiv>
    </Footer>
  );
}