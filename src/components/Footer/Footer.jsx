import { Link } from 'react-router';

import { languagePrefix } from '../../data/seo';
import {
  LEGAL_HASHES,
  legalUi,
} from '../LegalDialog/legalContent';

import './Footer.css';
import { whatsappLink } from '../../data/whatsapp';

const footerTranslations = {
  he: {
    description:
      'שירותי הובלות מקצועיים לדירות, משרדים ועסקים בכל רחבי ישראל.',
    navigationTitle: 'ניווט מהיר',
    contactsTitle: 'צור קשר',
    navigation: {
      home: 'דף הבית',
      services: 'שירותים',
      about: 'אודות',
      prices: 'מחירים',
    },
    copyright: 'כל הזכויות שמורות.',
    direction: 'rtl',
  },

  ru: {
    description:
      'Профессиональные услуги по перевозке квартир, офисов и коммерческих помещений по всему Израилю',
    navigationTitle: 'Быстрая навигация',
    contactsTitle: 'Связаться с нами',
    navigation: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О компании',
      prices: 'Цены',
    },
    copyright: 'Все права защищены',
    direction: 'ltr',
  },

  en: {
    description:
      'Professional moving services for apartments, offices and businesses throughout Israel',
    navigationTitle: 'Quick Navigation',
    contactsTitle: 'Contact Us',
    navigation: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      prices: 'Prices',
    },
    copyright: 'All rights reserved',
    direction: 'ltr',
  },
};

function Footer({ language = 'he' }) {
  const currentYear = new Date().getFullYear();

  const content =
    footerTranslations[language] ?? footerTranslations.he;

  const legalText = legalUi[language] ?? legalUi.he;

  const sectionBase = `${languagePrefix(language)}/`;

  return (
    <footer
      className="footer"
      id="contacts"
      dir={content.direction}
    >
      <div className="footer__inner">
        <div className="container footer__container">
          <div className="footer__about">
            <Link
              className="footer__logo"
              to={sectionBase}
              aria-label="Exodus Moving"
            >
              Exodus Moving
            </Link>

            <p className="footer__description">
              {content.description}
            </p>
          </div>

          <nav
            className="footer__navigation"
            aria-label={content.navigationTitle}
          >
            <h2 className="footer__title">
              {content.navigationTitle}
            </h2>

            <a href={`${sectionBase}#home`}>
              {content.navigation.home}
            </a>

            <a href={`${sectionBase}#services`}>
              {content.navigation.services}
            </a>

            <a href={`${sectionBase}#about`}>
              {content.navigation.about}
            </a>

            <a href={`${sectionBase}#prices`}>
              {content.navigation.prices}
            </a>
          </nav>

          <div className="footer__contacts">
            <h2 className="footer__title">
              {content.contactsTitle}
            </h2>

            <a
              className="footer__contact-phone"
              href="tel:+972507629739"
              dir="ltr"
            >
              050-762-97-39
            </a>

            <a
              className="footer__contact-email"
              href="mailto:Exodusmoving2026@gmail.com"
              dir="ltr"
            >
              Exodusmoving2026@gmail.com
            </a>

            <a
              className="footer__contact-whatsapp"
              href={whatsappLink(language)}
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
              © {currentYear} Exodus Moving.{' '}
              {content.copyright}
            </p>

            <nav
              className="footer__legal"
              aria-label={`${legalText.accessibilityLink} / ${legalText.privacyLink}`}
            >
              <a href={LEGAL_HASHES.accessibility}>
                {legalText.accessibilityLink}
              </a>

              <a href={LEGAL_HASHES.privacy}>
                {legalText.privacyLink}
              </a>
            </nav>

            <a
              className="footer__phone"
              href="tel:+972507629739"
              dir="ltr"
            >
              050-762-97-39
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
