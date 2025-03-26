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
export default function Footer() {
  const Footer = styled.footer`
    background-color: #1a1a1a;
    width: 100wv;
    height: auto;
    font-family: "Barlow", sans-serif;
    color: #ffffff;
    font-size: 1.125rem;
    display: flex;
    justify-content: center;
  `;
  const Div = styled.div`
    width: 60%;
    justify-content: space-;
    align-items: center;
    display: flex;
  `;
  const ContactDiv = styled.div`
    align-items: left;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const IconDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: start;
    gap: 1rem;
    padding: 1.25rem 0;
  `;
  const Logo = styled.img`
    padding: 3rem 0;
    padding-top: 5rem;
  `;
  const TextDiv = styled.div``;
  const Text = styled.p`
    line-height: 2rem;
  `;

  const MenuDiv = styled(ContactDiv)``;

  const Title = styled(Text)`
    font-size: 1.5rem;
    font-weight: 500;
  `;
  const ImgDiv = styled(TextDiv)`
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `;

  const SocialDiv = styled(ContactDiv)`
    gap: 1rem;
    row-gap: 1rem;
  `;
  const InstaImg = styled.img`
    width: 105px;
    height: 105px;
    object-fit: cover;
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
            <Text>Terminal Pizza</Text>
            <Text>5 Kişilik Hackathlon Pizza</Text>
            <Text>useEffect Tavuklu Pizza</Text>
            <Text>Beyaz Console Frosty</Text>
            <Text>Testler Geçti Mutlu Burger</Text>
            <Text>Position Absolute Acı Burger</Text>
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
    </Footer>
  );
}
