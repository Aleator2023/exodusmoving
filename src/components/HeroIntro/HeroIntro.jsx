import './HeroIntro.css';

const translations = {
  he: {
    title: 'הובלת דירות ומשרדים בכל הארץ',
  },

  ru: {
    title: 'Перевозка квартир и офисов по всему Израилю',
  },

  en: {
    title: 'Apartment and office moving across Israel',
  },
};

function HeroIntro({ language = 'he' }) {
  const text =
    translations[language] ?? translations.he;

  return (
    <section
      className="hero-intro"
      aria-labelledby="hero-intro-title"
    >
      <div className="hero-intro__container">
        <div
          className="hero-intro__decoration hero-intro__decoration--one"
          aria-hidden="true"
        />

        <div
          className="hero-intro__decoration hero-intro__decoration--two"
          aria-hidden="true"
        />

        <h1
          className="hero-intro__title"
          id="hero-intro-title"
        >
          {text.title}
        </h1>
      </div>
    </section>
  );
}

export default HeroIntro;