import { useContext } from "react";
import { LanguageContext } from "../context/Language";

function LogIn() {
    const { translations } = useContext(LanguageContext);

    return (
        <button>{translations.login}</button>
    );
}

export default LogIn;
