import { Link } from 'react-router';

import { cityPages, cityPath } from '../../data/cityPages';
import { localizePath } from '../../data/seo';

import './ServiceAreas.css';

// City name -> address of its page, for cities that have a page in this language
const cityPageLinks = (language) =>
  Object.fromEntries(
    cityPages
      .filter((page) => page.languages.includes(language))
      .map((page) => [
        page[language].name,
        localizePath(language, cityPath(page.slug)),
      ]),
  );

const serviceAreasTranslations = {
  he: {
    areasTitle: 'איזורי שירות:',
    areas: [
      'אשדוד',
      'בת ים',
      'גבעתיים',
      'הוד השרון',
      'הרצליה',
      'חולון',
      'כפר סבא',
      'לוד',
      'מודיעין',
      'נתניה',
      'פתח תקווה',
      'קיסריה',
      'ראש העין',
      'ראשון לציון',
      'רחובות',
      'רמת אביב',
      'רמת גן',
      'רמת השרון',
      'רעננה',
      'תל אביב',
    ],
  },

  ru: {
    areasTitle: 'Зоны обслуживания:',
    areas: [
      'Ашдод',
      'Бат-Ям',
      'Герцлия',
      'Гиватаим',
      'Кейсария',
      'Кфар-Саба',
      'Лод',
      'Модиин',
      'Нетания',
      'Петах-Тиква',
      'Раанана',
      'Рамат-Авив',
      'Рамат-Ган',
      'Рамат-ха-Шарон',
      'Реховот',
      'Ришон-ле-Цион',
      'Рош-ха-Аин',
      'Тель-Авив',
      'Ход-ха-Шарон',
      'Холон',
    ],
  },

  en: {
    areasTitle: 'Service Areas:',
    areas: [
      'Ashdod',
      'Bat Yam',
      'Caesarea',
      'Givatayim',
      'Herzliya',
      'Hod HaSharon',
      'Holon',
      'Kfar Saba',
      'Lod',
      'Modi’in',
      'Netanya',
      'Petah Tikva',
      'Ra’anana',
      'Ramat Aviv',
      'Ramat Gan',
      'Ramat HaSharon',
      'Rehovot',
      'Rishon LeZion',
      'Rosh HaAyin',
      'Tel Aviv',
    ],
  },
};

export default function ServiceAreas({ language = 'he' }) {
  const content =
    serviceAreasTranslations[language] ??
    serviceAreasTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';
  const cityLinks = cityPageLinks(language);

  return (
    <section
      className="service-areas"
      id="service-areas"
      dir={direction}
      aria-labelledby="service-areas-title"
    >
      <div className="container service-areas__container">
        <h2
          className="service-areas__title"
          id="service-areas-title"
        >
          {content.areasTitle}
        </h2>

        <div className="service-areas__grid">
          {content.areas.map((area) =>
            cityLinks[area] ? (
              <Link
                className="service-area-pill service-area-pill--link"
                key={area}
                to={cityLinks[area]}
              >
                {area}
              </Link>
            ) : (
              <span
                className="service-area-pill"
                key={area}
              >
                {area}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}