import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import {Container} from "react-bootstrap"

export default function(){
    const {photoId} = useParams()

    const [photo, setPhoto] = useState({})

    useEffect(()=>{
        fetch(`http://172.20.10.2:4000/photos/${photoId}`)
            .then(response => response.json())
            .then(data => setPhoto(data))
    },[photoId])

    return(
        <Container>
            <img src={photo.url} />
        </Container>
    )
}