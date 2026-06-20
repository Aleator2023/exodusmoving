function ContactsPage() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Контакты</h1>

        <p className="page-description">
          Свяжитесь с нами, чтобы обсудить дату, маршрут и объём перевозки.
        </p>

        <div className="contact-card">
          <p>
            <strong>Телефон:</strong>{' '}
            <a href="tel:+972501234567">050-123-45-67</a>
          </p>

          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@exodusmoving.co.il">
              info@exodusmoving.co.il
            </a>
          </p>

          <p>
            <strong>Часы работы:</strong> ежедневно, 08:00–20:00
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactsPage;