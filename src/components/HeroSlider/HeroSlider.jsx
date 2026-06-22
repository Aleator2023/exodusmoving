import { useEffect, useState } from 'react';

import truckImage from '../../assets/hero/truck-israel.jpg';
import packingImage from '../../assets/hero/packing-service.jpg';
import apartmentImage from '../../assets/hero/apartment-moving.jpg';
import furnitureImage from '../../assets/hero/razborka.jpg';
import craneImage from '../../assets/hero/kran.jpg';

import './HeroSlider.css';

const slides = [
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
    alt: 'מנוף עם משטח מיוחד מעלה ספה לדירה בקומה גבוהה',
  },
  {
    id: 5,
    image: truckImage,
    title: 'הובלות בכל הארץ',
    description:
      'שירותי הובלה מצפון הארץ ועד הדרום, במהירות ובאחריות.',
    alt: 'משאית הובלה נוסעת בכביש בישראל',
  },
];

const whatsappLink =
  'https://wa.me/972534309087?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%94%D7%95%D7%91%D7%9C%D7%94.';

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  }, []);



  return (
    <section
      id="home"
      className="hero-slider"
      aria-label="אקסודוס הובלות"
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
                  dir="rtl"
                >
                  <p className="hero-slider__brand">
                    אקסודוס הובלות
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
                    aria-label="לקבלת הצעת מחיר באמצעות WhatsApp"
                  >
                    לקבלת הצעת מחיר
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="hero-slider__dots"
          aria-label="בחירת שקופית"
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
              aria-label={`שקופית ${index + 1}`}
              aria-current={
                currentSlide === index ? 'true' : undefined
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