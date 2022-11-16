import { useContext } from "react";
import { LanguageContext } from "../context/Language";

function WelcomeMessage() {
    const { translations } = useContext(LanguageContext);

    return (
        <h1>{translations.message}</h1>
    );
}

export default WelcomeMessage;
