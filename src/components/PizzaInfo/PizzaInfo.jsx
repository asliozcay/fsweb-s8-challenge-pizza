import { Link } from "react-router-dom";
import "./index.css";
export default function PizzaInfo(props) {
  const { pizzaPrice } = props;

  return (
    <section className="info">
      <div className="pizza-image"></div>

      <div className="container-info">
        <div className="links">
          <Link className="homepage-link" to="/">
            Anasayfa
          </Link>
          -
          <Link className="order-link" to="/order-pizza">
            Sipariş Oluştur
          </Link>
        </div>
        <h2>Position Absolute Acı Pizza</h2>
        <span className="price-info">
          <h3>{pizzaPrice.toFixed(2)}₺</h3>
          <span className="rating">
            <p>4.9</p>
            <p>(200)</p>
          </span>
        </span>
        <p className="pizza-info">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </section>
  );
}
