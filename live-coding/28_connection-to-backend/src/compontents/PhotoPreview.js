import { Link } from "react-router-dom"

export default function({photo}) {
    return (
        <div className="img-preview">
            <Link to ={"/photos/" + photo.id}>
                <img src="https://images.unsplash.com/photo-1661102603866-88980547aaac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
            </Link>
        </div>
    )
} 