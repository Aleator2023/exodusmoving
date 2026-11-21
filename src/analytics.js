// Contact tracking for Google Analytics 4.
// gtag itself is loaded in index.html; here we only send events:
//   whatsapp_click   – any link to wa.me
//   phone_click      – any tel: link
//   lead_form_submit – the lead popup form was sent (opens WhatsApp)
// Each event says where on the site it happened (link_location) and the
// page language, so GA can show which button and page bring contacts.

const pageLanguage = () => {
  const match = window.location.pathname.match(/^\/(ru|en)(\/|$)/);
  return match ? match[1] : 'he';
};

export function trackEvent(name, params = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        page_language: pageLanguage(),
        page_path: window.location.pathname,
        ...params,
      });
    }
  } catch {
    // Analytics must never break the site
  }
}

// Name of the place the link sits in: its own class (e.g. "whatsapp-button",
// "hero-slider__button") or, failing that, the id of the section around it.
const linkLocation = (link) =>
  link.classList[0] ||
  link.closest('[id]')?.id ||
  'unknown';

export function initContactTracking() {
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest?.('a[href]');
      if (!link) {
        return;
      }

      const href = link.getAttribute('href') || '';

      if (href.includes('wa.me/')) {
        trackEvent('whatsapp_click', { link_location: linkLocation(link) });
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_location: linkLocation(link) });
      }
    },
    { capture: true },
  );
}
