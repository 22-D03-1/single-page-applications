import {useEffect, useState} from "react"

import { Container, Row, Col } from "react-bootstrap"
import AlbumIcon from "../compontents/AlbumIcon"

export default function() {

    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        fetch(`http://172.20.10.2:4000/albums`)
            .then(response => response.json())
            .then(data => setAlbums(data))
    },[])

    return (
        <Container>
            <Row>
                {albums.map((a, i) => 
                    <AlbumIcon key={i} album={a}/>
                )}
            </Row>
        </Container>
    )
}