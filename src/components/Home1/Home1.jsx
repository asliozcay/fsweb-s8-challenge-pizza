import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";
import styled from "styled-components";
import icon1 from "../../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../../images/iteration-2-images/icons/6.svg";

export default function Home1() {
  const Title = styled.h1`
    font-family: "Satisfy", cursive;
    color: #fdc913;
    font-size: 2rem;
    font-weight: 400;
    padding-top: 2.5rem;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 150px;
    &:hover {
      background-color: #292929;
      color: #ffff;
      border-radius: 50px;
      background-size: 200% auto;
    }
  `;

  return (
    <>
      <Header />
      <div className="home">
        <main className="home-container">
          <Title>fırsatı kaçırma</Title>
          <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
          <Link to="/order-pizza">
            <button className="home-button" data-cy="home-button">
              ACIKTIM
            </button>
          </Link>
        </main>
      </div>
      <div className="home-nav">
        <nav className="nav-items1">
          <StyledLink to="">
            <img src={icon1} alt="" />
            YENİ! Kore
          </StyledLink>
          <StyledLink to="">
            <img src={icon2} alt="" />
            Pizza
          </StyledLink>
          <StyledLink to="">
            <img src={icon3} alt="" />
            Burger
          </StyledLink>
          <StyledLink to="">
            <img src={icon4} alt="" />
            Kızartmalar
          </StyledLink>
          <StyledLink to="">
            <img src={icon5} alt="" />
            Fast Food
          </StyledLink>
          <StyledLink to="">
            <img src={icon6} alt="" />
            Gazlı İçecek
          </StyledLink>
        </nav>
      </div>
    </>
  );
}