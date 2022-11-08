import { Link, useParams } from "react-router-dom";

function Error404() {
    const params = useParams();
    console.log(params);
    const searchTerm = params["*"];

    return (
        <>
            <h1>Oh... 404!</h1>
            <h2>Du hast nach {searchTerm} gesucht.</h2>
            <Link to="/">Zurück zur Startseite</Link>
        </>
    );
}

export default Error404;
