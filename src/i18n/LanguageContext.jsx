import React, { createContext, useContext, useState, useEffect } from "react";
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

  // Mapping country codes to language codes
  const countryToLanguage = {
    US: "en",
    ES: "es",
    IT: "it",
    MX: "es", // You can also add mappings for other countries
    // Add more mappings as needed
  };

  // Fetch user's IP-based country and set default language
  const getDefaultLanguage = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const countryCode = data.country;
      const defaultLanguage = countryToLanguage[countryCode] || "en"; // Default to English if not found
      setLanguage(defaultLanguage);
    } catch (error) {
      console.error("Error fetching user location:", error);
      setLanguage("en"); // Fallback to English in case of error
    }
  };

  useEffect(() => {
    getDefaultLanguage(); // Fetch language based on IP on component mount
  }, []);

  const t = (key) => {
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
