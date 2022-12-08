import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import PhotoPreview from "../compontents/PhotoPreview"

export default function() {
    const { albumId } = useParams()

    const [album, setAlbum] = useState({})
    const [albumPhotos, setAlbumPhotos] = useState([])

    useEffect(()=>{
        fetch(`http://172.20.10.2:4000/albums/${albumId}`)
            .then(res => res.json())
            .then(data => setAlbum(data))
    }, [albumId])

    useEffect(()=>{
        fetch(`http://172.20.10.2:4000/photos`)
            .then(response => response.json())
            .then(data => setAlbumPhotos(data.filter(d => album.photos.includes(d.id))))
    },[album])

    console.log(albumPhotos)

    return (
        <Container>
            <h2 className="album-title">{album.name}</h2>
            <Row>
                {albumPhotos.map((p,i)=> 
                    <PhotoPreview key={i} photo={p} />
                )}
                <PhotoPreview photo={{id:1}} />
            </Row>
        </Container>
    )
}