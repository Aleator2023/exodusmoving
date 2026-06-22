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

const pricesTranslations = {
  he: {
    label: 'מחירים הוגנים ושקופים',
    title: 'מחירון הובלות',
    intro: 'מחירים התחלתיים לשירותי ההובלה הנפוצים ביותר',
    from: 'החל מ־',
    currencyLabel: 'שקלים',
    note:
      '* המחיר הסופי נקבע לפי כמות התכולה, המרחק, הקומה, הגישה לבניין ושירותים נוספים.',
    button: 'לקבלת הצעת מחיר',
    buttonLabel: 'לקבלת הצעת מחיר באמצעות WhatsApp',
    locale: 'he-IL',
    items: [
      {
        id: 1,
        Icon: Package,
        title: 'הובלה קטנה',
        description: 'פריט בודד או מספר פריטים',
        price: 300,
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
        title: 'שירותי מנוף – עד קומה 4',
        description: 'תוספת עבור שעת עבודה',
        price: 500,
        suffix: 'לשעה',
      },
    ],
  },

  ru: {
    label: 'Честные и прозрачные цены',
    title: 'Цены на перевозки',
    intro:
      'Начальные цены на самые популярные услуги по перевозке',
    from: 'от',
    currencyLabel: 'шекелей',
    note:
      '* Окончательная цена зависит от объёма имущества, расстояния, этажа, доступа к зданию и дополнительных услуг',
    button: 'Получить предложение',
    buttonLabel: 'Получить предложение через WhatsApp',
    locale: 'ru-RU',
    items: [
      {
        id: 1,
        Icon: Package,
        title: 'Небольшая перевозка',
        description: 'Один предмет или несколько вещей',
        price: 300,
      },
      {
        id: 2,
        Icon: BedSingle,
        title: 'Однокомнатная квартира / студия',
        description: 'Основные вещи и до 20 коробок',
        price: 500,
      },
      {
        id: 3,
        Icon: DoorOpen,
        title: 'Двухкомнатная квартира',
        description: 'Гостиная, спальня и бытовая техника',
        price: 1000,
      },
      {
        id: 4,
        Icon: House,
        title: 'Трёхкомнатная квартира',
        description: 'Содержимое квартиры и до 35 коробок',
        price: 1500,
      },
      {
        id: 5,
        Icon: Building2,
        title: 'Четырёхкомнатная квартира',
        description: 'Гостиная и три спальни',
        price: 1800,
      },
      {
        id: 6,
        Icon: Warehouse,
        title: 'Пятикомнатная квартира',
        description: 'Большая квартира и до 45 коробок',
        price: 2000,
      },
      {
        id: 7,
        Icon: Wrench,
        title: 'Разборка и сборка мебели',
        description: 'В зависимости от типа и размера мебели',
        price: 180,
      },
      {
        id: 8,
        Icon: Construction,
        title: 'Услуги крана - до 4 этажа',
        description: 'Доплата за один час работы',
        price: 500,
        suffix: 'в час',
      },
    ],
  },

  en: {
    label: 'Fair and transparent pricing',
    title: 'Moving Prices',
    intro:
      'Starting prices for our most popular moving services',
    from: 'from',
    currencyLabel: 'shekels',
    note:
      '* The final price depends on the volume of belongings, distance, floor, building access and additional services',
    button: 'Get a Quote',
    buttonLabel: 'Get a quote via WhatsApp',
    locale: 'en-US',
    items: [
      {
        id: 1,
        Icon: Package,
        title: 'Small Move',
        description: 'One item or several belongings',
        price: 300,
      },
      {
        id: 2,
        Icon: BedSingle,
        title: 'One-Room Apartment / Studio',
        description: 'Basic belongings and up to 20 boxes',
        price: 500,
      },
      {
        id: 3,
        Icon: DoorOpen,
        title: 'Two-Room Apartment',
        description: 'Living room, bedroom and appliances',
        price: 1000,
      },
      {
        id: 4,
        Icon: House,
        title: 'Three-Room Apartment',
        description: 'Apartment contents and up to 35 boxes',
        price: 1500,
      },
      {
        id: 5,
        Icon: Building2,
        title: 'Four-Room Apartment',
        description: 'Living room and three bedrooms',
        price: 1800,
      },
      {
        id: 6,
        Icon: Warehouse,
        title: 'Five-Room Apartment',
        description: 'Large apartment and up to 45 boxes',
        price: 2000,
      },
      {
        id: 7,
        Icon: Wrench,
        title: 'Furniture Assembly',
        description:
          'Depending on the type and size of the furniture',
        price: 180,
      },
      {
        id: 8,
        Icon: Construction,
        title: 'Crane Services - Up to Floor 4',
        description: 'Additional charge per working hour',
        price: 500,
        suffix: 'per hour',
      },
    ],
  },
};

const whatsappLink =
  'https://wa.me/972534309087?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9E%D7%93%D7%95%D7%99%D7%A7%D7%AA%20%D7%9C%D7%94%D7%95%D7%91%D7%9C%D7%94.';

export default function Prices({ language = 'he' }) {
  const content =
    pricesTranslations[language] ?? pricesTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  return (
    <section
      className="prices"
      id="prices"
      dir={direction}
      aria-labelledby="prices-title"
    >
      <div className="container prices__container">
        <header className="prices__heading">
          <div>
            <p className="prices__label">
              {content.label}
            </p>

            <h2
              className="prices__title"
              id="prices-title"
            >
              {content.title}
            </h2>
          </div>

          <p className="prices__intro">
            {content.intro}
          </p>
        </header>

        <div className="prices__grid">
          {content.items.map(
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
                    {content.from}
                  </span>

                  <strong>
                    <bdi>
                      {price.toLocaleString(content.locale)}
                    </bdi>

                    <span aria-label={content.currencyLabel}>
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
            {content.note}
          </p>

          <a
            className="prices__button"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.buttonLabel}
          >
            {content.button}
          </a>
        </footer>
      </div>
    </section>
  );
}