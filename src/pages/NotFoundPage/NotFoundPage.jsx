import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <section className="page">
      <div className="container not-found">
        <p className="not-found__code">404</p>
        <h1 className="page-title">Страница не найдена</h1>

        <Link className="button button--primary" to="/">
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;