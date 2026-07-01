import flatImage from '../../assets/services/flat.png';
import officeImage from '../../assets/services/ofice.png';
import assemblyImage from '../../assets/services/sborka.png';
import packingImage from '../../assets/services/upakovka.png';
import countryImage from '../../assets/services/allcountry.png';
import insuranceImage from '../../assets/services/bituah.png';
import craneImage from '../../assets/services/kran.png';

import './Services.css';

const servicesTranslations = {
  he: {
    title: 'השירותים שלנו',
    subtitle: 'שירותי הובלה מקצועיים לדירות ולמשרדים',

    featuredService: {
      title: 'שירותי אריזת הבית בארגזים',
      description:
        'אנחנו נארוז את כל תכולת הבית שלכם בארגזים בצורה המקצועית והבטוחה ביותר, כך ששום דבר לא יישבר. אריזה עצמית לוקחת ימים ארוכים ומלווה בסטרס, בעוד שהצוות המקצועי שלנו חוסך לכם זמן יקר ומביא איתו את שיטות העבודה וחומרי המיגון הנכונים ביותר לשמירה על החפצים שלכם. השירות מבוצע על ידי צוות מיומן, אמין ומסור שאפשר לסמוך עליו בעיניים עצומות. אתם יכולים להירגע – אנחנו נדאג להכל!',
      image: packingImage,
      alt: 'שירותי אריזת תכולת הבית בארגזים',
    },

    services: [
      {
        id: 1,
        title: 'הובלת דירות',
        image: flatImage,
        alt: 'שירותי הובלת דירות',
      },
      {
        id: 2,
        title: 'הובלת משרדים ועסקים',
        image: officeImage,
        alt: 'שירותי הובלת משרדים ועסקים',
      },
      {
        id: 3,
        title: 'פירוק והרכבת רהיטים',
        image: assemblyImage,
        alt: 'שירותי פירוק והרכבת רהיטים',
      },
      {
        id: 4,
        title: 'הובלות בכל הארץ',
        image: countryImage,
        alt: 'שירותי הובלה בכל רחבי הארץ',
      },
      {
        id: 5,
        title: 'ביטוח תכולה מלא',
        image: insuranceImage,
        alt: 'ביטוח תכולה בזמן ההובלה',
      },
      {
        id: 6,
        title: 'שירותי מנוף',
        image: craneImage,
        alt: 'שירותי הובלה באמצעות מנוף',
      },
    ],
  },

  ru: {
    title: 'Наши услуги',
    subtitle:
      'Профессиональные услуги по перевозке квартир и офисов',

    featuredService: {
      title: 'Упаковка домашних вещей в коробки',
      description:
        'Мы профессионально и безопасно упакуем всё содержимое вашего дома в коробки, чтобы ни одна вещь не повредилась. Самостоятельная упаковка может занять несколько долгих дней и сопровождаться сильным стрессом. Наша профессиональная команда сэкономит ваше время и использует подходящие методы работы и защитные материалы для сохранности имущества. Услуга выполняется опытными, надёжными и ответственными специалистами, которым можно полностью доверять. Вы можете спокойно заниматься своими делами — обо всём остальном позаботимся мы!',
      image: packingImage,
      alt: 'Профессиональная упаковка домашних вещей в коробки',
    },

    services: [
      {
        id: 1,
        title: 'Квартирные переезды',
        image: flatImage,
        alt: 'Услуги квартирного переезда',
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
        title: 'Перевозки по всей стране',
        image: countryImage,
        alt: 'Перевозки по всему Израилю',
      },
      {
        id: 5,
        title: 'Полное страхование имущества',
        image: insuranceImage,
        alt: 'Страхование имущества во время перевозки',
      },
      {
        id: 6,
        title: 'Услуги подъёмного крана',
        image: craneImage,
        alt: 'Перевозка и подъём имущества с помощью крана',
      },
    ],
  },

  en: {
    title: 'Our Services',
    subtitle:
      'Professional moving services for apartments and offices',

    featuredService: {
      title: 'Professional Home Packing Services',
      description:
        'We will professionally and safely pack the entire contents of your home into boxes, making sure that nothing gets damaged. Packing everything yourself can take several long days and cause a great deal of stress. Our professional team saves you valuable time and uses the correct working methods and protective materials to keep your belongings safe. The service is carried out by skilled, reliable and dedicated professionals you can fully trust. You can relax — we will take care of everything!',
      image: packingImage,
      alt: 'Professional home packing services',
    },

    services: [
      {
        id: 1,
        title: 'Apartment Moving',
        image: flatImage,
        alt: 'Professional apartment moving services',
      },
      {
        id: 2,
        title: 'Office and Business Moving',
        image: officeImage,
        alt: 'Office and business moving services',
      },
      {
        id: 3,
        title: 'Furniture Disassembly and Assembly',
        image: assemblyImage,
        alt: 'Furniture disassembly and assembly services',
      },
      {
        id: 4,
        title: 'Moving Across Israel',
        image: countryImage,
        alt: 'Moving services throughout Israel',
      },
      {
        id: 5,
        title: 'Full Property Insurance',
        image: insuranceImage,
        alt: 'Property insurance during transportation',
      },
      {
        id: 6,
        title: 'Crane Moving Services',
        image: craneImage,
        alt: 'Moving and lifting services using a crane',
      },
    ],
  },
};

export default function Services({ language = 'he' }) {
  const content =
    servicesTranslations[language] ??
    servicesTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  const {
    title: featuredTitle,
    description: featuredDescription,
    image: featuredImage,
    alt: featuredAlt,
  } = content.featuredService;

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

        <article className="featured-service">
          <div className="featured-service__icon-wrapper">
            <img
              className="featured-service__image"
              src={featuredImage}
              alt={featuredAlt}
              loading="lazy"
            />
          </div>

          <div className="featured-service__content">
            <h3 className="featured-service__title">
              {featuredTitle}
            </h3>

            <p className="featured-service__description">
              {featuredDescription}
            </p>
          </div>
        </article>

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