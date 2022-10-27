import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Apod from "./components/Apod"
import DateForm from "./components/DateForm"

import moment from "moment"

import {useState} from "react"

function App() {

    const today = moment().format("YYYY-MM-DD")

    const [date, setDate] = useState(today)

    return (
        <div className="App">
            <Container>
                <Row>
                    <h1>Space Pic des Tages</h1>
                </Row>
                <Row>
                    <DateForm date={date} setDate={setDate}/>
                </Row>
                <Row>
                    <Apod date={date}/>
                </Row>
            </Container>
        </div>
    )
}

export default App