const services = [
  {
    title: 'Квартирные переезды',
    description:
      'Полная организация переезда квартиры, включая погрузку и разгрузку.',
  },
  {
    title: 'Офисные переезды',
    description:
      'Перевозка мебели, техники, документов и рабочих мест.',
  },
  {
    title: 'Перевозка мебели',
    description:
      'Доставка шкафов, кроватей, диванов, столов и другой мебели.',
  },
  {
    title: 'Упаковка вещей',
    description:
      'Упаковочные материалы и подготовка имущества к безопасной перевозке.',
  },
];

function ServicesPage() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Наши услуги</h1>

        <p className="page-description">
          Помогаем организовать переезд полностью или выполнить отдельную
          часть работы.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;