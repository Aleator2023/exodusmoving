import { useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router';

import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Services from './components/Services/Services';
import About from './components/About/About';
import Prices from './components/Prices/Prices';
import Footer from './components/Footer/Footer';
import HeroIntro from './components/HeroIntro/HeroIntro';
import PhoneButton from './components/PhoneButton/PhoneButton';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import LeadPopup from './components/LeadPopup/LeadPopup';
import Reviews from './components/Reviews/Reviews';
import ServiceAreas from './components/ServiceAreas/ServiceAreas';
import LegalDialog from './components/LegalDialog/LegalDialog';
import ServicePage from './components/ServicePage/ServicePage';
import CityPage from './components/CityPage/CityPage';

import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  findSitePage,
  hreflangLinks,
  languageDirection,
  languageFromPath,
  languagePrefix,
  localizePath,
  ogLocale,
  pageLanguages,
  pageUrl,
  siteName,
  stripLanguagePrefix,
} from './data/seo';

const skipLinkText = {
  he: 'דילוג לתוכן הראשי',
  ru: 'Перейти к основному содержанию',
  en: 'Skip to main content',
};

const LANGUAGE_STORAGE_KEY = 'siteLanguage';

const readStoredLanguage = () => {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Storage can be unavailable (private mode); language still comes from the URL
  }
};

// Links like /#prices from a service page load the home page first;
// the browser tries to scroll before React has rendered the sections,
// so scroll to the section once it exists.
function useScrollToHashSection(isHomePage) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!isHomePage || !hash) {
      return undefined;
    }

    const scrollToSection = () =>
      document.getElementById(hash.slice(1))?.scrollIntoView();

    const timers = [50, 400].map((delay) =>
      window.setTimeout(scrollToSection, delay),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
    // Only when arriving on a page, not on every in-page hash click
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
}

// Keeps <html lang/dir>, title, description, canonical, Open Graph and
// hreflang in sync while navigating inside the app. The same values are
// written into static HTML files at build time (vite.config.js).
function useDocumentMeta(language, pagePath) {
  useEffect(() => {
    const page = findSitePage(pagePath);
    const { title, description } = page.meta(language);
    const url = pageUrl(language, page.path);

    document.documentElement.lang = language;
    document.documentElement.dir = languageDirection(language);
    document.title = title;

    const setContent = (selector, value) =>
      document.querySelector(selector)?.setAttribute('content', value);

    setContent('meta[name="description"]', description);
    setContent('meta[property="og:title"]', title);
    setContent('meta[property="og:description"]', description);
    setContent('meta[property="og:url"]', url);
    setContent('meta[property="og:locale"]', ogLocale[language]);
    setContent('meta[property="og:site_name"]', siteName[language]);
    setContent('meta[name="twitter:title"]', title);
    setContent('meta[name="twitter:description"]', description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', url);

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((link) => link.remove());

    for (const { hreflang, href } of hreflangLinks(page.path)) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    }
  }, [language, pagePath]);
}

function HomePage({ language }) {
  return (
    <>
      <HeroIntro language={language} />
      <HeroSlider language={language} />
      <Reviews language={language} />
      <Services language={language} />
      <About language={language} />
      <Prices language={language} />
      <ServiceAreas language={language} />
    </>
  );
}

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // The language comes from the address: /, /ru/, /en/
  const language = languageFromPath(pathname);
  const pagePath = stripLanguagePrefix(pathname);
  const isHomePage = pagePath === '/';

  useScrollToHashSection(isHomePage);
  useDocumentMeta(language, pagePath);

  // A returning visitor who chose Russian/English earlier is taken to that
  // version when opening the Hebrew home page (search engines never are:
  // they keep no stored preference).
  useEffect(() => {
    const storedLanguage = readStoredLanguage();

    if (
      pathname === '/' &&
      !window.location.hash &&
      storedLanguage !== DEFAULT_LANGUAGE &&
      LANGUAGES.includes(storedLanguage)
    ) {
      navigate(localizePath(storedLanguage, '/'), { replace: true });
    }
    // Only on the first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Switching language opens the same page in the other language,
  // or that language's home page if this page does not exist in it
  const handleLanguageChange = (nextLanguage) => {
    storeLanguage(nextLanguage);
    const targetPath = pageLanguages(pagePath).includes(nextLanguage)
      ? pagePath
      : '/';
    navigate(localizePath(nextLanguage, targetPath));
  };

  const homePath = localizePath(language, '/');

  return (
    <div className="site-wrapper">
      <a className="skip-link" href="#main-content">
        {skipLinkText[language] ?? skipLinkText.he}
      </a>

      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <main id="main-content" tabIndex={-1}>
        <Routes>
          {LANGUAGES.map((routeLanguage) => {
            const prefix = languagePrefix(routeLanguage);

            return [
              <Route
                key={`${routeLanguage}-home`}
                path={`${prefix}/`}
                element={<HomePage language={routeLanguage} />}
              />,
              <Route
                key={`${routeLanguage}-service`}
                path={`${prefix}/services/:slug`}
                element={<ServicePage language={routeLanguage} />}
              />,
              <Route
                key={`${routeLanguage}-city`}
                path={`${prefix}/cities/:slug`}
                element={<CityPage language={routeLanguage} />}
              />,
            ];
          })}

          <Route
            path="*"
            element={<Navigate to={homePath} replace />}
          />
        </Routes>
      </main>

      <Footer language={language} />
      <PhoneButton />
      <WhatsAppButton language={language} />
      {isHomePage && <LeadPopup language={language} />}
      <LegalDialog language={language} />
    </div>
  );
}

export default App;
