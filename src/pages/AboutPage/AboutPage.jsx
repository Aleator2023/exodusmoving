function AboutPage() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">О компании</h1>

        <p className="page-description">
          Exodus Moving помогает частным клиентам и компаниям организовывать
          безопасные и удобные переезды по Израилю.
        </p>

        <div className="text-content">
          <h2>Наша задача</h2>

          <p>
            Сделать переезд понятным и спокойным: заранее обсудить детали,
            приехать вовремя и бережно доставить вещи.
          </p>

          <h2>Как мы работаем</h2>

          <p>
            Вы сообщаете адреса, дату, этажи, наличие лифта и примерный объём
            имущества. После этого мы согласовываем состав работ и стоимость.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;