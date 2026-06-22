import flatImage from '../../assets/services/flat.png';
import officeImage from '../../assets/services/ofice.png';
import assemblyImage from '../../assets/services/sborka.png';
import teamImage from '../../assets/services/garage.png';
import packingImage from '../../assets/services/upakovka.png';
import countryImage from '../../assets/services/allcountry.png';
import insuranceImage from '../../assets/services/bituah.png';
import experienceImage from '../../assets/services/10years.png';

import './Services.css';

const servicesTranslations = {
  he: {
    title: 'השירותים שלנו',
    subtitle: 'שירותי הובלה מקצועיים לדירות ולמשרדים',
    services: [
      {
        id: 1,
        title: 'הובלות דירה',
        image: flatImage,
        alt: 'הובלות דירה',
      },
      {
        id: 2,
        title: 'הובלת משרדים ועסקים',
        image: officeImage,
        alt: 'הובלת משרדים ועסקים',
      },
      {
        id: 3,
        title: 'פירוק והרכבת רהיטים',
        image: assemblyImage,
        alt: 'פירוק והרכבת רהיטים',
      },
      {
        id: 4,
        title: 'צוות מקצועי קבוע',
        image: teamImage,
        alt: 'צוות מקצועי קבוע',
      },
      {
        id: 5,
        title: 'אריזת הבית',
        image: packingImage,
        alt: 'שירותי אריזה מקצועיים',
      },
      {
        id: 6,
        title: 'הובלות בכל הארץ',
        image: countryImage,
        alt: 'הובלות בכל הארץ',
      },
      {
        id: 7,
        title: 'ביטוח סחורה',
        image: insuranceImage,
        alt: 'ביטוח סחורה בזמן ההובלה',
      },
      {
        id: 8,
        title: 'מעל 10 שנות ניסיון',
        image: experienceImage,
        alt: 'עשר שנות ניסיון בתחום ההובלות',
      },
    ],
  },

  ru: {
    title: 'Наши услуги',
    subtitle:
      'Профессиональные услуги по перевозке квартир и офисов',
    services: [
      {
        id: 1,
        title: 'Квартирные переезды',
        image: flatImage,
        alt: 'Квартирные переезды',
      },
      {
        id: 2,
        title: 'Перевозка офисов и бизнеса',
        image: officeImage,
        alt: 'Перевозка офисов и бизнеса',
      },
      {
        id: 3,
        title: 'Разборка и сборка мебели',
        image: assemblyImage,
        alt: 'Разборка и сборка мебели',
      },
      {
        id: 4,
        title: 'Постоянная команда специалистов',
        image: teamImage,
        alt: 'Профессиональная команда грузчиков',
      },
      {
        id: 5,
        title: 'Упаковка домашних вещей',
        image: packingImage,
        alt: 'Профессиональные услуги упаковки',
      },
      {
        id: 6,
        title: 'Перевозки по всей стране',
        image: countryImage,
        alt: 'Перевозки по всему Израилю',
      },
      {
        id: 7,
        title: 'Страхование имущества',
        image: insuranceImage,
        alt: 'Страхование имущества во время перевозки',
      },
      {
        id: 8,
        title: 'Более 10 лет опыта',
        image: experienceImage,
        alt: 'Более десяти лет опыта в перевозках',
      },
    ],
  },

  en: {
    title: 'Our Services',
    subtitle:
      'Professional moving services for apartments and offices',
    services: [
      {
        id: 1,
        title: 'Apartment Moving',
        image: flatImage,
        alt: 'Apartment moving services',
      },
      {
        id: 2,
        title: 'Office and Business Moving',
        image: officeImage,
        alt: 'Office and business moving services',
      },
      {
        id: 3,
        title: 'Furniture Assembly',
        image: assemblyImage,
        alt: 'Furniture disassembly and assembly',
      },
      {
        id: 4,
        title: 'Professional Moving Team',
        image: teamImage,
        alt: 'Professional moving team',
      },
      {
        id: 5,
        title: 'Home Packing Services',
        image: packingImage,
        alt: 'Professional packing services',
      },
      {
        id: 6,
        title: 'Moving Across Israel',
        image: countryImage,
        alt: 'Moving services throughout Israel',
      },
      {
        id: 7,
        title: 'Property Insurance',
        image: insuranceImage,
        alt: 'Property insurance during transportation',
      },
      {
        id: 8,
        title: 'Over 10 Years of Experience',
        image: experienceImage,
        alt: 'Over ten years of moving experience',
      },
    ],
  },
};

export default function Services({ language = 'he' }) {
  const content =
    servicesTranslations[language] ??
    servicesTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  return (
    <section
      className="services"
      id="services"
      dir={direction}
      aria-labelledby="services-title"
    >
      <div className="container services__container">
        <header className="services__heading">
          <h2
            className="services__title"
            id="services-title"
          >
            {content.title}
          </h2>

          <p className="services__subtitle">
            {content.subtitle}
          </p>
        </header>

        <div className="services__grid">
          {content.services.map(
            ({ id, title, image, alt }) => (
              <article
                className="service-card"
                key={id}
              >
                <div className="service-card__icon-wrapper">
                  <img
                    className="service-card__image"
                    src={image}
                    alt={alt}
                    loading="lazy"
                  />
                </div>

                <h3 className="service-card__title">
                  {title}
                </h3>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}