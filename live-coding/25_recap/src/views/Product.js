import "./Product.css"

import {Container, Row, Col, Button} from "react-bootstrap"
import {useParams} from "react-router-dom"
import {useEffect} from "react"

export default function Product({dispatch, product = {}, productsInBasket}) {

    /**
     * Unsere View Product erreichen wir, wenn wir mit einem Parameter. Diesen haben wir
     * product_id genannt (bei Route innerhalb des path ein Doppelpunkt plus name -> :product_id)
     * mit dem Hook useParams können wir auf diese Zugreifen.
     */

    const {product_id} = useParams()

    /**
     * Jedes mal wenn product_id sich ändert löst useEffect den dispatch aus, um die dazugehörigen
     * Produktdaten im state zu speichern. die id aus den parametern wird als payload übergeben
     */

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
                    <Button onClick={()=> dispatch({type: "addToBasket", payload: product.id})}>
                        {productsInBasket.includes(product.id) ? "Aus Warenkorb entfernen" : "Zu Warenkorb hinzufügen"}
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}