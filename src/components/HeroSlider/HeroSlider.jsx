import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

import truckImage from '../../assets/hero/truck-lake-road.webp';
import packingImage from '../../assets/hero/packing-globe.webp';
import apartmentImage from '../../assets/hero/movers-carrying-sofa.webp';
import furnitureImage from '../../assets/hero/furniture-assembly-drill.webp';
import craneImage from '../../assets/hero/crane-lifting-sofa.webp';
import './HeroSlider.css';
import { whatsappLink } from '../../data/whatsapp';

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
    pause: 'עצירת החלפת השקופיות',
    play: 'הפעלת החלפת השקופיות',
  },

  ru: {
    brand: 'Exodus Moving',
    sectionLabel: 'Exodus Moving',
    button: 'Получить предложение',
    buttonLabel: 'Получить предложение в WhatsApp',
    slidesLabel: 'Выбор слайда',
    slideLabel: 'Слайд',
    pause: 'Остановить смену слайдов',
    play: 'Включить смену слайдов',
  },

  en: {
    brand: 'Exodus Moving',
    sectionLabel: 'Exodus Moving',
    button: 'Get a Quote',
    buttonLabel: 'Get a quote via WhatsApp',
    slidesLabel: 'Select slide',
    slideLabel: 'Slide',
    pause: 'Pause slideshow',
    play: 'Play slideshow',
  },
};

function HeroSlider({ language = 'he' }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay can be paused by the button, by hover/keyboard focus,
  // and is off for visitors who prefer reduced motion.
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isAutoplayActive =
    !isPausedByUser && !isInteracting && !prefersReducedMotion;

  const slides =
    slidesTranslations[language] ?? slidesTranslations.he;

  const text =
    interfaceTranslations[language] ??
    interfaceTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (!isAutoplayActive) {
      return undefined;
    }

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
  }, [slides.length, isAutoplayActive]);

  return (
    <section
      id="home"
      className="hero-slider"
      aria-label={text.sectionLabel}
    >
      <div
        className="hero-slider__container"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocus={() => setIsInteracting(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsInteracting(false);
          }
        }}
      >
        <div
          className="hero-slider__track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <article
              key={slide.id}
              className="hero-slider__slide"
              aria-hidden={index !== currentSlide}
              inert={index !== currentSlide}
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

                  <h2 className="hero-slider__title">
                    {slide.title}
                  </h2>

                  <p className="hero-slider__description">
                    {slide.description}
                  </p>

                  <a
                    className="hero-slider__button"
                    href={whatsappLink(language)}
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
          role="group"
          aria-label={text.slidesLabel}
        >
          <button
            className="hero-slider__pause"
            type="button"
            aria-label={isPausedByUser ? text.play : text.pause}
            aria-pressed={isPausedByUser}
            onClick={() =>
              setIsPausedByUser((currentValue) => !currentValue)
            }
          >
            {isPausedByUser ? (
              <Play size={14} fill="currentColor" aria-hidden="true" />
            ) : (
              <Pause size={14} fill="currentColor" aria-hidden="true" />
            )}
          </button>

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
