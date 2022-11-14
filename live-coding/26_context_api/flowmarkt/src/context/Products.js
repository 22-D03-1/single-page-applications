import { createContext, useState } from "react";
import data from "../data";

export const ProductsContext = createContext();


function Products({ children }) {
    const [products] = useState(data);
    const [productsInBasket, setProductsInBasket] = useState([2, 4]);

    const toggleProductInBasket = productId => {
        const inBasket = productsInBasket.includes(productId);

        setProductsInBasket((prev) => {
            if (!inBasket) {
                return [...prev, productId];
            } else {
                return prev.filter(id => id !== productId);
            }
        });
    };

    const findProduct = productId => {
        return products.find(product => product.id === +productId);
    }

    return (
        <ProductsContext.Provider value={{
            products: products,
            productsInBasket: productsInBasket,
            toggleProductInBasket: toggleProductInBasket,
            findProduct: findProduct,
        }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default Products;
