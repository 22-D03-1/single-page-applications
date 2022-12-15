import { Link } from "react-router-dom"

export default function({photo}) {
    // /files/photos/:filename
    const imageSrc = photo.filename ? `/files/photos/${photo.filename}` : photo.url
    return (
        <div className="img-preview">
            <Link to ={"/photos/" + photo.id}>
                <img src={imageSrc} />
            </Link>
        </div>
    )
}
