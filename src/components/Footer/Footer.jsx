import { Link } from 'react-router';

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <Link className="footer__logo" to="/">
            Exodus Moving
          </Link>

          <p className="footer__description">
            Квартирные и офисные перевозки по всему Израилю.
          </p>
        </div>

        <div className="footer__contacts">
          <a href="tel:+972501234567">050-123-45-67</a>
          <a href="mailto:info@exodusmoving.co.il">
            info@exodusmoving.co.il
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        © {currentYear} Exodus Moving. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;