import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./index.css";

export default function Success() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className=" background-color">
      <div className="success-container">
        <header>
          <a onClick={handleClick} href="">
            <img src={logo} alt="logo" className="success-logo" />
          </a>
        </header>
        <section className="success-text">
          <p>
            TEBRİKLER!
            <br />
            SİPARİŞİNİZ ALINDI!
          </p>
        </section>
      </div>
    </div>
  );
}