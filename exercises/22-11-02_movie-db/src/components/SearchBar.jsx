import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useState } from 'react';

export default function SearchBar({apiKey, setSearchResult}) {

    const [searchTerm, setSearchTerm] = useState("")

    const clickHandler = () => {
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
            .then(res => res.json())
            .then(json => {
                if (json.Response==="True")
                    setSearchResult(json["Search"])
                else
                    setSearchResult([])
            })
    }

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Filmname"
                aria-label="Filmname"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
            />
            <Button 
                variant="outline-secondary" 
                id="button-addon2"
                onClick={clickHandler}
            >
                Suchen
            </Button>
        </InputGroup>
    )
}