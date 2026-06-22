import { useEffect, useRef, useState } from 'react';

import israelFlag from '../../assets/il.png';
import russianFlag from '../../assets/ru.png';
import englishFlag from '../../assets/en.png';

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
  {
    code: 'he',
    label: 'עברית',
    shortLabel: 'HE',
    flag: israelFlag,
    flagAlt: 'דגל ישראל',
  },
  {
    code: 'ru',
    label: 'Русский',
    shortLabel: 'RU',
    flag: russianFlag,
    flagAlt: 'Флаг России',
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: englishFlag,
    flagAlt: 'English language flag',
  },
];

function Header({ language, onLanguageChange }) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] =
    useState(false);

  const languageMenuRef = useRef(null);

  const text = translations[language];

  const navigation = [
    {
      href: '#home',
      label: text.home,
      className: 'header__link--home',
    },
    {
      href: '#services',
      label: text.services,
      className: 'header__link--services',
    },
    {
      href: '#about',
      label: text.about,
      className: 'header__link--about',
    },
    {
      href: '#prices',
      label: text.prices,
      className: 'header__link--prices',
    },
    {
      href: '#contacts',
      label: text.contacts,
      className: 'header__link--contacts',
    },
  ];

  const currentLanguage =
    languages.find((item) => item.code === language) ??
    languages[0];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      );
    };
  }, []);

  const handleLanguageSelect = (languageCode) => {
    onLanguageChange(languageCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
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
          {navigation.map(
            ({ href, label, className }) => (
              <a
                key={href}
                className={`header__link ${className}`}
                href={href}
              >
                {label}
              </a>
            ),
          )}
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
            aria-haspopup="menu"
            onClick={() =>
              setIsLanguageMenuOpen(
                (currentValue) => !currentValue,
              )
            }
          >
            <img
              className="language-selector__flag"
              src={currentLanguage.flag}
              alt=""
              aria-hidden="true"
            />

            <span>
              {currentLanguage.shortLabel}
            </span>

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
            <div
              className="language-selector__menu"
              role="menu"
            >
              {languages.map((item) => (
                <button
                  key={item.code}
                  className={`language-selector__option ${
                    language === item.code
                      ? 'language-selector__option--active'
                      : ''
                  }`}
                  type="button"
                  role="menuitem"
                  onClick={() =>
                    handleLanguageSelect(item.code)
                  }
                >
                  <span className="language-selector__option-language">
                    <img
                      className="language-selector__flag"
                      src={item.flag}
                      alt=""
                      aria-hidden="true"
                    />

                    <span>{item.label}</span>
                  </span>

                  <span className="language-selector__short-label">
                    {item.shortLabel}
                  </span>
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