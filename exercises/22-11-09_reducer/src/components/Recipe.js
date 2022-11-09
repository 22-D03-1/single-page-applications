import "./Recipe.css"
import Row from "react-bootstrap/Row"

export default function Recipe({recipe, dispatch, checkedSteps}) {
    return (
        <>
            <Row>
                <img className="w-50" src={recipe.picture}/>
            </Row>
            <Row>
                <h2>{recipe.name}</h2>
            </Row>
            { recipe.steps.map((s, i) => 
                (<Row key={i}>
                    <div
                        className={`recipe-step m-2 border rounded hover-overlay ${checkedSteps.includes(i) ? " checked" : ""}`}
                        onClick={()=> {dispatch({type:"checkStep", payload: i})}}
                    >
                        <p>{s}</p>
                    </div>
                </Row>)
            )}
        </>
    )
}