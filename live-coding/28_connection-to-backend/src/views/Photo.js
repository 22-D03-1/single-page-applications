import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"

import {Container, Row, Col, Button} from "react-bootstrap"

export default function(){
    const navigate = useNavigate()
    const {photoId} = useParams()

    const [photo, setPhoto] = useState({})

    /**
     * Um unsere React App (View) mit unserem Backend (Controller und "Model") zu verbinden,
     * machen wir lediglich ein fetch an unseren localhost. Da fetch das Wort "localhost" mag,
     * benutzen wir die dazugehörige IP Adresse. 
     * 
     * Frontend und Backend befinden sich im selben Hafen (localhost) und haben zwei 
     * Stegnummern (3000 und 4000) über die sie erreichbar sind.
     * 
     * In einem real world example wäre das optimale Setup, dass sich unser FE und das BE in
     * zwei Docker Container befinden und über festgelegte Wege miteinander kommunizieren.
     * Leider sprengt Docker den Rahmen von diese, Kurs. Ich kann euch aber empfehlen, euch das
     * selbstständig anzuschauen.
     * 
     * Den fetch machen wir in Abhängigkeit von unserem Parameter, heißt immer wenn sich der 
     * Parameter ändert rufen wir neu die Daten ab
     */

    useEffect(()=>{
        fetch(`http://127.0.0.1:4000/photos/${photoId}`)
            .then(response => response.json())
            .then(data => setPhoto(data))
    },[photoId])

    const clickHandler = () => {
        fetch(`http://127.0.0.1:4000/photos/${photoId}`, {
            method: "DELETE"
        })
            .then(response => {
                if(response.status === 202) {
                    navigate("/photos")
                }
            })
    }

    return(
        <Container>
            <Row className="m-3">
                <Col>
                    <div className="photo-container">
                        <img src={photo.url} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <Button onClick={clickHandler}>Löschen</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}