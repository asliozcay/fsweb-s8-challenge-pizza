import styled from "styled-components";

export default function SuccessMain(props) {
  const { orderData } = props;

  const Main = styled.div`
    background-color: #ce2829;
    text-align: center;
    height: 100vh;
  `;

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 37%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 90%;
    }
  `;

  const Title = styled.h1`
    font-family: "Satisfy", cursive;
    color: #fdc913;
    font-size: 2rem;
    font-weight: 400;
    padding-top: 4.4rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding-top: 2rem;
    }
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

    @media (max-width: 768px) {
      font-size: 2.5rem;
      width: 90%;
    }
  `;

  const AboutTitle = styled.h2`
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    color: #ffffff;
    font-size: 1.375rem;
    line-height: 3.5rem;
    padding-top: 1.344rem;

    @media (max-width: 768px) {
      font-size: 1.125rem;
      line-height: 2rem;
    }
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

    @media (max-width: 768px) {
      width: 90%;
      font-size: 0.875rem;
    }
  `;

  const Bold = styled.span`
    font-weight: 700;
  `;

  const PriceDiv = styled.div`
    border: 1px solid #faf7f2;
    border-radius: 6px;
    padding: 1.5rem 3rem;
    text-align: left;
    width: 15rem;
    margin-top: 3.5rem;

    @media (max-width: 768px) {
      width: 90%;
      padding: 1rem;
    }
  `;

  const PriceTitle = styled(AboutTitle)`
    font-size: 1.25rem;
    margin-bottom: 10px;
    line-height: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;

  const PriceText = styled(PriceTitle)`
    font-size: 1.125rem;
    margin: 5px 0;
    line-height: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;

  const Price = styled(Bold)`
    font-size: 1.125rem;
    font-weight: 600;
    float: right;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;

  return (
    <Main>
      <Div>
        {orderData ? (
          <>
            <Title>lezzetin yolda</Title>
            <Subtitle>SİPARİŞ ALINDI</Subtitle>
            <AboutTitle>Position Absolute Acı Pizza</AboutTitle>
            <AboutText>
              Boyut: <Bold>{orderData.size}</Bold>
            </AboutText>
            <AboutText>
              Hamur: <Bold>{orderData.dough}</Bold>
            </AboutText>
            <AboutText>
              Ek Malzemeler:
              <Bold>{orderData.toppings.join(", ")}</Bold>
            </AboutText>
            <PriceDiv>
              <PriceTitle>Sipariş Toplamı</PriceTitle>
              <PriceText>
                Seçimler<Price>{orderData.toppingPrice.toFixed(2)}₺</Price>
              </PriceText>
              <PriceText>
                Toplam<Price>{orderData.totalPrice.toFixed(2)}₺</Price>
              </PriceText>
            </PriceDiv>
          </>
        ) : (
          <Subtitle>Sipariş Alınamadı!</Subtitle>
        )}
      </Div>
    </Main>
  );
}
