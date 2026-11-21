import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

import { LEGAL_HASHES } from '../LegalDialog/legalContent';

import './LeadPopup.css';
import { whatsappGreeting, whatsappLink } from '../../data/whatsapp';
import { trackEvent } from '../../analytics';

const leadPopupTranslations = {
  he: {
    title: 'מתכננים מעבר?',
    intro:
      'השאירו פרטים ונחזור אליכם עם הצעת מחיר מסודרת.',
    namePlaceholder: 'שם מלא',
    phonePlaceholder: 'מספר טלפון',
    dateLabel: 'תאריך הובלה',
    button: 'שליחת פרטים ב-WhatsApp',
    closeLabel: 'סגירת חלון',
    nameError: 'יש להזין שם',
    phoneError: 'יש להזין מספר טלפון',
    dateError: 'יש לבחור תאריך הובלה',
    nameText: 'שם',
    phoneText: 'טלפון',
    dateText: 'תאריך הובלה',
    consentBefore: 'בשליחת הפרטים אני מאשר/ת את ',
    consentLink: 'מדיניות הפרטיות',
  },

  ru: {
    title: 'Планируете переезд?',
    intro:
      'Оставьте имя, телефон и дату перевозки, и мы получим заявку в WhatsApp.',
    namePlaceholder: 'Ваше имя',
    phonePlaceholder: 'Телефон',
    dateLabel: 'Дата перевозки',
    button: 'Отправить в WhatsApp',
    closeLabel: 'Закрыть окно',
    nameError: 'Введите имя',
    phoneError: 'Введите телефон',
    dateError: 'Выберите дату перевозки',
    nameText: 'Имя',
    phoneText: 'Телефон',
    dateText: 'Дата перевозки',
    consentBefore: 'Отправляя данные, я соглашаюсь с ',
    consentLink: 'политикой конфиденциальности',
  },

  en: {
    title: 'Planning a move?',
    intro:
      'Leave your name, phone number and moving date, and we will receive your request on WhatsApp.',
    namePlaceholder: 'Full name',
    phonePlaceholder: 'Phone number',
    dateLabel: 'Moving date',
    button: 'Send via WhatsApp',
    closeLabel: 'Close popup',
    nameError: 'Please enter your name',
    phoneError: 'Please enter your phone number',
    dateError: 'Please choose a moving date',
    nameText: 'Name',
    phoneText: 'Phone',
    dateText: 'Moving date',
    consentBefore: 'By sending your details you agree to our ',
    consentLink: 'privacy policy',
  },
};


export default function LeadPopup({ language = 'he' }) {
  const content =
    leadPopupTranslations[language] ?? leadPopupTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  const [isOpen, setIsOpen] = useState(false);
  const [wasShown, setWasShown] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    movingDate: '',
  });

  const [errors, setErrors] = useState({});

  const firstFieldRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wasShown) {
        return;
      }

      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const windowHeight = window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

      const distanceFromBottom =
        documentHeight - (scrollTop + windowHeight);

      if (distanceFromBottom < 350) {
        setIsOpen(true);
        setWasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [wasShown]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lead-popup-open');
      firstFieldRef.current?.focus();

      const handleEscape = (event) => {
        // The legal dialog handles Escape itself when it is open on top
        if (
          event.key === 'Escape' &&
          !document.body.classList.contains('legal-dialog-open')
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.classList.remove('lead-popup-open');
      };
    } else {
      document.body.classList.remove('lead-popup-open');
    }

    return () => {
      document.body.classList.remove('lead-popup-open');
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = content.nameError;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = content.phoneError;
    }

    if (!formData.movingDate) {
      newErrors.movingDate = content.dateError;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = `${whatsappGreeting(language)}

${content.nameText}: ${formData.name}
${content.phoneText}: ${formData.phone}
${content.dateText}: ${formData.movingDate}`;

    const whatsappUrl =
      whatsappLink(language, message);

    trackEvent('lead_form_submit', { link_location: 'lead-popup' });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="lead-popup"
      dir={direction}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      <button
        className="lead-popup__overlay"
        type="button"
        aria-label={content.closeLabel}
        onClick={handleClose}
      />

      <div className="lead-popup__card">
        <button
          className="lead-popup__close"
          type="button"
          aria-label={content.closeLabel}
          onClick={handleClose}
        >
          <X
            size={22}
            strokeWidth={2.4}
            aria-hidden="true"
          />
        </button>

        <div className="lead-popup__header">
          <h2
            className="lead-popup__title"
            id="lead-popup-title"
          >
            {content.title}
          </h2>

          <p className="lead-popup__intro">
            {content.intro}
          </p>
        </div>

        <form
          className="lead-popup__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="lead-popup__field">
            <input
              ref={firstFieldRef}
              className="lead-popup__input"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.namePlaceholder}
              aria-label={content.namePlaceholder}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'lead-name-error' : undefined}
            />

            {errors.name && (
              <span
                className="lead-popup__error"
                id="lead-name-error"
                role="alert"
              >
                {errors.name}
              </span>
            )}
          </div>

          <div className="lead-popup__field">
            <input
              className="lead-popup__input"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={content.phonePlaceholder}
              aria-label={content.phonePlaceholder}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
            />

            {errors.phone && (
              <span
                className="lead-popup__error"
                id="lead-phone-error"
                role="alert"
              >
                {errors.phone}
              </span>
            )}
          </div>

          <div className="lead-popup__field">
            <label
              className="lead-popup__label"
              htmlFor="lead-moving-date"
            >
              {content.dateLabel}
            </label>

            <input
              id="lead-moving-date"
              className="lead-popup__input"
              type="date"
              name="movingDate"
              value={formData.movingDate}
              onChange={handleChange}
              aria-invalid={Boolean(errors.movingDate)}
              aria-describedby={
                errors.movingDate ? 'lead-date-error' : undefined
              }
              lang={language === 'he' ? 'he-IL' : language === 'ru' ? 'ru-RU' : 'en-US'}
            />

            {errors.movingDate && (
              <span
                className="lead-popup__error"
                id="lead-date-error"
                role="alert"
              >
                {errors.movingDate}
              </span>
            )}
          </div>

          <button
            className="lead-popup__button"
            type="submit"
          >
            {content.button}
          </button>

          <p className="lead-popup__consent">
            {content.consentBefore}
            <a href={LEGAL_HASHES.privacy}>
              {content.consentLink}
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
