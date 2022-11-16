import {Link} from "react-router-dom"

export default function Footer(){
    return (
        <div className="d-flex justify-content-center my-4">
            <Link className="mx-2" to="/impressum">Impressum</Link>
            <Link className="mx-2" to="/datenschutz">Datenschutz</Link>
        </div>
    )
}