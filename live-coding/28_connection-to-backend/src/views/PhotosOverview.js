import {useEffect, useState} from "react"

import { Container, Row, Col } from "react-bootstrap"
import PhotoPreview from "../compontents/PhotoPreview"

export default function() {

    const [photos, setPhotos] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:4000/photos")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <Container>
            <h2 className="album-title">Alle Fotos</h2>
            <Row>
                {photos.map((p,i) => 
                    <PhotoPreview key={i} photo={p} />
                )}
            </Row>
        </Container>
    )
}