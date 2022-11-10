import "./Product.css"

import {Container, Row, Col, Button} from "react-bootstrap"
import {useParams} from "react-router-dom"
import {useEffect} from "react"

export default function Product({dispatch, product, productsInBasket}) {
    const {product_id} = useParams()


    useEffect(()=>{
        dispatch({type: "selectProduct", payload: product_id})
    },[product_id])

    return (
        <Container className="site-content">
            <Row>
                <Col lg="8">
                    <Row>
                        <div className="product-img">
                            <img src={product.img}/>
                        </div>
                    </Row>
                    <div className="contentbox">
                        <Row><h1>{product.title}</h1></Row>
                        <Row><h3>{product.price} Euro</h3></Row>
                    </div>
                    <div className="contentbox">
                        <Row>
                            <p>{product.category}</p>
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
                    <Button onClick={()=> dispatch({type: "addToBasket", payload: product.id})}>
                        {productsInBasket.includes(product.id) ? "Aus Warenkorb entfernen" : "Zu Warenkorb hinzufügen"}
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}