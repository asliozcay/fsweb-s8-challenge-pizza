import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./index.css";

export default function Header() {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
  
  return (
    <header className="header-container">
      <div className="container">
        <a onClick={handleClick} href="">
          <img src={logo} alt="logo" />
        </a>
        <nav className="links">
          <a className="navlink" href="" onClick={handleClick}>
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
