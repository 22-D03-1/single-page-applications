import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from "./context/Products"

import Home from "./views/Home"
import Product from "./views/Product"
import Impressum from "./views/Impressum"
import Datenschutz from "./views/Datenschutz"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Products>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:product_id" element={
                            <Product />
                        } />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                    </Routes>
                    <Footer />
                </Router>
            </Products>
        </div>
    )
}

export default App
