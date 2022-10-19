// Listing  hat seine eigene CSS Datei dir wir hier importieren. SO haben wir Zugriff darauf
import "./Listing.css"
import BuyButton from "./BuyButton"

// Spread Operator { item } nutzen wir anstatt props um nicht immer props.item schreiben zu müssen
function Listing({ item }) {
    /**
     * Conditional Rendering: 
     * Wenn eien Bedingung erfüllt ist, fügen wir eine neue Klasse hinzu
     */
    let classes = "listing"
    if (item.sold) {
        classes += " sold"
    }

    return (
        <div className={classes}>
            <img src={item.img}></img>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            {/**
             * Conditional Rendering:
             * Abhängig von einem Boolean zeigen wir entweder das eine oder das andere
             */}
            <p>{item.pickup ? "Abholen" : "Versand möglich"}</p>
            {/* Nested Component: Neuer Komponent um Logik zu trennen */}
            <BuyButton sold={item.sold}/>
        </div>
    )
}

export default Listing