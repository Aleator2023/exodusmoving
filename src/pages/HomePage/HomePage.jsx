import { Link } from 'react-router';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__content">
          <p className="hero__eyebrow">Перевозки по всему Израилю</p>

          <h1 className="hero__title">
            Переезд без лишнего стресса
          </h1>

          <p className="hero__description">
            Организуем квартирные и офисные переезды, доставку мебели,
            упаковку и аккуратную погрузку ваших вещей.
          </p>

          <div className="hero__actions">
            <Link className="button button--primary" to="/contacts">
              Рассчитать стоимость
            </Link>

            <Link className="button button--secondary" to="/services">
              Наши услуги
            </Link>
          </div>
        </div>
      </section>

      <section className="page">
        <div className="container">
          <h2 className="section-title">Почему выбирают нас</h2>

          <div className="advantages">
            <article className="card">
              <h3>Аккуратная работа</h3>
              <p>
                Бережно упаковываем, переносим и перевозим имущество.
              </p>
            </article>

            <article className="card">
              <h3>Понятная стоимость</h3>
              <p>
                Обсуждаем объём работы и цену до начала перевозки.
              </p>
            </article>

            <article className="card">
              <h3>По всему Израилю</h3>
              <p>
                Работаем в центре, на севере и на юге страны.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;