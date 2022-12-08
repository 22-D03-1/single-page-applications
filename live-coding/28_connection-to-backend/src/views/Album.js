import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import PhotoPreview from "../compontents/PhotoPreview"
import AlbumNameForm from "../compontents/AlbumNameForm"

export default function() {
    const { albumId } = useParams()

    const [album, setAlbum] = useState({})
    const [albumPhotos, setAlbumPhotos] = useState([])
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        fetch(`http://127.0.0.1:4000/albums/${albumId}`)
            .then(res => res.json())
            .then(data => setAlbum(data))
    }, [albumId])

    useEffect(()=>{
        album.photos && fetch(`http://127.0.0.1:4000/photos`)
            .then(response => response.json())
            .then(data => setAlbumPhotos(data.filter(d => album.photos.includes(d.id))))
    },[album])

    const clickHandler = () => {
        setEditMode(!editMode)
    }

    const clickFunction = (albumName) => {
        fetch(`http://127.0.0.1:4000/albums/${albumId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name: albumName})
        })
            .then(res => res.json())
            .then(data => setAlbum(data))
        clickHandler()
    }

    return (
        <Container>
            <h2 className="album-title">{album.name}</h2>
            <Row>
                <Col className="mb-2">
                {editMode ? 
                <AlbumNameForm clickFunction={clickFunction} albumName={album.name}/> :
                <Button onClick={clickHandler}>Name ändern</Button>}
                </Col>
            </Row>
            <Row>
                {albumPhotos.map((p,i)=> 
                    <PhotoPreview key={i} photo={p} />
                )}
                <PhotoPreview photo={{id:1}} />
            </Row>
        </Container>
    )
}