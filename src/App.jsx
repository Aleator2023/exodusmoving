import { useEffect, useState } from 'react';

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

const skipLinkText = {
  he: 'דילוג לתוכן הראשי',
  ru: 'Перейти к основному содержанию',
  en: 'Skip to main content',
};

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('siteLanguage') || 'he';
  });

  useEffect(() => {
    const direction = language === 'he' ? 'rtl' : 'ltr';

    document.documentElement.lang = language;
    document.documentElement.dir = direction;

    localStorage.setItem('siteLanguage', language);
  }, [language]);

  return (
    <div className="site-wrapper">
      <a className="skip-link" href="#main-content">
        {skipLinkText[language] ?? skipLinkText.he}
      </a>

      <Header
        language={language}
        onLanguageChange={setLanguage}
      />

      <main id="main-content" tabIndex={-1}>
        <HeroIntro language={language} />
        <HeroSlider language={language} />
        <Reviews language={language} />
        <Services language={language} />
        <About language={language} />
        <Prices language={language} />
        <ServiceAreas language={language} />
      </main>

  

      <Footer language={language} />
      <PhoneButton />
      <WhatsAppButton />
      <LeadPopup language={language} />
      <LegalDialog language={language} />
 
    </div>
  );
}

export default App;