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

/**
 * Anstelle über useState eine setter Funktion zu erhalten (bspw setCount) mit der wir den State ändern können
 * nutzen wir useReducer um mit einer reducer Funktion selber Einfluss zu nehmen, 
 * wie der state geupdated werden soll.
 * Die reducer Funktion erwartet zwei Parameter, den aktuellen State und eine Action, die sagt wie der state 
 * geändert werden soll. Die Action hat einen type also einen Namen, der dem reducer vermittelt was gemacht werden soll.
 * Wir nutzen dann ein switch Statement um für jeden type eine andere Aktion durchzuführen.
 * 
 * Es ist wichtig, dass wir ein default statement definieren, im Falle, dass der type unbekannt ist.
 * Es ist außerdem wichtig, dass der reducer den aktuellen state zurück gibt
 */

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

    /**
     * Syntax von useReducer ist ähnlich wie useState: wir nutzen Array deconstructuring um  die
     * state Variable und eine Funktion zum ändern des states als variable zu speichern.
     * Die Funktion zum ändern ist der Dispatcher. Wenn wir diese Funktion ausführen und ein 
     * action Objekt übergeben wird diese an unseren reducer weiter gegeben.
     * Deutsches Wort für dispatch: Versenden. Wir versenden eine Action an unseren Reducer.
     * Der Reducer ändert dann den State in Abhängigkeit von unserer Action
     * useReducer erwartet dann zwei Parameter: unsere reducer Funktion und den initalen Wert.
     */

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