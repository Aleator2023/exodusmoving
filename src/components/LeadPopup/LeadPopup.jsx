import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import './LeadPopup.css';

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
    messageTitle: 'בקשה להצעת מחיר להובלה',
    nameText: 'שם',
    phoneText: 'טלפון',
    dateText: 'תאריך הובלה',
  },

  ru: {
    title: 'Планируете переезд?',
    intro:
      'Оставьте имя, телефон и дату перевозки — мы получим заявку в WhatsApp.',
    namePlaceholder: 'Ваше имя',
    phonePlaceholder: 'Телефон',
    dateLabel: 'Дата перевозки',
    button: 'Отправить в WhatsApp',
    closeLabel: 'Закрыть окно',
    nameError: 'Введите имя',
    phoneError: 'Введите телефон',
    dateError: 'Выберите дату перевозки',
    messageTitle: 'Заявка на перевозку',
    nameText: 'Имя',
    phoneText: 'Телефон',
    dateText: 'Дата перевозки',
  },

  en: {
    title: 'Planning a move?',
    intro:
      'Leave your name, phone number and moving date — we will receive your request on WhatsApp.',
    namePlaceholder: 'Full name',
    phonePlaceholder: 'Phone number',
    dateLabel: 'Moving date',
    button: 'Send via WhatsApp',
    closeLabel: 'Close popup',
    nameError: 'Please enter your name',
    phoneError: 'Please enter your phone number',
    dateError: 'Please choose a moving date',
    messageTitle: 'Moving quote request',
    nameText: 'Name',
    phoneText: 'Phone',
    dateText: 'Moving date',
  },
};

const whatsappPhoneNumber = '972507629739';

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

    const message = `${content.messageTitle}

${content.nameText}: ${formData.name}
${content.phoneText}: ${formData.phone}
${content.dateText}: ${formData.movingDate}`;

    const whatsappUrl =
      `https://wa.me/${whatsappPhoneNumber}` +
      `?text=${encodeURIComponent(message)}`;

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
              className="lead-popup__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.namePlaceholder}
              aria-label={content.namePlaceholder}
            />

            {errors.name && (
              <span className="lead-popup__error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="lead-popup__field">
            <input
              className="lead-popup__input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={content.phonePlaceholder}
              aria-label={content.phonePlaceholder}
            />

            {errors.phone && (
              <span className="lead-popup__error">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="lead-popup__field">
            <label className="lead-popup__label">
              {content.dateLabel}
            </label>

                <input
                className="lead-popup__input"
                type="date"
                name="movingDate"
                value={formData.movingDate}
                onChange={handleChange}
                aria-label={content.dateLabel}
                lang={language === 'he' ? 'he-IL' : language === 'ru' ? 'ru-RU' : 'en-US'}
                />

            {errors.movingDate && (
              <span className="lead-popup__error">
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
        </form>
      </div>
    </div>
  );
}
