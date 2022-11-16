import { useContext } from "react";
import { ToDosContext } from "../context/Todos";

function Home () {
    const { todos } = useContext(ToDosContext);

    return (
        <>
            <h1>Home</h1>
            <p>Du hast noch {todos.length} Aufgaben zu erledigen</p>
        </>
    );
}

export default Home;
