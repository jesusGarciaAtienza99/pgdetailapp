import { Link } from 'react-router-dom';
import logo from './resources/pgdetail_logo_blanco.png';

export default function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <img src={logo} alt="PG Detail" className="logo" />
        <span>PG Detail</span>
      </Link>
      <nav className="nav">
        <a href="/">Inicio</a>
        <a href="/#servicios">Servicios</a>
        <a href="/#galeria">Galería</a>
        <a href="/#nosotros">Nosotros</a>
        <Link to="/presupuesto">Presupuesto</Link>
      </nav>
    </header>
  );
}
