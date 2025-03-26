import styled from "styled-components";

export default function SuccessMain() {
    const Main = styled.div`
    background-color: #ce2829;
    text-align: center;
    height: 100vh;
    `
    const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 37%;
    margin: 0 auto;
  `;

  const Title = styled.h1`
    font-family: "Satisfy", cursive;
    color: #fdc913;
    font-size: 2rem;
    font-weight: 400;
    padding-top: 4.4rem;
  `;

  const Subtitle = styled.p`
    font-family: "Roboto Condensed", sans-serif;
    color: #ffffff;
    font-weight: 300;
    font-size: 5.375rem;
    border-bottom: 1px solid #faf7f2;
    padding-bottom: 3rem;
    width: 32.75rem;
    margin: 0 auto;
  `;
  const AboutTitle = styled.h2`
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    color: #ffffff;
    font-size: 1.375rem;
    line-height: 3.5rem;
    padding-top: 1.344rem;
  `;
  const AboutText = styled.p`
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    color: #ffffff;
    font-size: 1rem;
    width: 12.5rem;
    line-height: 1.5rem;
    text-align: left;
    padding-top: 1rem;
    
  `;
  const Bold = styled.span`
    font-weight: 700;
  `;
  const PriceDiv = styled.div`
    border: 1px solid #FAF7F2;
    border-radius: 6px;
    padding: 1.5rem 3rem;
    text-align: left;
    width: 15rem;
    margin-top: 3.5rem;
    padding: 0 auto 12.5rem;
  `;
  const PriceTitle = styled(AboutTitle)`
    font-size: 1.25rem;
    margin-bottom: 10px;
    line-height: 1rem;
  `;
  const PriceText = styled(PriceTitle)`
    font-size: 1.125rem;
    margin: 5px 0;
    line-height: .5rem;
    
    `;
    const Price = styled(Bold)`
    font-size: 1.125rem;
    font-weight: 600;
    float: right;
    
    `;

  return (
    <Main>
      <Div>
        <Title>lezzetin yolda</Title>
        <Subtitle>SİPARİŞ ALINDI</Subtitle>
        <AboutTitle>Position Absolute Acı Pizza</AboutTitle>
        <AboutText>
          Boyut: <Bold>L</Bold>
        </AboutText>
        <AboutText>
          Hamur: <Bold>Süpper İnce</Bold>
        </AboutText>
        <AboutText>
          Ek Malzemeler:
          <Bold>Pepperoni, Sosis, Mısır, Ananas, Jalepeno</Bold>
        </AboutText>
        <PriceDiv>
            <PriceTitle>Sipariş Toplamı</PriceTitle>
            <PriceText>Seçimler<Price>25.00₺</Price></PriceText>
            <PriceText>Toplam<Price>110.50₺</Price></PriceText>
        </PriceDiv>
      </Div>
    </Main>
  );
}
