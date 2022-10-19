import Listing from "./components/Listing"

// Unser Array mit den Daten die gerendert werden sollen
const listings = [
    {
        name: "Kopfhörer",
        price: 120,
        img: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/pdp/refresh2022/studio3-pdp-p02.png.large.2x.png",
        pickup: false,
        sold: false,
    },
    {
        name: "MacBook Pro",
        price: 1250,
        img: "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg",
        pickup: true,
        sold: true
    },
    {
        name: "HP Monitor",
        price: 190,
        img: "https://www.hp.com/de-de/shop/Html/Merch/Images/c07145693_1750x1285.jpg",
        pickup: true,
        sold: false
    },
];

/**
 * Functional Component ist eine Funktion, die immer:
 * - als default exportiert wird
 * - einen Namen mit Großbuchstaben hat
 * - HTML code zurück gibt
 */
function App() {
    /**
     * Wir nutzen map um jedes einzelne Element in unserem Array
     * aufzurufen und ein Listing Element zu erstellen und alle 
     * Listings in einem array zu speichern
     */
    const listingsComponents = listings.map((item, index)=> {
        /**
         * Innerhalb von map benötigt jedes Element einen eindeutigen
         * key. Dafür nutzen wir den Index unseres Array Elements.
         * Wir übergeben das Objekt innerhalb des Arrays als property (prop)
         * an den Component
         */
        return <Listing key={index} item={item} />
    })

    return (
        <div className="App">
            <h1>Flowmarket</h1>
            <div className="listings-container">
                {/* mithilfe der geschweiften Klammer können wir JS innerhalb 
                von HTML schreiben. */}
                {listingsComponents}
            </div>
        </div>
    )
}

export default App