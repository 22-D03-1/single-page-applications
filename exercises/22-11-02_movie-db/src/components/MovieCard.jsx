import { useEffect, useState } from "react"

import Card from "react-bootstrap/Card"
import Badge from 'react-bootstrap/Badge';

export default function MovieCard({movieId, apiKey}) {
    const [movie, setMovie] = useState({})
    
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`)
            .then(res => res.json())
            .then(json => {
                if (json.Response === "True")
                    setMovie(json)
                else 
                    setMovie({})
            })
    }, [movieId])

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie["Poster"]}/>
            <Card.Body>
                <Card.Title>{movie["Title"]}</Card.Title>
                <Card.Subtitle>{movie["Released"]}</Card.Subtitle>
                <Card.Text>{movie["imdbRating"]}/10</Card.Text>
                <Card.Text>{movie["Plot"]}</Card.Text>
                {
                    movie.Genre ? movie.Genre.split(", ").map((genre, index) => 
                        (<Badge bg="dark" key={index} className="m-1">{genre}</Badge>)) : null
                }
            </Card.Body>
        </Card>
    )
}