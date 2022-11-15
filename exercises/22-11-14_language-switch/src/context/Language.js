import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
    de: {
        language: "Deutsch",
        message: "Hallo Welt!",
        login: "Anmelden",
    },
    en: {
        language: "English",
        message: "Hello world!",
        login: "Log in",
    },
    dk: {
        language: "Dansk",
        message: "[DK] Hello world!",
        login: "[DK] Log in",
    },
    es: {
        language: "Espanol",
        message: "[ES] Hola mundo!",
        login: "[ES] Log in",
    },
};

const languages = Object.keys(translations).map(languageCode => {
    return {
        value: languageCode,
        language: translations[languageCode].language,
    };
});

function Language({ children }) {
    const [language, setLanguage] = useState("en");

    const changeLanguage = (language) => {
        setLanguage(language);
    }

    return (
        <LanguageContext.Provider value={{
            language,
            languages,
            translations: translations[language],
            changeLanguage,
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default Language;
