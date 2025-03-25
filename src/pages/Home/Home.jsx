import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './index.css';
export default function Home() {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/order-pizza');
    }
    
    return(
        <div className="home">
        <section className='header'>
            <img src={logo} alt="logo" />

        </section>
        <main className='home-container'>
            <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
            <button onClick={handleClick} className='home-button'>ACIKTIM</button>
        </main>

        </div>
    )
}