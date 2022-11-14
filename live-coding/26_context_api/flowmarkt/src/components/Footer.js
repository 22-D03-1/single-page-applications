import {Link} from "react-router-dom"

export default function Footer(){
    return (
        <div>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
        </div>
    )
}