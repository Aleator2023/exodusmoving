import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router';

import { findCityPage } from '../../data/cityPages';
import { languagePrefix } from '../../data/seo';
import { whatsappLink } from '../../data/whatsapp';

import './CityPage.css';

const pageTranslations = {
  he: {
    label: 'אזורי שירות',
    quote: 'לקבלת הצעת מחיר ב-WhatsApp',
    call: 'התקשרו: 050-762-97-39',
    home: 'לעמוד הבית',
    services: 'לכל השירותים',
    prices: 'למחירון',
  },
  ru: {
    label: 'Зоны обслуживания',
    quote: 'Получить предложение в WhatsApp',
    call: 'Позвонить: 050-762-97-39',
    home: 'На главную',
    services: 'Все услуги',
    prices: 'Цены',
  },
  en: {
    label: 'Service areas',
    quote: 'Get a quote on WhatsApp',
    call: 'Call: 050-762-97-39',
    home: 'Home',
    services: 'All services',
    prices: 'Prices',
  },
};

function ContactButtons({ language, ui }) {
  return (
    <div className="city-page__actions">
      <a
        className="city-page__button"
        href={whatsappLink(language)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ui.quote}
      </a>

      <a
        className="city-page__button city-page__button--outline"
        href="tel:+972507629739"
      >
        {ui.call}
      </a>
    </div>
  );
}

// '**bold** text' -> <strong>bold</strong> text
function withBold(text) {
  return text
    .split(/\*\*(.+?)\*\*/)
    .map((part, index) =>
      index % 2 === 1 ? <strong key={part}>{part}</strong> : part,
    );
}

export default function CityPage({ language = 'he' }) {
  const { slug } = useParams();
  const page = findCityPage(slug);
  const homeBase = `${languagePrefix(language)}/`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // The page exists only in some languages
  if (!page || !page.languages.includes(language)) {
    return <Navigate to={homeBase} replace />;
  }

  const ui = pageTranslations[language] ?? pageTranslations.he;
  const content = page[language];
  const direction = language === 'he' ? 'rtl' : 'ltr';

  return (
    <article
      className="city-page"
      dir={direction}
      aria-labelledby="city-page-title"
    >
      <div className="container city-page__container">
        <header className="city-page__hero">
          <p className="city-page__label">{ui.label}</p>

          <h1 className="city-page__title" id="city-page-title">
            {content.title}
          </h1>

          <p className="city-page__intro">{content.intro}</p>

          <ContactButtons language={language} ui={ui} />
        </header>

        <div className="city-page__body">
          {content.article.map((paragraph) => (
            <p className="city-page__text" key={paragraph}>
              {withBold(paragraph)}
            </p>
          ))}
        </div>

        <aside className="city-page__cta">
          <h2 className="city-page__cta-title">{content.ctaTitle}</h2>
          <p className="city-page__cta-text">{content.ctaText}</p>
          <ContactButtons language={language} ui={ui} />
        </aside>

        <nav className="city-page__links" aria-label={ui.home}>
          <a href={homeBase}>{ui.home}</a>
          <a href={`${homeBase}#services`}>{ui.services}</a>
          <a href={`${homeBase}#prices`}>{ui.prices}</a>
        </nav>
      </div>
    </article>
  );
}
