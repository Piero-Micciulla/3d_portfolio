import { BrowserRouter } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const LanguageSwitcher = () => {
  const { setLanguage, language } = useLanguage();
  return (
    <div>
      <button onClick={() => setLanguage("en")} disabled={language === "en"}>
        English
      </button>
      <button onClick={() => setLanguage("es")} disabled={language === "es"}>
        Spanish
      </button>
      <button onClick={() => setLanguage("it")} disabled={language === "it"}>
        Italian
      </button>
    </div>
  );
};

const App = () => {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-centered">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
