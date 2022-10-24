import { useEffect } from "react";

function Counter({ counter, testProp }) {
    console.log("render Counter");

    // Mit dem Hook useEffect können wir auf bestimmte Events im Component Lifecycle zugreifen.
    // Jede Komponente durchläuft drei große Stadien: Mounting, Updating und Unmounting.

    // 1. Mounting
    // Wird die Komponente das erste Mal eingebunden, sprechen wir vom Mounting.
    // Die Komponente wird in diesem Schritt erzeugt und in die Struktur unserer App aufgenommen.
    useEffect(() => {
        // Dieser Log wird einmalig ausgegeben.
        console.log("mounted");

        // Alternative Schreibweise für 3. Unmounting. Siehe unten.
        return () => {
            console.log("unmounted in first useEffect");
        }

        // useEffect benötigt eine Liste an sog. Dependencies.
        // Das sind Variablen, die wir auf Veränderung beobachten.
        // Sollte sich also eine Dependency verändern, wird die übergebene Funktion in useEffect ausgeführt.
        // In der ersten und letzten Phase (Mounting und Unmounting)
        // übergeben wir eine leere Liste. Somit werden die Funktionen nur einmalig ausgeführt.
    }, []);

    // 2. Updating
    useEffect(() => {
        if (counter === 5) {
            console.log("counter is 5");
        }

        // Hören wir auf eine Variable, wird die Funktion immer dann ausgeführt,
        // wenn sich der Wert der Dependency ändert.
    }, [counter]);

    useEffect(() => {
        console.log(testProp);
    }, [testProp]);

    // 3. Unmounting
    // Soll etwas ausgeführt werden, wenn die Komponente aus der App entfernt wird,
    // nutzen wir useEffect wie folgt:
    // Die übergebene Funktion gibt selbst eine Funktion zurück.
    // Alternativ lassen sich Mounting und Unmounting in einem useEffect zusammenfassen.
    // Diese Schreibweise steht oben bei 1. Mounting.
    useEffect(() => {
        return () => {
            console.log("unmounted");
        }
    }, []);

    return (
        <p>
            Counter: {counter}
        </p>
    );
}

export default Counter;
