import { useEffect, useState } from 'react';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';
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
  <HeroSlider />
  <Services />
  <About />




        <section id="prices" className="page-section">
          <div className="container">
            <h2>Цены</h2>
          </div>
        </section>

        <section id="contacts" className="page-section">
          <div className="container">
            <h2>Контакты</h2>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;