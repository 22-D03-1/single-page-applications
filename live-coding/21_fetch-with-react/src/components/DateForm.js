import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

import { useState } from "react"

export default function DateForm({date, setDate}) {

    const [formValue, setFormValue] = useState(date)

    const changeHandler = (event) => {
        setFormValue(event.target.value)
    }

    const clickHandler = () => {
        setDate(formValue)
    }

    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="dateInput">
                    <Form.Label>Wunschdatum</Form.Label>
                    <InputGroup>
                        <Form.Control type="date" value={formValue} onChange={changeHandler}/>
                        <Button variant="outline-secondary" id="button-addon2" onClick={clickHandler}>
                            Senden
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>  
        </div>
    )
}