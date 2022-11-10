import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useReducer } from "react"

import Home from "./views/Home"
import Product from "./views/Product"
import Impressum from "./views/Impressum"
import Datenschutz from "./views/Datenschutz"

import Header from "./components/Header"
import Footer from "./components/Footer"

import data from "./data"

/**
 * Unsere bisher umfangreichste App. Wir kombinieren mehrere Technologien der letzten Wochen.
 * Wir starten mit einem initalen State. productsiNbasket speichert alle Produkte, die wir
 * zum Warenkorb hinzugefügt haben. selectedProduct speichert die Produktdaten,
 * die auf unserer Produktseiteangezeigt werden sollen.
 */

const initState = {
    productsInBasket: [],
    selectedProduct: {}
}

/**
 * Der Reducer kümmert sich um zwei cases: addToBasket fügt ein Element zum Warenkorb (productsInBasket) 
 * hinzu oder wenn es schon vorhanden ist, entfernt es. Funktionalität ist identisch mit Rezeptaufgabe.
 * selectProduct speichert im state das Produkt welches auf der Produktseite angezeigt wird. Dafür
 * bekommt es die Product ID
 */ 

const reducer = (state, action) => {
    switch(action.type) {
        case "addToBasket":
            const itemIndex = state.productsInBasket.indexOf(action.payload)

            if (itemIndex < 0) {
                state = {
                    ...state,
                    productsInBasket: [...state.productsInBasket, action.payload]
                }
            }
            else {
                state = {
                    ...state,
                    productsInBasket: state.productsInBasket.filter(p => p != action.payload)
                }
            }

            break;
        case "selectProduct":
            state = {
                ...state,
                //.find() gibt das erste Element aus einem Array zurück, dass die Bedingung erfüllt
                selectedProduct: data.find(d => d.id == action.payload)
            }
            break;
        default:
            console.warn("unknown action")
    }
    return state
}

function App() {

    const [state, dispatch] = useReducer(reducer, initState)

    /* Wir nutzen React Router um entweder unsere Home Seite zu zeigen oder die 
     * Produktseite (oder Impressum und Datenschutz). Header und Footer müssen
     * in den Router, damit <Link> funktioniert.
     * Insgesamt müssen wir viele State Variablen per Props übergeben, da unser 
     * state nur lokal in unserer app.js zugänglich ist. Bspw übergeben wir die
     * dispatch Funktion, um in anderen Komponenten das updaten der states
     * auszulösen
     */

    return (
        <div className="App">
            <Router>
                <Header countProducts={state.productsInBasket.length}/>
                <Routes>
                    <Route path="/" element={
                        <Home 
                            productsInBasket={state.productsInBasket} 
                            products={data} 
                            dispatch={dispatch}
                        />
                    }/>
                    <Route path="/product/:product_id" element={
                        <Product 
                            productsInBasket={state.productsInBasket} 
                            dispatch={dispatch} 
                            product={state.selectedProduct}
                        />
                    }/>
                    <Route path="/impressum" element={<Impressum/>}/>
                    <Route path="/datenschutz" element={<Datenschutz/>}/>
                </Routes>
                <Footer />
            </Router>
            
        </div>
    )
}

export default App