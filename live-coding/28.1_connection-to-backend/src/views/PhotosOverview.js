import {useEffect, useState} from "react"

import { Container, Row, Col } from "react-bootstrap"
import PhotoPreview from "../compontents/PhotoPreview"

export default function() {

    const [photos, setPhotos] = useState([])

    useEffect(()=>{
        // Statt die vollständige URL anzugeben, werden wir nur den Pfad an fetch übergeben.
        // So sind wir unabhängig vom aktuellen Protokoll, dem Host und dem Port.
        // Der erste Teil der URL wird also automatisch ergänzt.
        // Hierzu müssen wir allerdings noch in der package.json einen "proxy" einrichten.
        // Alle Anfragen, die nicht von React beantwortet werden können, landen dort.
        // Im Proxy geben wir die URL zum Backend an, sodass dieses antworten kann.
        // Da die Anfragen intern verarbeitet werden, bleibt für den Browser alles beim gleichen Origin.
        fetch("/api/photos")
        // fetch("http://localhost:3200/api/photos")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <Container>
            <h2 className="album-title">Alle Fotos</h2>
            <Row>
                {photos.map((p, i) =>
                    <PhotoPreview key={i} photo={p} />
                )}
            </Row>
        </Container>
    )
}
