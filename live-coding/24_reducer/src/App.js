import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
/**
 * Alternativ: 
 * import {Container, Row, Col} from "react-bootstrap"
 * Jedoch wird dabei das ganze Modul "react-bootstrap" auf die Seite geladen, was sich auf die Performance
 * auswirken kann.
 *   */

import Button from "react-bootstrap/Button"

import { useReducer } from "react"

const reducer = (count, action) => {
    switch (action.type) {
        case "up":
            return ++count
        case "down":
            if (count != 0) {
                return --count
            }
            return count
        case "reset":
            return 0
        default:
            return count
    }
}

function App() {

    const [ count, dispatch ] = useReducer(reducer, 0)

    return (
        <div className="App">
            <Container>
                <Row className="text-center">
                    <h1>Counter</h1>
                </Row>
                <Row className="text-center">
                    <h3 className="m-4">{count}</h3>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={()=> dispatch({type: "up"})} className="float-end">
                            Hochzählen
                        </Button>
                    </Col>
                    <Col className="text-center">
                        <Button onClick={()=> dispatch({type: "down"})} >
                            Runterzählen
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={()=> dispatch({type: "reset"})} >
                            Reset
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App