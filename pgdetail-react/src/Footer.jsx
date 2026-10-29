import { Link } from 'react-router-dom';

export default function Footer({ contact, footer }) {
  return (
    <footer className="footer footer-global">
      <div className="footer-inner">
        <p>{footer.businessName} | {footer.location} | Tel: {contact.telephone} | Email: {contact.email}</p>
        <nav className="footer-links">
          <Link to="/aviso-legal">Aviso Legal</Link>
          <Link to="/politica-privacidad">Política de Privacidad</Link>
          <Link to="/politica-cookies">Política de Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
