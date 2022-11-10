import Ad from "../components/Ad"
import {Container, Col, Row} from "react-bootstrap"

export default function Home({products, dispatch}) {

    return (
        <Container>
            <h1>Home</h1>
            <Row>
            {products.map((product, index)=> (
                <Col key={index}>
                    <Ad dispatch={dispatch} product={product}/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}