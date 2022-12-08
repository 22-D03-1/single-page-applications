import {useParams} from "react-router-dom"
import {Container} from "react-bootstrap"

export default function(){
    const {id} = useParams()
    return(
        <Container>
            <img src="https://images.unsplash.com/photo-1661102603866-88980547aaac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Container>
    )
}