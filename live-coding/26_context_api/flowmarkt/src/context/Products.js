import { createContext, useState } from "react";
import data from "../data";

// Wir stellen uns vor, dass der ProductsContext eine Datenbank ist, in der wir unsere geteilten Daten speichern.
// Um die Verbindung zum Context herzustellen, müssen wir ihn exportieren.
export const ProductsContext = createContext();


// Die eigentliche Funktionalität richten wir anschließend über einen sog. Provider ein.
// Hier werden alle States eingerichtet, Funktionen definiert etc.
// Der Provider ist wie eine vollwertige Komponente und kann neben useState auch useEffect und andere Hooks verwenden.
// Wichtig: Wir benötigen die Children aus den Props, damit die untergeordneten Komponenten gerendert werden.
// Diese Children haben später Zugriff auf die im Context geteilten Daten.
function Products({ children }) {
    // Wir definieren diverse States:
    const [products] = useState(data);
    const [productsInBasket, setProductsInBasket] = useState([2, 4]);

    // Zusätzlich ist es auch möglich, Funktionen zu beschreiben, die umfangreichere Aktionen ausführen.
    // So müssen wir bspw. die State Setter nicht weitergeben und können die Logik in dieser Komponente "verkapseln", um den Aufruf woanders einfacher zu gestalten (siehe components/Ad.js).
    const toggleProductInBasket = productId => {
        const inBasket = productsInBasket.includes(productId);

        setProductsInBasket((prev) => {
            if (!inBasket) {
                return [...prev, productId];
            } else {
                return prev.filter(id => id !== productId);
            }
        });
    };

    const emptyBasket = () => setProductsInBasket([]);

    const findProduct = productId => {
        return products.find(product => product.id === +productId);
    }

    // Wir geben die Provider-Komponente des Context zurück
    // und übergeben als "value"-Property alle Werte, die über den Context erreichbar sein sollen.
    // Das können unsere States und Funktionen sein.
    // Die Children werden als Child Components dieser Provider-Komponente gerendert.
    return (
        <ProductsContext.Provider value={{
            products: products,
            productsInBasket: productsInBasket,
            toggleProductInBasket: toggleProductInBasket,
            findProduct: findProduct,
            emptyBasket,
        }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default Products;
