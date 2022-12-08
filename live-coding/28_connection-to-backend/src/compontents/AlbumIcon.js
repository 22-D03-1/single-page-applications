
import { Link } from "react-router-dom";

export default function({id}){

    return (
        <Link className="album-link" to={"/albums/"+id}>
            <div className="album-icon">
                <h3 className="album-name">Natur</h3>
            </div>
        </Link>
    )
}