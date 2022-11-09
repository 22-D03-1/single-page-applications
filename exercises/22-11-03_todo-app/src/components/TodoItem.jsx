import "./Todo.css"
import { Component } from "react"

import EditIcon from '@mui/icons-material/Edit';
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import AddItem from "./AddItem";

export default class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: props.item,
            editMode: false,
            showEdit: false
        }
    }

    toggleItem = () => {
        this.setState({
            item: {
                ...this.state.item,
                done: !this.state.item.done
            } 
        })
    }

    toggleEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    editItem = (item) => {
        this.setState({
            item, 
            editMode: false
        })
    }

    render () {
        return this.state.editMode ? (
            <div>
                <AddItem clickHandler={this.editItem} textValue={this.state.item.title}/>
            </div>
        ) : (<Row 
                className="item border-top align-items-center h-60"
                onMouseEnter={(e) => this.setState({ showEdit: true })}
                onMouseLeave={(e) => this.setState({ showEdit: false })}
            >
                <Col>
                    <input type="checkbox" onChange={this.toggleItem} checked={this.state.item.done}/>
                    <span className={`m-2 ${this.state.item.done ? "done" : null}`}>{this.state.item.title}</span>
                </Col>
                <Col>
                    <Button 
                        className="my-1" 
                        onClick={this.toggleEditMode} 
                        variant="light" 
                        size="sm"
                        style={{display: this.state.showEdit ? 'block' : 'none' }}>
                        <EditIcon />
                    </Button>
                </Col>
            </Row>)
    }
}