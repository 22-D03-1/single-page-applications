import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Laptop",
    },
    {
        id: 2,
        name: "Keyboard",
    },
    {
        id: 3,
        name: "Mouse",
    }
];

// Kurzer Überblick über Eingabe- und Ausgabewerte von Array-Methoden
// map          array => array
// forEach      array => undefined
// includes     array => boolean (array ohne objekte)
// filter       array => array
// find         array => ein element oder undefined

function Details() {
    // Die Parameter, die wir in der Route definiert haben,
    // lassen sich mit useParams() ausgeben.
    // Wir bekommen immer ein Objekt mit den entsprechenden Properties zurück.
    const params = useParams();
    // useNavigate() gibt uns eine Funktion zurück,
    // mit der wir auf andere Pfade weiterleiten können.
    const navigate = useNavigate();
    console.log(params);

    // Wir prüfen, ob das Produkt mit der angefragten ID überhaupt existiert.
    // Möglichkeit 1:
    // let productExists;
    // if (products.find(product => product.id === +params.id)) {
    //     productExists = true;
    // } else {
    //     productExists = false;
    // }

    // Möglichkeit 1a:
    // const productExists = products.find(product => product.id === +params.id) ? true : false;

    // Möglichkeit 2:
    // const productExists = typeof products.find(product => product.id === +params.id) === "object" ? true : false;

    // Möglichkeit 3:
    // const productExists = !!products.find(product => product.id === +params.id);

    useEffect(() => {
        const productExists = !!products.find(product => product.id === +params.id);

        // Wenn das Produkt nicht existiert, rufen wir die Funktion navigate() mit dem gewünschten Pfad auf.
        // In diesem Fall leiten wir unsere User auf eine Fehlerseite weiter.
        if (!productExists) {
            navigate("/404");
        }
        // Ganz wichtig: Da wir in useEffect auf Werte von außerhalb unserer Komponente zugreifen, müssen wir diese als Dependencies aufführen.
        // Hier sind es params und navigate
    }, [params, navigate]);

    return (
        <>
            <h1>Details {params.id}</h1>
        </>
    );
}

export default Details;
