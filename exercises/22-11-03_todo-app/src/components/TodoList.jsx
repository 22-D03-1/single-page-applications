import { Component } from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div>
                {this.props.todos.map((t, i)=> 
                    <TodoItem key={i} item={t}/>
                )}
            </div>
        )
    }
}