import { Container, Row, Col } from "react-bootstrap"
import PhotoPreview from "../compontents/PhotoPreview"

export default function() {
    return (
        <Container>
            <h2 className="album-title">Alle Fotos</h2>
            <Row>
                <PhotoPreview photo={{id:1}} />
                <PhotoPreview photo={{id:1}} />
            </Row>
        </Container>
    )
}