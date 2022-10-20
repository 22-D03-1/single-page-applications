import { useState } from "react"

export default function BuyButton(props) {

    /**
     * Um eine Variable dynamisch zu ändern benötigen wir einen state.
     * Um eine state Variable zu bekommen benötigen wir von react
     * die Funktion useState. useState erwartet ein Argument und zwar den
     * default/Standard Wert der Variable.
     * Die Rückgabe von useState ist ein Array mit zwei Elementen:
     * unsere Statevariable und eine Funtion sie ab zuändern. Deswegen
     * nutzen wir die Syntax [stateVar, setStateVar] um die beiden Elemente in
     * Variablen zu speichern.
     */
    
    const [ showField, setShowField ] = useState(false)
    
    const buyClickHandler = (sold, event) => {
        //console.log(event)

        setShowField(!showField)
    }

    const buyField = (
        <div>
            <input 
                type="number"
                placeholder="Angebot eingeben"
            ></input>
            <button>Abschicken</button>
        </div>
    )


    /**
     * Um einem Element einen Event Handler zu zuordnen können wir 
     * das property onClick benutzen und eine Funktion übrgeben.
     * Wenn wir unsrer Funktion ein Argument mitgeben wollen, müssen
     * wir die Funktion bind() benutzen. bind() fungiert wie eien Rucksack
     * für unsere Funktion. Wiederrum benötigen wir außerdem das keyword this
     * um auf das click event zu referieren.
     * 
     * Alternativ zu bind() können wir innherhalb des onClick property eine arrow function
     * schreiben und unsere Funktion aufrufen. Dabei können wir Argumente übergeben.
     */
    return (
        <>
            <button 
                onClick={buyClickHandler.bind(this, props.sold)} 
                disabled={props.sold}
            >
                {showField ? "Abbrechen" : "Kaufen"}
            </button>
            {console.log("render")}
            {showField ? buyField : null}
        </>
    )
}