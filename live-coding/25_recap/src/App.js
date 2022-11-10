import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useReducer } from "react"

import Home from "./views/Home"
import Product from "./views/Product"
import Impressum from "./views/Impressum"
import Datenschutz from "./views/Datenschutz"

import Header from "./components/Header"
import Footer from "./components/Footer"

import data from "./data"

const initState = {
    productsInBasket: [],
    selectedProduct: {}
}

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

    return (
        <div className="App">
            <Router>
                <Header countProducts={state.productsInBasket.length}/>
                <Routes>
                    <Route path="/" element={
                        <Home productsInBasket={state.productsInBasket} products={data} dispatch={dispatch}/>
                    }/>
                    <Route path="/impressum" element={<Impressum/>}/>
                    <Route path="/datenschutz" element={<Datenschutz/>}/>
                    <Route path="/:product_id" element={
                        <Product productsInBasket={state.productsInBasket} dispatch={dispatch} product={state.selectedProduct}/>
                    }/>
                </Routes>
                <Footer />
            </Router>
            
        </div>
    )
}

export default App