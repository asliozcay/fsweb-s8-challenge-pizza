import "./index.css";
import styled from "styled-components";
import icon1 from "../../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../../images/iteration-2-images/icons/6.svg";
import food1 from "../../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../../images/iteration-2-images/pictures/food-3.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
export default function Home2() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: #ffff;
    border-radius: 50px;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    justify-content: flex-start;
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
        <section className="nav-container">
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
        </section>
        <div className="food-container">
          <div className="food">
            <img src={food1} alt="food1" />
            <p className="food-title">Terminal Pizza</p>
            <div className="text-group">
              <p className="food-text">4.9</p>
              <p className="food-text">
                (200)<span className="bold-food">60₺</span>
              </p>
            </div>
          </div>
          <div className="food">
            <img src={food2} alt="food2" />
            <p className="food-title">Position Absolute Acı Pizza</p>
            <div className="text-group">
              <p className="food-text">4.9</p>
              <p className="food-text">
                (200)<span className="bold-food">60₺</span>
              </p>
            </div>
          </div>
          <div className="food">
            <img src={food3} alt="food3" />
            <p className="food-title">useEffect Tavuklu Burger</p>
            <div className="text-group">
              <p className="food-text">4.9</p>
              <p className="food-text">
                (200)<span className="bold-food">60₺</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
