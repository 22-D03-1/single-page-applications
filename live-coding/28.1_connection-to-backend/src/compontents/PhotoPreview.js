import { Link } from "react-router-dom"

export default function({photo}) {
    // /files/photos/:filename
    return (
        <div className="img-preview">
            <Link to ={"/photos/" + photo.id}>
                <img src={`/files/photos/${photo.filename}`} />
            </Link>
        </div>
    )
}
