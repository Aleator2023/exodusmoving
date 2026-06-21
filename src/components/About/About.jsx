import {
  Award,
  ShieldCheck,
  Clock3,
  HeartHandshake,
} from 'lucide-react';

import movingImage from '../../assets/services/10years.png';

import './About.css';

const advantages = [
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
];

export default function About() {


  return (
    <section
      className="about"
      id="about"
      dir="rtl"
      aria-labelledby="about-title"
    >
      <div className="container about__container">
        <div className="about__content">
          <p className="about__label">
            מי אנחנו?
          </p>

          <h2
            className="about__title"
            id="about-title"
          >
            חברת הובלות שאפשר לסמוך עליה
          </h2>

          <p className="about__text">
            אקסודוס הובלות מספקת שירותי הובלה מקצועיים
            לדירות, משרדים ועסקים במרכז הארץ. אנחנו
            מלווים את הלקוחות שלנו לאורך כל התהליך —
            משלב התכנון והאריזה ועד להובלה, לפריקה
            ולהרכבת הרהיטים במקום החדש.
          </p>

          <p className="about__text">
            המטרה שלנו היא להפוך כל מעבר לחוויה פשוטה,
            מסודרת ובטוחה. הצוות שלנו עובד בזהירות,
            באחריות ובשקיפות מלאה, תוך שמירה על הציוד
            ועל לוחות הזמנים שנקבעו מראש.
          </p>

          <div className="about__advantages">
            {advantages.map(
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

  href="https://wa.me/972534309087?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%94%D7%95%D7%91%D7%9C%D7%94."

  target="_blank"

  rel="noopener noreferrer"

  aria-label="לקבלת הצעת מחיר באמצעות WhatsApp"

>

  לקבלת הצעת מחיר

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
            <span>שנות ניסיון</span>
          </div>
        </div>
      </div>
    </section>
  );
}