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
    serviceAreas: 'איזורי שירות',
    contacts: 'צור קשר',
    navigationLabel: 'ניווט ראשי',
    languageLabel: 'בחירת שפה',
    menuLabel: 'פתיחת תפריט',
    phoneLabel: 'התקשרו למספר 050-762-97-39',
    logoLabel: 'הובלות אקסודוס',
    logoAlt: 'הובלות אקסודוס',
  },

  ru: {
    home: 'Главная',
    services: 'Услуги',
    about: 'О компании',
    prices: 'Цены',
    serviceAreas: 'Города',
    contacts: 'Контакты',
    navigationLabel: 'Основная навигация',
    languageLabel: 'Выбор языка',
    menuLabel: 'Открыть меню',
    phoneLabel: 'Позвонить по номеру 050-762-97-39',
    logoLabel: 'Exodus Moving',
    logoAlt: 'Exodus Moving',
  },

  en: {
    home: 'Home',
    services: 'Services',
    about: 'About us',
    prices: 'Prices',
    serviceAreas: 'Service Areas',
    contacts: 'Contacts',
    navigationLabel: 'Main navigation',
    languageLabel: 'Select language',
    menuLabel: 'Open menu',
    phoneLabel: 'Call 050-762-97-39',
    logoLabel: 'Exodus Moving',
    logoAlt: 'Exodus Moving',
  },
};

const languages = [
  {
    code: 'he',
    label: 'עברית',
    shortLabel: 'HE',
    flag: israelFlag,
  },
  {
    code: 'ru',
    label: 'Русский',
    shortLabel: 'RU',
    flag: russianFlag,
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: englishFlag,
  },
];

function Header({ language, onLanguageChange }) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] =
    useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const languageMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const text = translations[language] ?? translations.he;

  const navigation = [
    {
      href: '#home',
      label: text.home,
    },
    {
      href: '#services',
      label: text.services,
    },
    {
      href: '#about',
      label: text.about,
    },
    {
      href: '#prices',
      label: text.prices,
    },
    {
      href: '#service-areas',
      label: text.serviceAreas,
    },
    {
      href: '#contacts',
      label: text.contacts,
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

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsLanguageMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      );

      document.removeEventListener(
        'keydown',
        handleEscape,
      );
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      'mobile-menu-open',
      isMobileMenuOpen,
    );

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const handleLanguageSelect = (languageCode) => {
    onLanguageChange(languageCode);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavigationClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((currentValue) => !currentValue);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <a
          className="header__logo"
          href="#home"
          aria-label={text.logoLabel}
          onClick={handleNavigationClick}
        >
          <img
            className="header__logo-image"
            src={logo}
            alt={text.logoAlt}
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
          className="language-selector language-selector--desktop"
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

            <span className="language-selector__current-label">
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
          href="tel:+972507629739"
          aria-label={text.phoneLabel}
        >
          050-762-97-39
        </a>

        <div
          className="mobile-menu"
          ref={mobileMenuRef}
        >
          <button
            className={`mobile-menu__button ${
              isMobileMenuOpen
                ? 'mobile-menu__button--open'
                : ''
            }`}
            type="button"
            aria-label={text.menuLabel}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
          >
            <span className="mobile-menu__line" />
            <span className="mobile-menu__line" />
            <span className="mobile-menu__line" />
          </button>

          {isMobileMenuOpen && (
            <div
              className="mobile-menu__panel"
              id="mobile-navigation"
            >
              <div className="mobile-menu__languages">
                <p className="mobile-menu__title">
                  {text.languageLabel}
                </p>

                <div className="mobile-menu__language-list">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      className={`mobile-menu__language ${
                        language === item.code
                          ? 'mobile-menu__language--active'
                          : ''
                      }`}
                      type="button"
                      aria-label={item.label}
                      onClick={() =>
                        handleLanguageSelect(item.code)
                      }
                    >
                      <img
                        className="mobile-menu__language-flag"
                        src={item.flag}
                        alt={item.label}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <nav
                className="mobile-menu__navigation"
                aria-label={text.navigationLabel}
              >
                {navigation.map(({ href, label }) => (
                  <a
                    key={href}
                    className="mobile-menu__link"
                    href={href}
                    onClick={handleNavigationClick}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
