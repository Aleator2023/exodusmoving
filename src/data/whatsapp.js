export const WHATSAPP_PHONE = '972507629739';

const WHATSAPP_GREETINGS = {
  he: 'שלום! אשמח לקבל הצעת מחיר מדויקת להובלה.',
  ru: 'Здравствуйте! Хочу получить точное предложение по цене на перевозку.',
  en: 'Hello! I would like to get an accurate quote for a move.',
};

export const whatsappGreeting = (language = 'he') =>
  WHATSAPP_GREETINGS[language] ?? WHATSAPP_GREETINGS.he;

export const whatsappLink = (language = 'he', text = whatsappGreeting(language)) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
