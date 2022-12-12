import {Row} from "react-bootstrap"
import { useState } from "react"

export default function({clickFunction, albumName = ""}) {

    const [newAlbum, setNewAlbum] = useState(albumName)

    const changeHandler = (e) => {
        setNewAlbum(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault()
        clickFunction(newAlbum)
        setNewAlbum("")
    }


    return (
        <Row>
            <form>
                <input 
                    type="text" 
                    placeholder="Albumname" 
                    onChange={changeHandler}
                    value={newAlbum}
                />
                <button onClick={clickHandler}>Speichern</button>
            </form>
        </Row>
    )
}