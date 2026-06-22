import { useEffect, useState } from 'react';

import truckImage from '../../assets/hero/truck-israel.jpg';
import packingImage from '../../assets/hero/packing-service.jpg';
import apartmentImage from '../../assets/hero/apartment-moving.jpg';
import furnitureImage from '../../assets/hero/razborka.jpg';
import craneImage from '../../assets/hero/kran.jpg';

import './HeroSlider.css';

const slidesTranslations = {
  he: [
    {
      id: 1,
      image: apartmentImage,
      title: 'הובלת דירות',
      description:
        'שירותי הובלת דירות מקצועיים, בטוחים ומהירים בכל רחבי ישראל.',
      alt: 'מובילים מקצועיים מעבירים רהיטים מדירה',
    },
    {
      id: 2,
      image: packingImage,
      title: 'שירותי אריזה',
      description:
        'אריזה מקצועית של רהיטים, כלי בית וחפצים אישיים בקרטונים.',
      alt: 'עובדי חברת הובלות אורזים חפצים בקרטונים',
    },
    {
      id: 3,
      image: furnitureImage,
      title: 'פירוק והרכבת רהיטים',
      description:
        'פירוק והרכבה מקצועיים של ארונות, מיטות ורהיטים מכל הסוגים.',
      alt: 'עובדי הובלה מפרקים ומרכיבים ארון בדירה',
    },
    {
      id: 4,
      image: craneImage,
      title: 'הובלות עם מנוף',
      description:
        'שירותי מנוף מקצועיים להעלאת רהיטים בבטחה לדירות בקומות גבוהות.',
      alt: 'מנוף מעלה ספה לדירה בקומה גבוהה',
    },
    {
      id: 5,
      image: truckImage,
      title: 'הובלות בכל הארץ',
      description:
        'שירותי הובלה מצפון הארץ ועד הדרום, במהירות ובאחריות.',
      alt: 'משאית הובלה נוסעת בכביש בישראל',
    },
  ],

  ru: [
    {
      id: 1,
      image: apartmentImage,
      title: 'Квартирные переезды',
      description:
        'Профессиональные, безопасные и быстрые квартирные переезды по всему Израилю',
      alt: 'Грузчики перевозят мебель из квартиры',
    },
    {
      id: 2,
      image: packingImage,
      title: 'Услуги упаковки',
      description:
        'Профессиональная упаковка мебели, домашних вещей и личных предметов в коробки',
      alt: 'Работники мувинговой компании упаковывают вещи',
    },
    {
      id: 3,
      image: furnitureImage,
      title: 'Разборка и сборка мебели',
      description:
        'Профессиональная разборка и сборка шкафов, кроватей и других видов мебели',
      alt: 'Работники разбирают и собирают шкаф',
    },
    {
      id: 4,
      image: craneImage,
      title: 'Перевозки с краном',
      description:
        'Профессиональные услуги крана для безопасного подъёма мебели на высокие этажи',
      alt: 'Кран поднимает диван в квартиру',
    },
    {
      id: 5,
      image: truckImage,
      title: 'Перевозки по всей стране',
      description:
        'Перевозки от севера Израиля до юга - быстро и ответственно',
      alt: 'Грузовой автомобиль едет по дороге в Израиле',
    },
  ],

  en: [
    {
      id: 1,
      image: apartmentImage,
      title: 'Apartment Moving',
      description:
        'Professional, safe and fast apartment moving services throughout Israel',
      alt: 'Professional movers transporting furniture',
    },
    {
      id: 2,
      image: packingImage,
      title: 'Packing Services',
      description:
        'Professional packing of furniture, household belongings and personal items',
      alt: 'Moving company workers packing belongings',
    },
    {
      id: 3,
      image: furnitureImage,
      title: 'Furniture Assembly',
      description:
        'Professional disassembly and assembly of wardrobes, beds and all types of furniture',
      alt: 'Movers assembling furniture in an apartment',
    },
    {
      id: 4,
      image: craneImage,
      title: 'Crane Moving Services',
      description:
        'Professional crane services for safely lifting furniture to high-floor apartments',
      alt: 'A crane lifting a sofa to a high-floor apartment',
    },
    {
      id: 5,
      image: truckImage,
      title: 'Moving Across Israel',
      description:
        'Moving services from northern Israel to the south, delivered quickly and responsibly',
      alt: 'Moving truck driving on a road in Israel',
    },
  ],
};

const interfaceTranslations = {
  he: {
    brand: 'אקסודוס הובלות',
    sectionLabel: 'אקסודוס הובלות',
    button: 'לקבלת הצעת מחיר',
    buttonLabel: 'לקבלת הצעת מחיר באמצעות WhatsApp',
    slidesLabel: 'בחירת שקופית',
    slideLabel: 'שקופית',
  },

  ru: {
    brand: 'Exodus Moving',
    sectionLabel: 'Exodus Moving',
    button: 'Получить предложение',
    buttonLabel: 'Получить предложение в WhatsApp',
    slidesLabel: 'Выбор слайда',
    slideLabel: 'Слайд',
  },

  en: {
    brand: 'Exodus Moving',
    sectionLabel: 'Exodus Moving',
    button: 'Get a Quote',
    buttonLabel: 'Get a quote via WhatsApp',
    slidesLabel: 'Select slide',
    slideLabel: 'Slide',
  },
};

const whatsappLink =
  'https://wa.me/972534309087?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%94%D7%95%D7%91%D7%9C%D7%94.';

function HeroSlider({ language = 'he' }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides =
    slidesTranslations[language] ?? slidesTranslations.he;

  const text =
    interfaceTranslations[language] ??
    interfaceTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    const sliderInterval = window.setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1
          ? 0
          : previousSlide + 1,
      );
    }, 5000);

    return () => {
      window.clearInterval(sliderInterval);
    };
  }, [slides.length]);

  return (
    <section
      id="home"
      className="hero-slider"
      aria-label={text.sectionLabel}
    >
      <div className="hero-slider__container">
        <div
          className="hero-slider__track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <article
              key={slide.id}
              className="hero-slider__slide"
            >
              <img
                className="hero-slider__image"
                src={slide.image}
                alt={slide.alt}
              />

              <div
                className="hero-slider__overlay"
                aria-hidden="true"
              />

              <div className="hero-slider__content-wrapper">
                <div
                  className="hero-slider__content"
                  dir={direction}
                >
                  <p className="hero-slider__brand">
                    {text.brand}
                  </p>

                  <h1 className="hero-slider__title">
                    {slide.title}
                  </h1>

                  <p className="hero-slider__description">
                    {slide.description}
                  </p>

                  <a
                    className="hero-slider__button"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={text.buttonLabel}
                  >
                    {text.button}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="hero-slider__dots"
          aria-label={text.slidesLabel}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`hero-slider__dot ${
                currentSlide === index
                  ? 'hero-slider__dot--active'
                  : ''
              }`}
              type="button"
              aria-label={`${text.slideLabel} ${index + 1}`}
              aria-current={
                currentSlide === index
                  ? 'true'
                  : undefined
              }
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;