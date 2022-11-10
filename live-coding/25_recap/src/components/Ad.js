import "./Ad.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom"

function Ad({dispatch, product, inBasket}) {

    const clickHandler = (event) => {
        event.preventDefault()
        dispatch({type: "addToBasket", payload: product.id})
    }

    return (
        <Link style={{textDecoration: "none", color: "unset"}} to={`/${product.id}`}>
            <Card className="mb-4" style={{ maxWidth: '18rem' }}>
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
    );
}

export default Ad;