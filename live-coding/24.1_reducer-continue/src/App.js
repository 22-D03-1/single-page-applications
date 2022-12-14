import {
    Container, 
    Row, 
    Button,
    Alert
} from "react-bootstrap"

import user from "./user"

import { useReducer } from "react"

/**
 * Im Vergleich zu unserem ersten Beispiel können wir den reducer auf nutzen für 
 * komplexeres state management. Dafür definieren wir ein initiales State Objekt, 
 * welches alle unsere State Variablen beinhalten
 */


const initState = {
    inputEmail: "",
    inputPassword: "",
    loggedInUser: null,
    alert: null

}

/**
 * Unser reducer hat weiterhin ein switch statement, was aber nun verschiedene Actions für 
 * verschiedene State Variablen beinhaltet. Bspw haben wir sowohl cases, die wir für unser
 * controlled form benutzen als auch um unseren Nutzer einzuloggen oder alerts zu senden.
 */

const reducer = (state, action) => {
    switch (action.type) {
        case "updateInputEmail":
            state = {
                ...state,
                inputEmail: action.payload
            }
            break;
        case "updateInputPassword":
            state = {
                ...state,
                inputPassword: action.payload
            }
            break;
        case "loginUser":
            if(!state.inputEmail || !state.inputPassword) {
                state = {
                    ...state,
                    alert: "Bitte gebe Passwort und Email an"
                }
                break;
            }
            const foundUser = user.find(u => u.email == state.inputEmail)
            if(foundUser) {
                if(foundUser.password == state.inputPassword) {
                    state= {
                        ...state,
                        loggedInUser: foundUser.email,
                        alert: null
                    }
                } else {
                    state = {
                        ...state,
                        alert: "Passwort nicht korrekt"
                    }
                }
            } else {
                state = {
                    ...state,
                    alert: "Email nicht gefunden"
                }
            }
            break;
        default:
            console.warn("Unknown action")

    }
    return state
}

function App() {

    const [ state, dispatch ] = useReducer(reducer, initState)

    /**
     * Notes:
     * Alert ist ein Bootstrap Component um bspw Fehlermeldungen zu senden.
     * Dieser wird nur gezeigt wenn unsere state Variable alert einen Wert hat.
     * 
     * Außerdem nuthen wir conditional rendering um entweder unser Login Form oder 
     * eine Begrüßung zu senden
     */

    return (
        <div className="App">
            {state.alert ? (
            <Alert variant="warning">
                {state.alert}
            </Alert>) : null}
            <Container>
                { state.loggedInUser ? (<h1>Welcome to our Website {state.loggedInUser}</h1>) :
                (<>
                    <Row><h1>Login</h1></Row>
                    <Row>
                        <input 
                        className="m-2" 
                        type="email"
                        placeholder="E-Mail"
                        value={state.inputEmail}
                        onChange={(e)=> dispatch({
                            type: "updateInputEmail", 
                            payload: e.target.value
                        })}/>
                    </Row>
                    <Row>
                        <input 
                        className="m-2" 
                        type="password"
                        placeholder="Passwort"
                        value={state.inputPassword}
                        onChange={(e)=> dispatch({
                            type: "updateInputPassword", 
                            payload: e.target.value
                        })}/>
                    </Row>
                    <Row>
                        <Button onClick={()=> dispatch({type: "loginUser"})}>
                            Anmelden
                        </Button>
                    </Row>
                </>)
                }
            </Container>
        </div>
    )
}

export default App