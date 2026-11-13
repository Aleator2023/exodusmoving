import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router';

import apartmentIcon from '../../assets/icons/apartment-moving.png';
import officeIcon from '../../assets/icons/office-moving.png';
import assemblyIcon from '../../assets/icons/furniture-assembly.png';
import nationwideIcon from '../../assets/icons/nationwide-moving.png';
import insuranceIcon from '../../assets/icons/content-insurance.png';
import craneIcon from '../../assets/icons/crane-services.png';
import pianoIcon from '../../assets/icons/piano-moving.png';
import truckRentalIcon from '../../assets/icons/truck-rental-with-driver.png';

import { findServicePage } from '../../data/servicePages';
import { languagePrefix } from '../../data/seo';

import './ServicePage.css';

const iconsByServiceId = {
  1: apartmentIcon,
  2: officeIcon,
  3: assemblyIcon,
  4: nationwideIcon,
  5: insuranceIcon,
  6: craneIcon,
  7: pianoIcon,
  8: truckRentalIcon,
};

const pageTranslations = {
  he: {
    label: 'השירותים של הובלות אקסודוס',
    quote: 'לקבלת הצעת מחיר ב-WhatsApp',
    call: 'התקשרו: 050-762-97-39',
    allServices: 'לכל השירותים',
    prices: 'למחירון',
    whatsappText: 'שלום, אני מעוניין לקבל הצעת מחיר עבור: ',
  },
  ru: {
    label: 'Услуги Exodus Moving',
    quote: 'Получить предложение в WhatsApp',
    call: 'Позвонить: 050-762-97-39',
    allServices: 'Все услуги',
    prices: 'Цены',
    whatsappText: 'Здравствуйте, хочу получить предложение на услугу: ',
  },
  en: {
    label: 'Exodus Moving services',
    quote: 'Get a quote on WhatsApp',
    call: 'Call: 050-762-97-39',
    allServices: 'All services',
    prices: 'Prices',
    whatsappText: 'Hello, I would like a quote for: ',
  },
};

export default function ServicePage({ language = 'he' }) {
  const { slug } = useParams();
  const page = findServicePage(slug);

  const ui = pageTranslations[language] ?? pageTranslations.he;
  const content = page ? page[language] ?? page.he : null;
  const direction = language === 'he' ? 'rtl' : 'ltr';

  // Title, description, canonical and hreflang are set in App (useDocumentMeta)
  const homeBase = `${languagePrefix(language)}/`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!page) {
    return <Navigate to={homeBase} replace />;
  }

  const whatsappLink =
    'https://wa.me/972507629739?text=' +
    encodeURIComponent(ui.whatsappText + content.title);

  return (
    <section
      className="service-page"
      dir={direction}
      aria-labelledby="service-page-title"
    >
      <div className="container service-page__container">
        <div className="service-page__card">
          <div className="service-page__visual">
            <img
              className="service-page__icon"
              src={iconsByServiceId[page.serviceId]}
              alt={content.title}
            />
          </div>

          <div className="service-page__content">
            <p className="service-page__label">{ui.label}</p>

            <h1
              className="service-page__title"
              id="service-page-title"
            >
              {content.title}
            </h1>

            <p className="service-page__description">
              {content.description}
            </p>

            <div className="service-page__actions">
              <a
                className="service-page__button"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.quote}
              </a>

              <a
                className="service-page__button service-page__button--outline"
                href="tel:+972507629739"
              >
                {ui.call}
              </a>
            </div>

            <nav
              className="service-page__links"
              aria-label={ui.allServices}
            >
              <a href={`${homeBase}#services`}>{ui.allServices}</a>
              <a href={`${homeBase}#prices`}>{ui.prices}</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
