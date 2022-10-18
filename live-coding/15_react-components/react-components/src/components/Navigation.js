// Eine Komponente besteht im Wesentlichen aus einer Funktion, die exportiert wird.
// Die Funktion gibt JSX zurück, welches dann an der Stelle angezeigt wird,
// Wo die Komponente eingebunden ist.

// Jede Komponente übernimmt nur eine einzige, klar definierte Aufgabe,
// bzw. sie beschreibt nur einen genau abgegrenzten Teil unseres Layouts.
// In "Navigation" konzentrieren wir uns bspw. nur auf die Darstellung der Liste.
// Sowohl der Header als auch die einzelnen NavItems ignorieren wir hierbei.

// Für jede Komponente können wir einzelne CSS-Dateien erstellen und importieren.
import "./Navigation.sass";

// Hier importieren wir sogar eine weitere Komponente, die wir weiter unten verwenden.
import NavItem from "./NavItem";


function Navigation() {
    // NavItem benutzen wir hier mit weiteren Argumenten, die sog. Props.
    // Diese sind vergleichbar mit Argumenten einer Funktion, die wir übergeben.
    // So lässt sich die Ausgabe anpassen, bzw. steuern (siehe NavItem.js).
    return (
        <nav className="Navigation">
            <ul className="Navigation__List">
                <NavItem navLabel="Link 1" navLink="https://google.de" />
                <NavItem navLabel="Link 2" navLink="https://google.de" />
                <NavItem navLabel="Link 3" navLink="https://google.de" />
            </ul>
        </nav>
    );
}

export default Navigation;
