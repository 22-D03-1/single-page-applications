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
            state = {
                ...state,
                productsInBasket: [...state.productsInBasket, action.payload]
            }
            break;
        case "selectProduct":
            state = {
                ...state,
                selectedProduct: data.find(d => d.id == action.payload)
            }
            console.log(state.selectedProduct)
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
                    <Route path="/" element={<Home products={data} dispatch={dispatch}/>}/>
                    <Route path="/impressum" element={<Impressum/>}/>
                    <Route path="/datenschutz" element={<Datenschutz/>}/>
                    <Route path="/:product_id" element={<Product dispatch={dispatch}/>}/>
                </Routes>
                <Footer />
            </Router>
            
        </div>
    )
}

export default App