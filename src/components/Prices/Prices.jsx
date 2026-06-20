import {
  Package,
  BedSingle,
  DoorOpen,
  House,
  Building2,
  Warehouse,
  Wrench,
  Construction,
} from 'lucide-react';

import './Prices.css';

const prices = [
  {
    id: 1,
    Icon: Package,
    title: 'הובלה קטנה',
    description: 'פריט בודד או מספר פריטים',
    price: 340,
  },
  {
    id: 2,
    Icon: BedSingle,
    title: 'דירת חדר / סטודיו',
    description: 'תכולה בסיסית ועד 20 קרטונים',
    price: 500,
  },
  {
    id: 3,
    Icon: DoorOpen,
    title: 'דירת 2 חדרים',
    description: 'סלון, חדר שינה ומוצרי חשמל',
    price: 1000,
  },
  {
    id: 4,
    Icon: House,
    title: 'דירת 3 חדרים',
    description: 'תכולת דירה ועד 35 קרטונים',
    price: 1500,
  },
  {
    id: 5,
    Icon: Building2,
    title: 'דירת 4 חדרים',
    description: 'סלון ושלושה חדרי שינה',
    price: 1800,
  },
  {
    id: 6,
    Icon: Warehouse,
    title: 'דירת 5 חדרים',
    description: 'דירה גדולה ועד 45 קרטונים',
    price: 2000,
  },
  {
    id: 7,
    Icon: Wrench,
    title: 'פירוק והרכבת רהיטים',
    description: 'בהתאם לסוג ולגודל הרהיט',
    price: 180,
  },
  {
    id: 8,
    Icon: Construction,
    title: 'שירותי מנוף',
    description: 'תוספת עבור שעת עבודה',
    price: 270,
    suffix: 'לשעה',
  },
];

export default function Prices() {
  const scrollToContacts = () => {
    document
      .getElementById('contacts')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  };

  return (
    <section
      className="prices"
      id="prices"
      dir="rtl"
      aria-labelledby="prices-title"
    >
      <div className="container prices__container">
        <header className="prices__heading">
          <div>
            <p className="prices__label">
              מחירים הוגנים ושקופים
            </p>

            <h2
              className="prices__title"
              id="prices-title"
            >
              מחירון הובלות
            </h2>
          </div>

          <p className="prices__intro">
            מחירים התחלתיים לשירותי ההובלה הנפוצים ביותר
          </p>
        </header>

        <div className="prices__grid">
          {prices.map(
            ({
              id,
              Icon,
              title,
              description,
              price,
              suffix,
            }) => (
              <article
                className="price-card"
                key={id}
              >
                <div className="price-card__icon">
                  <Icon
                    size={27}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <div className="price-card__content">
                  <h3 className="price-card__title">
                    {title}
                  </h3>

                  <p className="price-card__description">
                    {description}
                  </p>
                </div>

                <div className="price-card__price">
                  <span className="price-card__from">
                    החל מ־
                  </span>

                  <strong>
                    <bdi>
                      {price.toLocaleString('he-IL')}
                    </bdi>

                    <span aria-label="שקלים">
                      {' '}
                      ₪
                    </span>
                  </strong>

                  {suffix && (
                    <small className="price-card__suffix">
                      {suffix}
                    </small>
                  )}
                </div>
              </article>
            ),
          )}
        </div>

        <footer className="prices__footer">
          <p className="prices__note">
            * המחיר הסופי נקבע לפי כמות התכולה, המרחק,
            הקומה, הגישה לבניין ושירותים נוספים.
          </p>

<a

  className="prices__button"

  href="https://wa.me/972534309087?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9E%D7%93%D7%95%D7%99%D7%A7%D7%AA%20%D7%9C%D7%94%D7%95%D7%91%D7%9C%D7%94."

  target="_blank"

  rel="noopener noreferrer"

  aria-label="לקבלת הצעת מחיר   WhatsApp"

>

  לקבלת הצעת מחיר 

</a>
        </footer>
      </div>
    </section>
  );
}