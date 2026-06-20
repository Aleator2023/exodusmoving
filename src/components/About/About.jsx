import {
  Award,
  ShieldCheck,
  Clock3,
  HeartHandshake,
} from 'lucide-react';

import movingImage from '../../assets/services/flat.png';

import './About.css';

const advantages = [
  {
    id: 1,
    Icon: Award,
    title: 'ניסיון ומקצועיות',
    description: 'צוות מנוסה המבצע כל הובלה בצורה מקצועית, מסודרת ובטוחה.',
  },
  {
    id: 2,
    Icon: ShieldCheck,
    title: 'אחריות וביטחון',
    description: 'אנחנו שומרים על הרכוש שלכם לאורך כל תהליך ההובלה.',
  },
  {
    id: 3,
    Icon: Clock3,
    title: 'עמידה בזמנים',
    description: 'מגיעים בזמן ומבצעים את העבודה במהירות וללא עיכובים מיותרים.',
  },
  {
    id: 4,
    Icon: HeartHandshake,
    title: 'שירות אישי',
    description: 'יחס אישי, הקשבה מלאה והתאמת השירות לצרכים שלכם.',
  },
];

export default function About() {
  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about" id="about" dir="rtl">
      <div className="about__container">
        <div className="about__content">
          <p className="about__label">מי אנחנו?</p>

          <h2 className="about__title">
            חברת הובלות שאפשר לסמוך עליה
          </h2>

          <p className="about__text">
            Exodus Moving מספקת שירותי הובלה מקצועיים לדירות,
            משרדים ועסקים במרכז הארץ. אנחנו מלווים את הלקוחות
            שלנו לאורך כל התהליך — משלב התכנון והאריזה ועד
            להובלה, לפריקה ולהרכבת הרהיטים במקום החדש.
          </p>

          <p className="about__text">
            המטרה שלנו היא להפוך כל מעבר לחוויה פשוטה,
            מסודרת ובטוחה. הצוות שלנו עובד בזהירות,
            באחריות ובשקיפות מלאה, תוך שמירה על הציוד
            ועל לוחות הזמנים שנקבעו מראש.
          </p>

          <div className="about__advantages">
            {advantages.map(({ id, Icon, title, description }) => (
              <article className="about-advantage" key={id}>
                <div className="about-advantage__icon">
                  <Icon size={27} strokeWidth={2.2} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="about-advantage__title">{title}</h3>
                  <p className="about-advantage__text">{description}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            className="about__button"
            type="button"
            onClick={scrollToContact}
          >
            לקבלת הצעת מחיר
          </button>
        </div>

        <div className="about__visual" aria-hidden="true">
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