import "./Food.scss"


export default function Food({ food }) {
    /**
     * Inline Styling:
     * Wir übergeben ein Objekt an unser HTML Element über das property style
     * Innerhalb des Objektes können wir alle CSS styles angeben.
     * Die Schreibweise mit - funktioniert nicht. Deswegen nutzen wir camelCase.
     * Wenn wir eine Zahl übergeben dann ist das automatisch Pixel. Wenn wir bspw. 
     * em nutzen wollen, müssen wir das mit Anführungszeichen schreiben.
     * 
     * Styling über Classes/ID:
     * Wir können unsere Styles auch in eine CSS Datei auslagern und über:
     * import "./Component.css" zugänglich machen. Dann müssen wir nur 
     * noch dem HTML Element die notwendige Klasse geben.
     */

    const h3Style = {
        fontSize: "20px"
    }

    return (
        <div className="food-container ">
            <div className="img-container">
                <img className="food-img rounded" src={food.img} />
            </div>
            <h3 className="higlighted-headline mt-2" style={h3Style}>{food.name}</h3>
        </div>
    )
}