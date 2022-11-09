import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Laptop",
    },
    {
        id: 2,
        name: "Keyboard",
    },
    {
        id: 3,
        name: "Mouse",
    }
];

function Products() {
    return (
        <>
            <h1>Products</h1>

            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name} ({product.id})</h2>
                    <Link to={`/products/${product.id}`}>Zum Produkt</Link>
                </div>
            ))}

            <div>
                <h2>Does Not Exist (42)</h2>
                <Link to={`/products/42`}>Zum Produkt</Link>
            </div>
        </>
    );
}

export default Products;
