import Container from "react-bootstrap/Container"
import Recipe from "./components/Recipe"

import {useReducer} from "react"

import data from "./data"

const initState = {
    checkedSteps: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case "checkStep":
            //Findet den Index des Elements, falls nicht vorhanden -1
            const stepIndex = state.checkedSteps.indexOf(action.payload)

            //Wenn -1 (also vorhanden im Array) nutze .filter Funktion um nur die anderen zürückzugeben
            if(stepIndex >= 0) {
                state = {
                    ...state,
                    checkedSteps: state.checkedSteps.filter(el => el !== action.payload)
                }
            //Falls nicht füge es hinzu
            } else {
                state = {
                    ...state,
                    checkedSteps: [...state.checkedSteps, action.payload]
                }
            }
            break;
        case "reset":
            state = {
                ...state,
                checkedSteps: []
            }
            break;
        default:
            console.warn("unknown action")
    }
    return state
}

function App() {

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <div className="App">
            <Container>
                <h1>Cooking and Coding with Ferdi</h1>
                <Recipe 
                    recipe={data[0]} 
                    dispatch={dispatch}
                    checkedSteps={state.checkedSteps}
                />
                <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
            </Container>
        </div>
    )
}

export default App