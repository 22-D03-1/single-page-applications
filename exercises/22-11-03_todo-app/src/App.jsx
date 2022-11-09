import { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import TodoList from "./components/TodoList"
import AddItem from "./components/AddItem"

const todos = [
    {
        title:"Blumen wässern",
        done: false,
    },
    {
        title:"Fahrrad reparieren",
        done: false,
    },
    {
        title:"Hund füttern",
        done: true,
    },
]

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos, 
            addMode: false
        }
    }

    addItem = (item) => {
        console.log(item)
        const newState = { addMode: false }
        if (item.title) {
            newState.todos =  [
                item,
                ...this.state.todos
            ]
        }
        this.setState(newState)
    }

    toggleNew = () => {
        this.setState({
            addMode: !this.state.addMode
        })
    }

    render () {
        return(
            <Container>
                <h1>Todo Liste</h1>
                <Row>
                    <Col>
                        {
                            this.state.addMode ?
                            <AddItem clickHandler={this.addItem} textValue=""/> :
                            <Button className="my-2" onClick={this.toggleNew}>Neues Todo</Button>
                        }
                    </Col>
                </Row>
                <TodoList todos={this.state.todos}/>
            </Container>
        )
    }
}