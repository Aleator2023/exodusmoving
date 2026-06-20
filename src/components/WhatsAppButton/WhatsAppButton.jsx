import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = '972501234567';

  const message = encodeURIComponent(
    'Здравствуйте! Хочу узнать стоимость перевозки.',
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Написать нам в WhatsApp"
      title="Написать в WhatsApp"
    >
      <span aria-hidden="true">✆</span>
      <span className="whatsapp-button__text">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;