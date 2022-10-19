export default function BuyButton(props) {
    /**
     * Conditional rendering:
     * Boolean setzt Button auf enabled oder disabled
     */
    return (
        <button disabled={props.sold}>Kaufen</button>
    )
}