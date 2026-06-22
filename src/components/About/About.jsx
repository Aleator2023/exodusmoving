import {
  Award,
  ShieldCheck,
  Clock3,
  HeartHandshake,
} from 'lucide-react';

import movingImage from '../../assets/services/10years.png';

import './About.css';

const aboutTranslations = {
  he: {
    label: 'מי אנחנו?',
    title: 'חברת הובלות שאפשר לסמוך עליה',
    paragraphs: [
      'אקסודוס הובלות מספקת שירותי הובלה מקצועיים לדירות, משרדים ועסקים במרכז הארץ. אנחנו מלווים את הלקוחות שלנו לאורך כל התהליך — משלב התכנון והאריזה ועד להובלה, לפריקה ולהרכבת הרהיטים במקום החדש.',
      'המטרה שלנו היא להפוך כל מעבר לחוויה פשוטה, מסודרת ובטוחה. הצוות שלנו עובד בזהירות, באחריות ובשקיפות מלאה, תוך שמירה על הציוד ועל לוחות הזמנים שנקבעו מראש.',
    ],
    advantages: [
      {
        id: 1,
        Icon: Award,
        title: 'ניסיון ומקצועיות',
        description:
          'צוות מנוסה המבצע כל הובלה בצורה מקצועית, מסודרת ובטוחה.',
      },
      {
        id: 2,
        Icon: ShieldCheck,
        title: 'אחריות וביטחון',
        description:
          'אנחנו שומרים על הרכוש שלכם לאורך כל תהליך ההובלה.',
      },
      {
        id: 3,
        Icon: Clock3,
        title: 'עמידה בזמנים',
        description:
          'מגיעים בזמן ומבצעים את העבודה במהירות וללא עיכובים מיותרים.',
      },
      {
        id: 4,
        Icon: HeartHandshake,
        title: 'שירות אישי',
        description:
          'יחס אישי, הקשבה מלאה והתאמת השירות לצרכים שלכם.',
      },
    ],
    button: 'לקבלת הצעת מחיר',
    buttonLabel: 'לקבלת הצעת מחיר באמצעות WhatsApp',
    experience: 'שנות ניסיון',
  },

  ru: {
    label: '?Кто мы',
    title: 'Транспортная компания, которой можно доверять',
    paragraphs: [
      'Exodus Moving предоставляет профессиональные услуги по перевозке квартир, офисов и коммерческих помещений в центральной части Израиля. Мы сопровождаем клиентов на всех этапах - от планирования и упаковки до перевозки, разгрузки и сборки мебели на новом месте',
      'Наша цель - сделать каждый переезд простым, организованным и безопасным. Наша команда работает аккуратно, ответственно и прозрачно, заботясь о вашем имуществе и соблюдая заранее согласованные сроки',
    ],
    advantages: [
      {
        id: 1,
        Icon: Award,
        title: 'Опыт и профессионализм',
        description:
          'Опытная команда выполняет каждый переезд профессионально, организованно и безопасно',
      },
      {
        id: 2,
        Icon: ShieldCheck,
        title: 'Ответственность и безопасность',
        description:
          'Мы бережно относимся к вашему имуществу на всех этапах перевозки',
      },
      {
        id: 3,
        Icon: Clock3,
        title: 'Соблюдение сроков',
        description:
          'Приезжаем вовремя и выполняем работу быстро, без лишних задержек',
      },
      {
        id: 4,
        Icon: HeartHandshake,
        title: 'Индивидуальный подход',
        description:
          'Внимательно выслушиваем клиента и адаптируем услугу под его потребности',
      },
    ],
    button: 'Получить предложение',
    buttonLabel: 'Получить предложение через WhatsApp',
    experience: 'лет опыта',
  },

  en: {
    label: '?Who are we',
    title: 'A moving company you can trust',
    paragraphs: [
      'Exodus Moving provides professional moving services for apartments, offices and businesses in central Israel. We support our customers throughout the entire process - from planning and packing to transportation, unloading and furniture assembly at the new location',
      'Our goal is to make every move simple, organized and safe. Our team works carefully, responsibly and transparently while protecting your belongings and following the agreed schedule',
    ],
    advantages: [
      {
        id: 1,
        Icon: Award,
        title: 'Experience and professionalism',
        description:
          'Our experienced team completes every move professionally, efficiently and safely',
      },
      {
        id: 2,
        Icon: ShieldCheck,
        title: 'Responsibility and safety',
        description:
          'We protect your belongings throughout the entire moving process',
      },
      {
        id: 3,
        Icon: Clock3,
        title: 'On-time service',
        description:
          'We arrive on time and complete the work quickly without unnecessary delays',
      },
      {
        id: 4,
        Icon: HeartHandshake,
        title: 'Personal service',
        description:
          'We listen carefully and adapt our services to your individual needs',
      },
    ],
    button: 'Get a Quote',
    buttonLabel: 'Get a quote via WhatsApp',
    experience: 'years of experience',
  },
};

const whatsappLink =
  'https://wa.me/972534309087?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%94%D7%95%D7%91%D7%9C%D7%94.';

export default function About({ language = 'he' }) {
  const content =
    aboutTranslations[language] ?? aboutTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  return (
    <section
      className="about"
      id="about"
      dir={direction}
      aria-labelledby="about-title"
    >
      <div className="container about__container">
        <div className="about__content">
          <p className="about__label">
            {content.label}
          </p>

          <h2
            className="about__title"
            id="about-title"
          >
            {content.title}
          </h2>

          {content.paragraphs.map((paragraph) => (
            <p
              className="about__text"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}

          <div className="about__advantages">
            {content.advantages.map(
              ({
                id,
                Icon,
                title,
                description,
              }) => (
                <article
                  className="about-advantage"
                  key={id}
                >
                  <div className="about-advantage__icon">
                    <Icon
                      size={27}
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="about-advantage__content">
                    <h3 className="about-advantage__title">
                      {title}
                    </h3>

                    <p className="about-advantage__text">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>

          <a
            className="about__button"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.buttonLabel}
          >
            {content.button}
          </a>
        </div>

        <div
          className="about__visual"
          aria-hidden="true"
        >
          <div className="about__image-wrapper">
            <img
              className="about__image"
              src={movingImage}
              alt=""
            />
          </div>

          <div className="about__experience">
            <strong>10+</strong>
            <span>{content.experience}</span>
          </div>
        </div>
      </div>
    </section>
  );
}