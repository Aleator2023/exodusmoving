import flatImage from '../../assets/services/flat.png';
import officeImage from '../../assets/services/ofice.png';
import assemblyImage from '../../assets/services/sborka.png';
import teamImage from '../../assets/services/garage.png';
import packingImage from '../../assets/services/upakovka.png';
import countryImage from '../../assets/services/allcountry.png';
import insuranceImage from '../../assets/services/bituah.png';
import experienceImage from '../../assets/services/10years.png';

import './Services.css';

const services = [
  {
    id: 1,
    title: 'הובלת תכולת דירות',
    image: flatImage,
    alt: 'הובלת תכולת דירות',
  },
  {
    id: 2,
    title: 'הובלת תכולת משרדים',
    image: officeImage,
    alt: 'הובלת תכולת משרדים',
  },
  {
    id: 3,
    title: 'פירוק והרכבת רהיטים',
    image: assemblyImage,
    alt: 'פירוק והרכבת רהיטים',
  },
  {
    id: 4,
    title: 'צוות מקצועי ומיומן',
    image: teamImage,
    alt: 'צוות מקצועי ומיומן',
  },
  {
    id: 5,
    title: 'אריזת הבית',
    image: packingImage,
    alt: 'שירותי אריזה מקצועיים',
  },
  {
    id: 6,
    title: 'הובלות במרכז הארץ',
    image: countryImage,
    alt: 'הובלות במרכז הארץ',
  },
  {
    id: 7,
    title: 'ביטוח סחורה',
    image: insuranceImage,
    alt: 'ביטוח סחורה בזמן ההובלה',
  },
  {
    id: 8,
    title: '10 שנות ניסיון',
    image: experienceImage,
    alt: 'עשר שנות ניסיון בתחום ההובלות',
  },
];

export default function Services() {
  return (
    <section className="services" id="services" dir="rtl">
      <div className="services__container">
        <h2 className="services__title">השירותים שלנו</h2>

        <p className="services__subtitle">
          שירותי הובלה מקצועיים לדירות ולמשרדים
        </p>

        <div className="services__grid">
          {services.map(({ id, title, image, alt }) => (
            <article className="service-card" key={id}>
              <div className="service-card__icon-wrapper">
                <img
                  className="service-card__image"
                  src={image}
                  alt={alt}
                />
              </div>

              <h3 className="service-card__title">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}