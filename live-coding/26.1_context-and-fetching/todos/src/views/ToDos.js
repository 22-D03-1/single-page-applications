import { useContext } from "react";
import { ToDosContext } from "../context/Todos";

function ToDos() {
    // Statt die Daten hier von der API anzufragen, nutzen wir lieber den Context.
    // Dort befindet sich der fetch-Aufruf in einem useEffect.
    const { todos } = useContext(ToDosContext);

    return (
        <>
            <h1>ToDos</h1>
            {todos.map(todo => (
                <article key={todo.id}>
                    <h2>{todo.id}) {todo.title}</h2>
                </article>
            ))}
        </>
    );
}

export default ToDos;
