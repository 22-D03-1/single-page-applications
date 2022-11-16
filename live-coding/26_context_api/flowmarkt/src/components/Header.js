import { useContext } from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom"

import { ProductsContext } from "../context/Products";

export default function Header() {
    const { productsInBasket } = useContext(ProductsContext);

    return (
        <Navbar bg="warning">
            <Container>
                <Navbar.Brand><Link to="/">Flowmarkt</Link></Navbar.Brand>
                <span>{productsInBasket.length} Produkte im Warenkorb</span>
            </Container>
        </Navbar>
    )
}
