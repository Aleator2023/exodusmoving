import packingIcon from '../../assets/icons/packing-services.png';
import assemblyIcon from '../../assets/icons/furniture-assembly.png';
import singleItemIcon from '../../assets/icons/movers-carrying-wrapped-furniture.png';
import studioIcon from '../../assets/icons/studio-apartment.png';
import apartmentIcon from '../../assets/icons/apartment-moving.png';
import buildingIcon from '../../assets/icons/office-moving.png';
import pianoIcon from '../../assets/icons/piano-moving.png';
import truckRentalIcon from '../../assets/icons/truck-rental-with-driver.png';

import './Prices.css';
import { whatsappLink } from '../../data/whatsapp';

const pricesTranslations = {
  he: {
    label: 'מחירים הוגנים ושקופים',
    title: 'מחירון הובלות',
    intro: 'מחירים התחלתיים לשירותי ההובלה הנפוצים ביותר',
    from: 'החל מ־',
    currencyLabel: 'שקלים',
    saleLabel: 'מחיר מבצע',
    note:
      '* המחיר הסופי נקבע לפי כמות התכולה, המרחק, הקומה, הגישה לבניין ושירותים נוספים.',
    button: 'לקבלת הצעת מחיר',
    buttonLabel: 'לקבלת הצעת מחיר באמצעות WhatsApp',
    locale: 'he-IL',

    items: [
      {
        id: 1,
        icon: packingIcon,
        title: 'שירותי אריזת הבית',
        oldPrice: 40,
        price: 35,
        suffix: 'לארגז',
        isSale: true,
      },
      {
        id: 2,
        icon: assemblyIcon,
        title: 'פירוק והרכבת רהיטים',
        price: 150,
      },
      {
        id: 3,
        icon: singleItemIcon,
        title: 'הובלת פריט בודד',
        price: 300,
      },
      {
        id: 9,
        icon: truckRentalIcon,
        title: 'השכרת משאית עם נהג',
        price: 300,
        suffix: 'לשעה',
      },
      {
        id: 10,
        icon: pianoIcon,
        title: 'הובלת פסנתר',
        price: 600,
      },
      {
        id: 4,
        icon: studioIcon,
        title: 'דירת חדר / סטודיו',
        price: 1000,
      },
      {
        id: 5,
        icon: apartmentIcon,
        title: 'דירת 2 חדרים',
        price: 1800,
      },
      {
        id: 6,
        icon: apartmentIcon,
        title: 'דירת 3 חדרים',
        price: 2600,
      },
      {
        id: 7,
        icon: buildingIcon,
        title: 'דירת 4 חדרים',
        price: 3400,
      },
      {
        id: 8,
        icon: buildingIcon,
        title: 'דירת 5 חדרים',
        price: 4200,
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
    saleLabel: 'Акционная цена',
    note:
      '* Окончательная цена зависит от объёма имущества, расстояния, этажа, доступа к зданию и дополнительных услуг.',
    button: 'Получить предложение',
    buttonLabel: 'Получить предложение через WhatsApp',
    locale: 'ru-RU',

    items: [
      {
        id: 1,
        icon: packingIcon,
        title: 'Упаковка домашних вещей',
        oldPrice: 40,
        price: 35,
        suffix: 'за коробку',
        isSale: true,
      },
      {
        id: 2,
        icon: assemblyIcon,
        title: 'Разборка и сборка мебели',
        price: 150,
      },
      {
        id: 3,
        icon: singleItemIcon,
        title: 'Перевозка одного предмета',
        price: 300,
      },
      {
        id: 9,
        icon: truckRentalIcon,
        title: 'Аренда грузовика с водителем',
        price: 300,
        suffix: 'в час',
      },
      {
        id: 10,
        icon: pianoIcon,
        title: 'Перевозка пианино',
        price: 600,
      },
      {
        id: 4,
        icon: studioIcon,
        title: 'Однокомнатная квартира / студия',
        price: 1000,
      },
      {
        id: 5,
        icon: apartmentIcon,
        title: 'Двухкомнатная квартира',
        price: 1800,
      },
      {
        id: 6,
        icon: apartmentIcon,
        title: 'Трёхкомнатная квартира',
        price: 2600,
      },
      {
        id: 7,
        icon: buildingIcon,
        title: 'Четырёхкомнатная квартира',
        price: 3400,
      },
      {
        id: 8,
        icon: buildingIcon,
        title: 'Пятикомнатная квартира',
        price: 4200,
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
    saleLabel: 'Special price',
    note:
      '* The final price depends on the volume of belongings, distance, floor, building access and additional services.',
    button: 'Get a Quote',
    buttonLabel: 'Get a quote via WhatsApp',
    locale: 'en-US',

    items: [
      {
        id: 1,
        icon: packingIcon,
        title: 'Home Packing Services',
        oldPrice: 40,
        price: 35,
        suffix: 'per box',
        isSale: true,
      },
      {
        id: 2,
        icon: assemblyIcon,
        title: 'Furniture Disassembly and Assembly',
        price: 150,
      },
      {
        id: 3,
        icon: singleItemIcon,
        title: 'Single Item Move',
        price: 300,
      },
      {
        id: 9,
        icon: truckRentalIcon,
        title: 'Truck Rental with Driver',
        price: 300,
        suffix: 'per hour',
      },
      {
        id: 10,
        icon: pianoIcon,
        title: 'Piano Moving',
        price: 600,
      },
      {
        id: 4,
        icon: studioIcon,
        title: 'One-Room Apartment / Studio',
        price: 1000,
      },
      {
        id: 5,
        icon: apartmentIcon,
        title: 'Two-Room Apartment',
        price: 1800,
      },
      {
        id: 6,
        icon: apartmentIcon,
        title: 'Three-Room Apartment',
        price: 2600,
      },
      {
        id: 7,
        icon: buildingIcon,
        title: 'Four-Room Apartment',
        price: 3400,
      },
      {
        id: 8,
        icon: buildingIcon,
        title: 'Five-Room Apartment',
        price: 4200,
      },
    ],
  },
};

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
              icon,
              title,
              oldPrice,
              price,
              suffix,
              isSale,
            }) => (
              <article
                className={`price-card${
                  isSale ? ' price-card--sale' : ''
                }`}
                key={id}
              >
                {isSale && (
                  <span className="price-card__sale-label">
                    {content.saleLabel}
                  </span>
                )}

                <div className="price-card__icon">
                  <img
                    className="price-card__icon-image"
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>

                <div className="price-card__content">
                  <h3 className="price-card__title">
                    {title}
                  </h3>
                </div>

                <div className="price-card__price">
                  {!isSale && (
                    <span className="price-card__from">
                      {content.from}
                    </span>
                  )}

                  {oldPrice && (
                    <span
                      className="price-card__old-price"
                      aria-label={`${oldPrice} ${content.currencyLabel}`}
                    >
                      <bdi>
                        {oldPrice.toLocaleString(
                          content.locale,
                        )}
                      </bdi>

                      <span aria-hidden="true"> ₪</span>
                    </span>
                  )}

                  <strong className="price-card__current-price">
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
            href={whatsappLink(language)}
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
