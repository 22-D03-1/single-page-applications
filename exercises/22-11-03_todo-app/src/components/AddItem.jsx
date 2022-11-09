import { Component } from "react"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class AddItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            textValue: props.textValue
        }
    }

    clickHandler = () => {
        this.props.clickHandler({
            done: false,
            title: this.state.textValue
        })

        this.setState({textValue: ""})
    }

    render () {
        return(
            <>
               <InputGroup className="mb-3">
                    <Form.Control
                    onChange={(e)=> this.setState({textValue: e.target.value})}
                    value={this.state.textValue}
                    placeholder="Todo Name"
                    aria-label="Todo Name"
                    aria-describedby="basic-addon2"
                    />
                    <Button 
                        onClick={this.clickHandler} 
                        variant="outline-secondary"
                        id="button-addon2">
                        Speichern
                    </Button>
                </InputGroup> 
            </>
        )
    }
}