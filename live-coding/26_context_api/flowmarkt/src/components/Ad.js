import { useContext } from "react";

import "./Ad.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom"

import { ProductsContext } from "../context/Products";

function Ad({ product }) {
    // Mit dem Hook useContext greifen wir direkt auf den Context zu.
    // Somit sparen wir uns das Durchreichen der Props.
    // useContext bekommt den entsprechenden Context übergeben
    // und gibt uns alle Werte aus der value-Property des Providers aus.
    // Wir suchen uns mittels Destructuring nur das aus, was wir tatsächlich benötigen.
    const { productsInBasket, toggleProductInBasket } = useContext(ProductsContext);
    const inBasket = productsInBasket.includes(product.id);

    const clickHandler = (event) => {
        event.preventDefault();
        // Damit wir hier nicht selbst schauen müssen, ob das Produkt schon im Warenkorb ist,
        // um zu entscheiden, wie wir den State anpassen sollen,
        // greifen wir nur auf die Funktion aus dem Context zu und übergeben die Product ID
        // und überlassen die Arbeit dem Context.
        // Den aktualisierten State bekommen wir dann automatisch über useContext mitgeteilt.
        toggleProductInBasket(product.id);
    }

    return (
        <>
            <Link style={{ textDecoration: "none", color: "unset" }} to={`/product/${product.id}`}>
                <Card className="mb-4" style={{ width: '18rem' }}>
                    <div className="ad-image">
                        <Card.Img variant="top" src={product.img} />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-truncate">{product.title}</Card.Title>
                        <Card.Subtitle>{product.category}</Card.Subtitle>
                        <Card.Text>{product.price} Euro</Card.Text>
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
