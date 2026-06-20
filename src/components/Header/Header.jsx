import { useEffect, useRef, useState } from 'react';

import logo from '../../assets/exodus-moving-logo-transparent.png';

import './Header.css';

const translations = {
  he: {
    home: 'דף הבית',
    services: 'שירותים',
    about: 'אודות',
    prices: 'מחירים',
    contacts: 'צור קשר',
    navigationLabel: 'ניווט ראשי',
    languageLabel: 'בחירת שפה',
  },

  ru: {
    home: 'Главная',
    services: 'Услуги',
    about: 'О компании',
    prices: 'Цены',
    contacts: 'Контакты',
    navigationLabel: 'Основная навигация',
    languageLabel: 'Выбор языка',
  },

  en: {
    home: 'Home',
    services: 'Services',
    about: 'About us',
    prices: 'Prices',
    contacts: 'Contacts',
    navigationLabel: 'Main navigation',
    languageLabel: 'Select language',
  },
};

const languages = [
  { code: 'he', label: 'עברית', shortLabel: 'HE' },
  { code: 'ru', label: 'Русский', shortLabel: 'RU' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
];

function Header({ language, onLanguageChange }) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

  const text = translations[language];

  const navigation = [
    { href: '#home', label: text.home },
    { href: '#services', label: text.services },
    { href: '#about', label: text.about },
    { href: '#prices', label: text.prices },
    { href: '#contacts', label: text.contacts },
  ];

  const currentLanguage = languages.find(
    (item) => item.code === language,
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleLanguageSelect = (languageCode) => {
    onLanguageChange(languageCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a
          className="header__logo"
          href="#home"
          aria-label="Exodus Moving"
        >
          <img
            className="header__logo-image"
            src={logo}
            alt="Exodus Moving"
          />
        </a>

        <nav
          className="header__navigation"
          aria-label={text.navigationLabel}
        >
          {navigation.map(({ href, label }) => (
            <a
              key={href}
              className="header__link"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          className="language-selector"
          ref={languageMenuRef}
        >
          <button
            className="language-selector__button"
            type="button"
            aria-label={text.languageLabel}
            aria-expanded={isLanguageMenuOpen}
            onClick={() =>
              setIsLanguageMenuOpen((currentValue) => !currentValue)
            }
          >
            <span
              className="language-selector__icon"
              aria-hidden="true"
            >
              🌐
            </span>

            <span>{currentLanguage.shortLabel}</span>

            <span
              className={`language-selector__arrow ${
                isLanguageMenuOpen
                  ? 'language-selector__arrow--open'
                  : ''
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {isLanguageMenuOpen && (
            <div className="language-selector__menu">
              {languages.map((item) => (
                <button
                  key={item.code}
                  className={`language-selector__option ${
                    language === item.code
                      ? 'language-selector__option--active'
                      : ''
                  }`}
                  type="button"
                  onClick={() => handleLanguageSelect(item.code)}
                >
                  <span>{item.label}</span>
                  <span>{item.shortLabel}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          className="header__phone"
          href="tel:+972534309087"
        >
          053-430-90-87
        </a>
      </div>
    </header>
  );
}

export default Header;