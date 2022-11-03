import SearchBar from "./components/SearchBar"
import MovieCard from "./components/MovieCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {useState} from "react"

function App() {

    const [searchResult, setSearchResult] = useState([])

    const apiKey = "cfddcf73"

    console.log(searchResult)

    return (
        <div className="App">
            <Container>
                <h1>Movie Search</h1>
                <SearchBar apiKey={apiKey} setSearchResult={setSearchResult}/>
                <Row>
                    {
                        searchResult.map((m, i) => (
                            <Col key={i}>
                                <MovieCard apiKey={apiKey} movieId={m.imdbID}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default App