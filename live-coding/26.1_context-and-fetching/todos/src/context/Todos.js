import { useState, useEffect, createContext } from "react";

export const ToDosContext = createContext();

function ToDosProvider({ children }) {
    const [todos, setTodos] = useState([]);

    // Würden wir die API in der ToDos-View anfragen,
    // müssten wir dies bei jedem Seitenwechsel (erst zu Home, dann zurück zu ToDos) erneut machen.
    // Das ist natürlich gerade bei Netzwerkanfragen kritisch, da wir hier so sparsam wie möglich sein wollen.
    // Weniger Netzwerkverkehr bedeutet weniger verbrauchtes Datenvolumen (für mobile Endgeräte)
    // und vor allem eine schnellere App.
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(json => setTodos(json));
    }, []);

    return (
        <ToDosContext.Provider value={{ todos }}>
            {children}
        </ToDosContext.Provider>
    )
}

export default ToDosProvider;
