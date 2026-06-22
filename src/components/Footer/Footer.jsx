import { Link } from 'react-router';

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      id="contacts"
      dir="rtl"
    >
      <div className="footer__inner">
        <div className="container footer__container">
          <div className="footer__about">
            <Link
              className="footer__logo"
              to="/"
              aria-label="Exodus Moving"
            >
              Exodus Moving
            </Link>

            <p className="footer__description">
              שירותי הובלות מקצועיים לדירות, משרדים ועסקים
              בכל רחבי ישראל.
            </p>
          </div>

          <div className="footer__navigation">
            <h2 className="footer__title">ניווט מהיר</h2>

            <a href="#home">דף הבית</a>
            <a href="#services">שירותים</a>
            <a href="#about">אודות</a>
            <a href="#prices">מחירים</a>
          </div>

          <div className="footer__contacts">
            <h2 className="footer__title">צור קשר</h2>

            <a
              className="footer__contact-phone"
              href="tel:+972534309087"
            >
              053-430-90-87
            </a>

            <a
              className="footer__contact-email"
              href="mailto:Exodusmoving2026@gmail.com"
            >
              Exodusmoving2026@gmail.com
            </a>

            <a
              className="footer__contact-whatsapp"
              href="https://wa.me/972534309087"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container footer__bottom-container">
            <p className="footer__copyright">
              © {currentYear} Exodus Moving. כל הזכויות שמורות.
            </p>

            <a
              className="footer__phone"
              href="tel:+972534309087"
            >
              053-430-90-87
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;