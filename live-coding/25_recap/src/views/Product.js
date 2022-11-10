import {Container, Row, Col} from "react-bootstrap"
import {useParams} from "react-router-dom"
import {useEffect} from "react"

export default function Product({dispatch}) {
    const {product_id} = useParams()

    useEffect(()=>{
        dispatch({type: "selectProduct", payload: product_id})
        console.log(product_id)
    },[product_id])

    return (
        <Container>
            <h1>Product: {product_id}</h1>
        </Container>
    )
}