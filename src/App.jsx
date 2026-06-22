import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Services from './components/Services/Services';
import About from './components/About/About';
import Prices from './components/Prices/Prices';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

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
      <Header
        language={language}
        onLanguageChange={setLanguage}
      />

      <main>
        <HeroSlider language={language} />

        <Services language={language} />

        <About language={language} />

        <Prices language={language} />
      </main>

      <Footer language={language} />

      <WhatsAppButton />
    </div>
  );
}

export default App;