import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

import {
  LEGAL_CONTACT,
  LEGAL_HASHES,
  legalDocuments,
  legalUi,
} from './legalContent';

import './LegalDialog.css';

// Opens the accessibility statement / privacy policy when the URL hash is
// #accessibility-statement or #privacy-policy, so the links work on any hosting.
const documentByHash = Object.fromEntries(
  Object.entries(LEGAL_HASHES).map(([key, hash]) => [hash, key]),
);

const readDocumentFromHash = () =>
  documentByHash[window.location.hash] ?? null;

export default function LegalDialog({ language = 'he' }) {
  const [documentKey, setDocumentKey] = useState(readDocumentFromHash);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  const ui = legalUi[language] ?? legalUi.he;
  const direction = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    const handleHashChange = () => setDocumentKey(readDocumentFromHash());

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const close = useCallback(() => {
    setDocumentKey(null);

    if (documentByHash[window.location.hash]) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      );
    }
  }, []);

  // Focus management, Escape key and keeping Tab inside the dialog
  useEffect(() => {
    if (!documentKey) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    document.body.classList.add('legal-dialog-open');
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        close();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.classList.remove('legal-dialog-open');
      previousFocusRef.current?.focus?.();
    };
  }, [documentKey, close]);

  if (!documentKey) {
    return null;
  }

  const legalDocument =
    legalDocuments[documentKey][language] ??
    legalDocuments[documentKey].he;

  return (
    <div
      className="legal-dialog"
      dir={direction}
      lang={language}
    >
      <button
        className="legal-dialog__overlay"
        type="button"
        tabIndex={-1}
        aria-label={ui.close}
        onClick={close}
      />

      <div
        className="legal-dialog__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-dialog-title"
        ref={dialogRef}
        tabIndex={-1}
      >
        <header className="legal-dialog__header">
          <h2
            className="legal-dialog__title"
            id="legal-dialog-title"
          >
            {legalDocument.title}
          </h2>

          <button
            className="legal-dialog__close"
            type="button"
            aria-label={ui.close}
            onClick={close}
          >
            <X
              size={22}
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </button>
        </header>

        <div className="legal-dialog__body">
          <p className="legal-dialog__updated">
            {ui.lastUpdated}: {legalDocument.lastUpdated}
          </p>

          {legalDocument.sections.map((section) => (
            <section
              className="legal-dialog__section"
              key={section.heading}
            >
              <h3 className="legal-dialog__heading">
                {section.heading}
              </h3>

              {section.paragraphs?.map((paragraph) => (
                <p
                  className="legal-dialog__text"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ul className="legal-dialog__list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.contact && (
                <ul className="legal-dialog__contact">
                  <li>
                    {ui.phone}:{' '}
                    <a
                      href={LEGAL_CONTACT.phoneHref}
                      dir="ltr"
                    >
                      {LEGAL_CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    {ui.email}:{' '}
                    <a
                      href={`mailto:${LEGAL_CONTACT.email}`}
                      dir="ltr"
                    >
                      {LEGAL_CONTACT.email}
                    </a>
                  </li>
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
