function Button({ handleClick }) {
    console.log("render Button");
    return (
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    );
}

export default Button;
