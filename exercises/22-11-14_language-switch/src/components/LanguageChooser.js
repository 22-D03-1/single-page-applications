import { useContext } from "react";
import { LanguageContext } from "../context/Language";

function LanguageChooser() {
    const { languages, language, changeLanguage } = useContext(LanguageContext);

    const handleChange = (event) => {
        changeLanguage(event.target.value);
    };

    return (
        <select value={language} onChange={handleChange}>
            {languages.map(lang => <option key={lang.value} value={lang.value}>{lang.language}</option>)}
        </select>
    );
}

export default LanguageChooser;
