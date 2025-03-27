import "./index.css";
import styled from "styled-components";
import icon1 from "../../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../../images/iteration-2-images/icons/6.svg";
import { Link } from "react-router-dom";
export default function Home2() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    width: auto;
    &:hover {
      background-color: #292929;
      color: #ffff;
      border-radius: 50px;
      background-size: 200% auto;
    }
  `;

  return (
    <>
      <div className="section-container">
        <section className="card-container">
          <div className="card1">
            <p className="card1-title">Özel Lezzetus</p>
            <p className="card1-text">Position:Absolute Acı Burger</p>
            <Link to="/order-pizza" className="card1-button">
              Sipariş Ver
            </Link>
          </div>
          <div className="card2-3">
            <div className="card2">
              <div className="card2-content">
                <p className="card2-title">Hackathlon Burger Menü</p>
                <Link to="/order-pizza" className="card2-button">
                  Sipariş Ver
                </Link>
              </div>
            </div>
            <div className="card3">
              <div className="card3-content">
                <p className="card3-title">
                  <span className="red">Çoooook</span> hızlı npm gibi kurye{" "}
                </p>
                <Link to="/order-pizza" className="card3-button">
                  Sipariş Ver
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-container">
          <p className="bestseller-title">en çok paketlenen menüler</p>
          <p className="menu-title">Acıktıran Kodlara Doyuran Lezzetler</p>
        </section>

        <nav className="nav-items">
          <StyledLink to="">
            <img src={icon1} alt="" />
            Ramen
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
            French Fries
          </StyledLink>
          <StyledLink to="">
            <img src={icon5} alt="" />
            Fast Food
          </StyledLink>
          <StyledLink to="">
            <img src={icon6} alt="" />
            Soft Drinks
          </StyledLink>
        </nav>
      </div>
    </>
  );
}
