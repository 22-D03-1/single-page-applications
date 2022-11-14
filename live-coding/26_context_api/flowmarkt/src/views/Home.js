import { useContext } from "react"

import { ProductsContext } from "../context/Products"
import Ad from "../components/Ad"
import { Container, Col, Row } from "react-bootstrap"

export default function Home() {
    const { products } = useContext(ProductsContext);

    /**
     * Unsere Home Seite bekommt alle Produkte als Array und nutzt map
     * um für jedes einzelne ein neuen Component Ad anzulegen.
     * Wieder müssen props durchgereicht werden.
     */

    return (
        <Container>
            <h1>Home</h1>
            <Row>
                {products.map((product, index) => (
                    <Col key={index}>
                        <Ad product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
