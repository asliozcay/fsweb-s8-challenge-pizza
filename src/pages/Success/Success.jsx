import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./index.css";

export default function Success() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
  return (
    <div className="success-container">
      <div className="success-content">
      <header>
        <a onClick={handleClick} href="">
          <img src={logo} alt="logo"  className="success-logo"/>
        </a>
      </header>
      <section className="success-container">
      <p>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</p>
      </section>
      </div>
    </div>
  );
}
