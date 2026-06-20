import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = '972534309087';

  const message = encodeURIComponent(
    'שלום! אשמח לקבל הצעת מחיר להובלה.',
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שליחת הודעה ב-WhatsApp"
      title="שליחת הודעה ב-WhatsApp"
    >
      <svg
        className="whatsapp-button__icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.04 2.67A13.17 13.17 0 0 0 4.62 22.4L2.7 29.33l7.1-1.86a13.18 13.18 0 1 0 6.24-24.8Zm0 23.94a10.7 10.7 0 0 1-5.46-1.5l-.4-.24-4.22 1.1 1.13-4.1-.26-.42a10.75 10.75 0 1 1 9.21 5.16Zm5.9-8.05c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.71.16-.21.32-.82 1.05-1 1.26-.19.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.63 9.63 0 0 1-1.78-2.22c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.06 1.3 3.27.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z"
        />
      </svg>
    </a>
  );
}

export default WhatsAppButton;