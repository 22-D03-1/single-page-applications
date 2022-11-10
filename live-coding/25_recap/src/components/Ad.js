import "./Ad.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom"

function Ad({dispatch, product}) {
    return (
        <Link style={{textDecoration: "none", color: "unset"}} to={`/${product.id}`}>
            <Card className="mb-4" style={{ width: '18rem' }}>
                <div className="ad-image">
                    <Card.Img variant="top" src={product.img} />
                </div>
                <Card.Body>
                    <Card.Title className="text-truncate">{product.title}</Card.Title>
                    <Card.Subtitle>{product.category}</Card.Subtitle>
                    <Button className="my-2" onClick={() => dispatch({type: "addToBasket", payload: product.id})} variant="primary">Zum Warenkorb hinzufügen</Button>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Ad;