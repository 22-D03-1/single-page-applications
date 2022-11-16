import { useEffect, useState, useContext } from "react";

import "./Product.css"

import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"

import { ProductsContext } from "../context/Products";

export default function Product() {
    const { productsInBasket, toggleProductInBasket, findProduct } = useContext(ProductsContext);
    const { product_id } = useParams();
    const [product, setProduct] = useState({});
    const inBasket = productsInBasket.includes(product.id);

    useEffect(() => {
        setProduct(findProduct(product_id));
    }, [product_id, findProduct]);

    const clickHandler = (event) => {
        event.preventDefault();
        toggleProductInBasket(product.id);
    }

    return (
        <Container className="site-content">
            <Row>
                <Col lg="8">
                    <Row>
                        <div className="product-img">
                            <img src={product.img} />
                        </div>
                    </Row>
                    <div className="contentbox">
                        <Row><h1>{product.title}</h1></Row>
                        <Row><h3>{product.price} Euro</h3></Row>
                    </div>
                    <div className="contentbox">
                        <Row>
                            <span>{product.category}</span>
                        </Row>
                    </div>
                    <div className="contentbox">
                        <Row>
                            <h4>Beschreibung</h4>
                            <p>{product.description}</p>
                        </Row>
                    </div>
                </Col>
                <Col>
                    {/** Der Button nutzt die dispatch Funktion aus den props um den Artikel
                     * zum Warenkorb hinzuzufügen.
                     */}
                    <Button onClick={clickHandler}>
                        {inBasket ? "Aus Warenkorb entfernen" : "Zu Warenkorb hinzufügen"}
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
