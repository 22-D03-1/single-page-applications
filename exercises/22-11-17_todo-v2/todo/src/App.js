import './App.css';

import TodoItem from "./components/TodoItem"

import {useState} from "react" 

const data = [
  {
    title: "Schrank verkaufen",
    status: false,
  },{
    title: "Altglass wegbringen",
    status: true
  }, {
    title: "Wäsche zusammen legen",
    status: false
  }
]

function App() {

  const [todos, setTodos] = useState(data)
  const [newTodo, setNewTodo] = useState("")

  const clickHandler = () => {

    const todosCopy = [...todos]

    todosCopy.push({title: newTodo})

    setTodos(todosCopy)
    setNewTodo("")
  }

  const changeHandler = (event) => {
    setNewTodo(event.target.value)
  }

  const randomTodo = async () => {
    const res = await fetch("https://www.boredapi.com/api/activity/")
    const json = await res.json()

    setTodos([
      ...todos,
      {title: json.activity}
    ])
  }
  //test
  return (
    <div className="App">
      <h1>Todo Liste</h1>
      <div>
        {todos.map((t, i)=>
          <TodoItem key={i} title={t.title}/>
        )}
      </div>
      <div>
        <input value={newTodo} onChange={changeHandler} type="text"></input>
        <button onClick={clickHandler}>Neu</button>
      </div>
      <div>
        <button 
          style={{margin: "15px", height: "40px", backgroundColor: "pink"}}
          onClick={randomTodo}
        >
          Random Todo!
        </button>
      </div>
    </div>
  );
}

export default App;
