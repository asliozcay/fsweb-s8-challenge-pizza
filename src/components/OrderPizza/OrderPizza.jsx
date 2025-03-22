import './index.css'
import logo from "../../assets/logo.svg";

export default function OrderPizza() {

  
    return (
    
      <header>
        <a className='logo'>
          <img src={logo} alt="logo" />
        </a>
        <nav className='links'>
            <a className="navlink" href="">Anasayfa</a> - <a className="navlink active" href="">Sipariş Oluştur</a>
        </nav>
      </header>
    
  );
}
