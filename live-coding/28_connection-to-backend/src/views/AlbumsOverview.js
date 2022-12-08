import {useEffect, useState} from "react"

import { Container, Row, Col } from "react-bootstrap"
import AlbumIcon from "../compontents/AlbumIcon"
import AlbumNameForm from "../compontents/AlbumNameForm"

export default function() {

    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        fetch(`http://127.0.0.1:4000/albums`)
            .then(response => response.json())
            .then(data => setAlbums(data))
    },[])

    const clickFunction = (album) => {
        const body = {
            name: album,
            photos: []
        }
        fetch("http://127.0.0.1:4000/albums", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                setAlbums(data)
            })
    }

    return (
        <Container>
            <Row>
                {albums.map((a, i) => 
                    <AlbumIcon key={i} album={a}/>
                )}
            </Row>
            <h2>Neues Album anlegen</h2>
            <AlbumNameForm clickFunction={clickFunction}/>
        </Container>
    )
}