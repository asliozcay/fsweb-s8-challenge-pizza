import logo from "../../assets/logo.svg";
import "./index.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <a>
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
      </div>
    </header>
  );
}
