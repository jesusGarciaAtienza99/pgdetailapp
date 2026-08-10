import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer footer-global">
      <div className="footer-inner">
        <p>PG DETAIL | Navalcarnero (Madrid) | Tel: 672 083 075 | Email: pg.detailnavalcarnero@gmail.com</p>
        <nav className="footer-links">
          <Link to="/aviso-legal">Aviso Legal</Link>
          <Link to="/politica-privacidad">Política de Privacidad</Link>
          <Link to="/politica-cookies">Política de Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
