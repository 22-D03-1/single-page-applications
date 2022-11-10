import "./Ad.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom"

function Ad({dispatch, product, inBasket}) {

    /**
     * Wir nutzen einen Klickhandler um preventDefault zu nutzen und ein sogenagnntes
     * Bubbling der Events zu verhindern. Ansonsten wird wieder lediglich der dispatcher
     * genutzt umd die Produkt ID dem Warenkorb in userem State hinzuzufügen.
     */

    const clickHandler = (event) => {
        event.preventDefault()
        dispatch({type: "addToBasket", payload: product.id})
    }

    /**
     * Wir nutzen wieder Link um unsere Bootstrap Card um den ganzen Component klickbar zu machen
     */

    return (
        <>
        {/** Wir ändern den Style Inline damit unser Text nicht blau und unterstrichen ist */}
        <Link style={{textDecoration: "none", color: "unset"}} to={`/product/${product.id}`}>
            {/** mb-4 ist eine Bootstrap Klasse und erstellt margin (m) unten/bottom (b) in Stufe 4 */}
            <Card className="mb-4" style={{ width: '18rem' }}>
                {/** Unser div ad-image nutzen wir für eine fixe größe des Bildes */}
                <div className="ad-image">
                    <Card.Img variant="top" src={product.img} />
                </div>
                <Card.Body>
                    {/** text-truncate ist eine Bootstrap Klasse, damit unser Text am Ende 
                     * abgeschnitten wird und nicht über mehrere Zeilen geht */}
                    <Card.Title className="text-truncate">{product.title}</Card.Title>
                    <Card.Subtitle>{product.category}</Card.Subtitle>
                    <Card.Text>{product.price} Euro</Card.Text>
                    {/** my-2 erstellt Margin (m) oben und unten/y Achse (y) in Stufe 2 (halb so viel wie 4) */}
                    <Button
                        className="my-2" 
                        onClick={clickHandler} 
                        variant="primary"
                    >
                        {inBasket ? "Aus Warenkorb entfernen" : "Zu Warenkorb hinzufügen"}
                    </Button>
                </Card.Body>
            </Card>
        </Link>
        </>
    );
}

export default Ad;