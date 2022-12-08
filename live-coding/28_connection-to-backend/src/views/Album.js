import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import PhotoPreview from "../compontents/PhotoPreview"

export default function() {
    const { albumId } = useParams()
    return (
        <Container>
            <h2 className="album-title">{albumId}</h2>
            <Row>
                <PhotoPreview photo={{id:1}} />
                <PhotoPreview photo={{id:1}} />
            </Row>
        </Container>
    )
}