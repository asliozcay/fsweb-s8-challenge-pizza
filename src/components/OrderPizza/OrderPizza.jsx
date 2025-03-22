import "./index.css";
import logo from "../../assets/logo.svg";

export default function OrderPizza() {
  return (
    <>
      <header>
        <a className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="links">
          <a className="navlink" href="">
            Anasayfa
          </a>
          -
          <a className="navlink active" href="">
            Sipariş Oluştur
          </a>
        </nav>
      </header>
      <div className="info">
          <h2>Position Absolute Acı Pizza</h2>
          <span className="price-info">
          <h3>85.50₺</h3>
          <span className="rating">
          <p>4.9</p>
          <p>(200)</p>
          </span>
          </span>
          <p className="pizza-info">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
    </>
  );
}
