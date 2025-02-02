import React, { createContext, useContext, useState } from "react";
import en from "./en.json";
import es from "./es.json";
import it from "./it.json";

// Available translations
const translations = { en, es, it };

// Create context
const LanguageContext = createContext();

// Custom hook for easy access
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    // Check if the key exists in the current language JSON
    const keys = key.split('.');  // Split key like "experiences.Noos_Energy" into ["experiences", "Noos_Energy"]
    let result = translations[language];

    // Iterate over keys and navigate through the nested objects
    for (let i = 0; i < keys.length; i++) {
      if (result[keys[i]]) {
        result = result[keys[i]];
      } else {
        return key;  // If any key doesn't exist, return the original key
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
